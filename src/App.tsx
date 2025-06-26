import "./App.css";
import { decrement, increment, reset } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.count);
  const handleIncrement = () => {
    dispatch(increment(9));
  };

  const handleDecrement = () => {
    dispatch(decrement(5));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      {/* counter buttons */}
      <h1>Counter App</h1>
      <div className="counter-buttons">
        <button onClick={handleIncrement} className="counter-button increment">
          Increment
        </button>
        <button onClick={handleDecrement} className="counter-button decrement">
          Decrement
        </button>
        <button onClick={handleReset} className="counter-button reset">
          Reset
        </button>
      </div>
      {/* counter display */}
      <div className="counter-display">
        <p id="count">Current Count: {count} </p>
      </div>
    </div>
  );
}

export default App;
