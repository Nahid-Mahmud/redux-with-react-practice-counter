import "./App.css";

function App() {
  return (
    <div>
      {/* counter buttons */}
      <h1>Counter App</h1>
      <div className="counter-buttons">
        <button className="counter-button increment">Increment</button>
        <button className="counter-button decrement">Decrement</button>
        <button className="counter-button reset">Reset</button>
      </div>
      {/* counter display */}
      <div className="counter-display">
        <p id="count">Current Count: 0</p>
      </div>
    </div>
  );
}

export default App;
