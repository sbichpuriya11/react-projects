import { createContext, useReducer } from "react";
import { ClassCounter } from "./components/ClassCounter";
import ClassCounterOne from "./components/ClassCounterOne";
import { ClassCounterTwo } from "./components/ClassCounterTwo";
import ClassMouse from "./components/ClassMouse";
import { ComponentC } from "./components/ComponentC";
import { DataFetching } from "./components/DataFetching";
import { HooksCounter } from "./components/HookCounter";
import { HookCounterFour } from "./components/HookCounterFour";
import HookCounterOne from "./components/HookCounterOne";
import { HookCounterThree } from "./components/HookCounterThree";
import { HookCounterTwo } from "./components/HookCounterTwo";
import { HookMouse } from "./components/HookMouse";
import { IntervalClassCounter } from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import { MouseContainer } from "./components/MouseContainer";
import "./styles.css";
import { CounterOne } from "./components/CounterOne";
import { CounterTwo } from "./components/CounterTwo";
import { CounterThree } from "./components/CounterThree";
import { FamilyComponentA } from "./components/FamilyComponentA";
import { FamilyComponentB } from "./components/FamilyComponentB";
import { FamilyComponentC } from "./components/FamilyComponentC";
import { DataFetchingOne } from "./components/DataFetchingOne";
import { DataFetchingTwo } from "./components/DataFetchingTwo";
import { ParentComponent } from "./components/ParentComponent";

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

export default function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h3>Hello CodeSandbox</h3>
      <p>Start editing to see some magic happen!</p>
      {/* <ClassCounter />
      <br />
      <HooksCounter />
      <br />
      <HookCounterTwo />
      <br />
      <ClassCounterTwo />
      <br />
      <HookCounterThree />
      <br />
      <HookCounterFour />
      <br />
      <ClassCounterOne />
      <br />
      <HookCounterOne />
      <br />
      <ClassMouse />
      <br />
      <HookMouse />
      <MouseContainer /> */}
      {/* <IntervalClassCounter />
      <br />
      <IntervalHookCounter /> */}
      {/* <br/> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={{ title: "Mr.", name: "Somil Bichpuriya" }}>
        <ChannelContext.Provider value={"WLV_E2E_QUALITY_ASSURANCE"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}

      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        Count: {count}
        <FamilyComponentA />
        <FamilyComponentB />
        <FamilyComponentC />
      </CountContext.Provider> */}
      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}

      <ParentComponent />
    </div>
  );
}
