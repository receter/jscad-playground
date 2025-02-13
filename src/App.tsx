import "./App.css";

import { useRef, useState } from "react";

import defaultSource from "./jscadDefaultSource";
import { Solids, SolidsRenderer } from "./SolidsRenderer";

// Todolist:
// TODO: Sandbox the code execution in an iframe with postMessage
//

function App() {
  const [source, setSource] = useState(defaultSource);
  const [solids, setSolids] = useState<Solids | null>(null);
  const refWorker = useRef<Worker | null>(null);

  function handleClickRunCode() {
    runCode();
  }

  const runCode = async () => {
    try {
      // Create a Blob URL from the user-provided module code
      const blob = new Blob([source], { type: "application/javascript" });
      const url = URL.createObjectURL(blob);

      // Measure load time for dynamic import.
      const loadStart = performance.now();
      const module = await import(/* @vite-ignore */ url);
      const loadTime = performance.now() - loadStart;
      console.info(`Module loaded in ${loadTime.toFixed(2)}ms`);

      // Execute the exported main() function and measure execution time.
      const execStart = performance.now();
      const mainResult = module.main();
      const execTime = performance.now() - execStart;
      console.info(`Module executed in ${execTime.toFixed(2)}ms`);

      setSolids(mainResult);

      // Clean up the Blob URL
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
    }
  };

  const handleClickRunCodeInWorker = () => {
    runCodeInWorker();
  };

  const runCodeInWorker = async () => {
    try {
      // Terminate the previous Worker if it exists
      if (refWorker.current) {
        refWorker.current.terminate();
        console.info("Worker terminated");
      }

      // Create a Worker
      const worker = new Worker("/jscad-worker.js", { type: "module" });

      // Listen for messages from the Worker
      worker.onmessage = (event) => {
        setSolids(event.data.solids);
      };

      // Start the worker by sending it the source code and parameters.
      worker.postMessage({ source: String(source), params: {} });

      // Store the Worker in a ref
      refWorker.current = worker;
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
          <button onClick={handleClickRunCodeInWorker}>
            Run code in worker
          </button>
        </div>
      </div>
      <div id="viewer" style={{ width: "50vw", height: "100vh" }}>
        {solids && <SolidsRenderer solids={solids} />}
      </div>
    </div>
  );
}

export default App;
