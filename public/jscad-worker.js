// Currently importmaps are not supported in workers so we need to rename bare imports and provide a full URL.
self.onmessage = async (event) => {
  const { source, args, type } = event.data;

  if (type === "start") {
    console.info("Worker started…");

    let module;
    let loadTime;
    // Create a Blob URL from the user-provided module code.
    const sourceWithRenamedImports = renameBareImports(
      String(source),
      "https://esm.sh/",
    );
    const blob = new Blob([sourceWithRenamedImports], {
      type: "application/javascript",
    });
    const url = URL.createObjectURL(blob);

    try {
      // Import the module and measure load time.
      const loadStart = performance.now();
      module = await import(url);
      loadTime = performance.now() - loadStart;
    } finally {
      // Revoke the blob object URL to free up memory.
      URL.revokeObjectURL(url);
    }
    console.info(`Worker has loaded the module in ${loadTime.toFixed(2)}ms.`);

    // Execute the exported main() function and measure execution time.
    if (!module.main) {
      throw new Error("Module does not export a main() function.");
    }
    const execStart = performance.now();
    const result = module.main(args);
    const execTime = performance.now() - execStart;
    console.info(`Worker has executed the module in ${execTime.toFixed(2)}ms.`);
    // Send back the successful result.
    self.postMessage({ type: "result", result, execTime, loadTime });
    self.close();
  }
};

// https://stackoverflow.com/questions/52086611/regex-for-matching-js-import-statements
// Make sure the regex is global.
const importReg =
  /import(?:(?:(?:[ \n\t]+([^ *\n\t{},]+)[ \n\t]*(?:,|[ \n\t]+))?([ \n\t]*\{(?:[ \n\t]*[^ \n\t"'{}]+[ \n\t]*,?)+\})?[ \n\t]*)|[ \n\t]*\*[ \n\t]*as[ \n\t]+([^ \n\t{}]+)[ \n\t]+)from[ \n\t]*(?:['"])([^'"\n]+)(['"])/g;

function renameBareImports(code, prefix = "", suffix = "") {
  return code.replace(importReg, (match, p1, p2, p3, moduleSpecifier) => {
    // If the specifier starts with '.' or '/', assume it’s already a proper relative path.
    if (moduleSpecifier.startsWith(".") || moduleSpecifier.startsWith("/")) {
      return match;
    }
    // Find the opening quote (either ' or ") that begins the module specifier.
    const quoteIndex = match.search(/['"]/);
    if (quoteIndex === -1) return match; // fallback if no quote is found
    const quoteChar = match[quoteIndex];
    // Find the corresponding closing quote.
    const closingQuoteIndex = match.indexOf(quoteChar, quoteIndex + 1);
    if (closingQuoteIndex === -1) return match; // fallback if closing quote not found

    // (Optional) double-check that the text between the quotes matches group 4.
    const originalSpecifier = match.slice(quoteIndex + 1, closingQuoteIndex);
    if (originalSpecifier !== moduleSpecifier) {
      return match; // should not happen, but leave unchanged if it does
    }

    // Build the new module specifier.
    const newSpecifier = prefix + moduleSpecifier + suffix;
    // Reconstruct the import statement, replacing only the module specifier.
    return (
      match.slice(0, quoteIndex + 1) +
      newSpecifier +
      match.slice(closingQuoteIndex)
    );
  });
}
