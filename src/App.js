import { useState } from "react";
import "./App.css";
import Grid from "./Grid/Grid";

function App() {
  const [seed, setSeed] = useState(Math.random());
  return (
    <div className="App">
      <h1>Catan Better</h1>

      <Grid seed={seed} />
      <br />
      <button class="generate" onClick={() => setSeed(Math.random())}>
        Generate
      </button>
    </div>
  );
}

export default App;
