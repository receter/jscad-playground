import "./App.css";

import { useState } from "react";

import defaultSource from "./jscadDefaultSource";

// Todolist:
// TODO: Sandbox the code execution in an iframe with postMessage
//

function App() {
  const [source, setSource] = useState(defaultSource);

  function handleClickRunCode() {
    runCode();
  }

  const runCode = async () => {
    try {
      // Create a Blob URL from the user-provided module code
      const blob = new Blob([source], { type: "application/javascript" });
      const url = URL.createObjectURL(blob);

      // Dynamically import the module.
      // The browser will resolve the import specifiers using the import map (or relative to the Blob)
      const module = await import(url);

      // Execute the exported main() function.
      const mainResult = module.main();

      console.log(JSON.stringify(mainResult, null, 2));

      // Clean up the Blob URL
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "50vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <textarea
          value={source}
          onChange={(e) => setSource(e.target.value)}
          style={{ width: "100%", height: "100%" }}
        />
        <div style={{ display: "flex", padding: "1rem", gap: "1rem" }}>
          <button onClick={handleClickRunCode}>Run code</button>
        </div>
      </div>
      <canvas id="viewer" style={{ width: "50vw", height: "100vh" }} />
    </div>
  );
}

export default App;
