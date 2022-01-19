import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Root from "./Root";
import { history } from "../_helpers/history";

function App() {
  return (
    <Router history={history}>
      <Root />
    </Router>
  );
}

export default App;
