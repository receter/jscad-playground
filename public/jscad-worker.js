// This worker is currently not used but it could be used to run the jscad code in a worker thread
// The problem is that currently importmaps are not supported in workers
self.onmessage = async (event) => {
  const { source, params } = event.data;
  try {
    // Create a Blob URL from the user-provided module code.
    // (It’s important that the Blob’s MIME type is "application/javascript")
    console.info("Worker initializing");
    const blob = new Blob(
      [renameBareImports(String(source), "https://esm.sh/", "")],
      {
        type: "application/javascript",
      },
    );
    const url = URL.createObjectURL(blob);

    // Dynamically import the module.
    // Creating the worker with type "module" means that (in browsers that support it)
    // the import map defined in your HTML will be used.
    const loadStart = performance.now();
    const module = await import(url);
    const loadTime = performance.now() - loadStart;
    console.info(`Worker has loaded the module in ${loadTime.toFixed(2)}ms`);

    // Execute the exported main() function.
    const execStart = performance.now();
    const result = module.main(params);
    const execTime = performance.now() - execStart;
    console.info(`Worker has executed the module in ${execTime.toFixed(2)}ms`);

    // Send back the successful result.
    self.postMessage({ type: "jscadResult", solids: result });

    // Clean up the Blob URL.
    URL.revokeObjectURL(url);
  } catch (err) {
    // Send back an error message.
    self.postMessage({ type: "jscadError", error: err.message });
  }
};

// https://stackoverflow.com/questions/52086611/regex-for-matching-js-import-statements
// Make sure the regex is global.
const importReg =
  /import(?:(?:(?:[ \n\t]+([^ *\n\t{},]+)[ \n\t]*(?:,|[ \n\t]+))?([ \n\t]*\{(?:[ \n\t]*[^ \n\t"'{}]+[ \n\t]*,?)+\})?[ \n\t]*)|[ \n\t]*\*[ \n\t]*as[ \n\t]+([^ \n\t{}]+)[ \n\t]+)from[ \n\t]*(?:['"])([^'"\n]+)(['"])/g;

function renameBareImports(code, prepend = "./", append = ".js") {
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
    const newSpecifier = prepend + moduleSpecifier + append;
    // Reconstruct the import statement, replacing only the module specifier.
    return (
      match.slice(0, quoteIndex + 1) +
      newSpecifier +
      match.slice(closingQuoteIndex)
    );
  });
}
