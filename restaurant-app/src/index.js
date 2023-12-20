import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context/StateProvider";
import reducer from "./context/Reducer";
import { initialState } from "./context/initialState";

ReactDOM.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </Router>,
  document.getElementById("root")
);
