import "./App.css";

import { useState } from "react";

import defaultSource from "./jscadDefaultSource";

function App() {
  const [source, setSource] = useState(defaultSource);
  return (
    <div style={{ display: "flex" }}>
      <textarea
        value={source}
        onChange={(e) => setSource(e.target.value)}
        style={{ width: "50vw", height: "100vh" }}
      />
      <canvas id="viewer" style={{ width: "50vw", height: "100vh" }} />
    </div>
  );
}

export default App;
