import "./App.css";

import { useSelector, useDispatch } from "react-redux";

import { incNumber, decNumber } from "./actions/index";

function App() {
  const currentState = useSelector((state) => state.updateValue);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>Hello World!</p>
      <summary>Let's see React-Redux with Simple Counter example.</summary>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 40,
        }}
      >
        <button
          style={{ marginRight: "40px" }}
          onClick={() => dispatch(incNumber())}
        >
          Increment
        </button>
        {currentState}
        <button
          style={{ marginLeft: "40px" }}
          onClick={() => dispatch(decNumber())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
