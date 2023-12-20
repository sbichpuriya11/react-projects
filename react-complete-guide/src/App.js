import { createContext, useReducer } from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import ClassCounterOne from "./components/ClassCounterOne";
import ClassMouse from "./components/ClassMouse";
import DataFetching from "./components/DataFetching";
import HookCounter from "./components/HookCounter";
import HookCounterOne from "./components/HookCounterOne";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCountFour from "./components/HookCountFour";
import HookMouse from "./components/HookMouse";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import MouseContainer from "./components/MouseContainer";
import ComponentD from "./components/useContext/ComponentD";
import ComponentA from "./components/useReducer+useContext/ComponentA";
import ComponentB from "./components/useReducer+useContext/ComponentB";
import ComponentC from "./components/useReducer+useContext/ComponentC";
import CounterOne from "./components/useReducer/CounterOne";
import CounterThree from "./components/useReducer/CounterThree";
import CounterTwo from "./components/useReducer/CounterTwo";

{
  /* Note traditional approach is to pass down the requrired value as prop from ComponentD->ComponentE->ComponentF*/
  // But after the introduction of useContext we can directly utilize the value from context, without passing value as prop from each component
}

//3 steps to implement context
//create a context from where we need to pass the data (eg. app component)
//provide the context value at the high level tree
// consume the context value
export const UserContext = createContext();
export const ChannelContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
export const CountContext = createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCountFour /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}

      {/* useContext */}
      {/* <UserContext.Provider value={"luv2code.com"}>
        <ChannelContext.Provider value={"CodeVolution"}>
          <ComponentD />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* UseReducer */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}

      {/* useReducer with useContext */}
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        Count {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}

export default App;
