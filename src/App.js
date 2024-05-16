import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement,
  increment,
  reset,
} from "./actions/index"

function App() {

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
 



  return (
    <div className="App">
      <h1>Redux CounterApp</h1>
      <div className="container">
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{counter}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <button className="reset" onClick={() => dispatch(reset())}>
        reset
      </button>
    </div>
  );
}

export default App;
