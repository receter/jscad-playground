import "./App.css";

import { useState } from "react";

import defaultSource from "./jscadDefaultSource";

function App() {
  const [source, setSource] = useState(defaultSource);
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
          <button>Run code</button>
        </div>
      </div>
      <canvas id="viewer" style={{ width: "50vw", height: "100vh" }} />
    </div>
  );
}

export default App;
