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
    runCode(source)
      .then(({ result }) => {
        setSolids(result as Solids);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const handleClickRunCodeInWorker = () => {
    runCodeInWorker();
  };

  function runCodeInWorker() {
    if (refWorker.current) {
      // Terminate the previous worker.
      refWorker.current.terminate();
    }

    // Create a new Worker
    const worker = new Worker("/jscad-worker.js", {
      type: "module",
    });

    // Store the Worker in a ref
    refWorker.current = worker;

    worker.addEventListener("message", (event) => {
      if (event.data.type === "result") {
        setSolids(event.data.result as Solids);
      }
    });

    worker.addEventListener("error", (event) => {
      console.error(event);
    });

    // Start the worker by sending it the source code and parameters.
    worker.postMessage({
      type: "start",
      source,
      args: {},
    });
  }

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

const runCode = async (source: string) => {
  let module: { main?: () => unknown };
  let loadTime: number;

  // Create a Blob URL from the user-provided module code.
  const blob = new Blob([source], { type: "application/javascript" });
  const url = URL.createObjectURL(blob);

  try {
    // Import the module and measure load time.
    const loadStart = performance.now();
    module = await import(/* @vite-ignore */ url);
    loadTime = performance.now() - loadStart;
  } finally {
    // Revoke the blob object URL (!)
    URL.revokeObjectURL(url);
  }
  console.info(`Module loaded in ${loadTime.toFixed(2)}ms`);

  // Execute the exported main() function and measure execution time.
  if (!module.main) {
    throw new Error("Module does not export a main() function");
  }
  const execStart = performance.now();
  const result = module.main();
  const execTime = performance.now() - execStart;
  console.info(`Module executed in ${execTime.toFixed(2)}ms`);
  return { result, execTime, loadTime };
};

export default App;
