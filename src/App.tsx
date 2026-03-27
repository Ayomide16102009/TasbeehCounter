import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  
  const resetCount = () => setCount(0);

  return (
    <div className="app">
      <h1 className="title">Tasbeeh Counter</h1>

      <div className="counter">
        <p className="count">{count}</p>
        <div className="buttons">
          <button onClick={() => setCount(count + 1)} className="btn increment">
            Count
          </button>
          <button onClick={resetCount} className="btn reset">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

