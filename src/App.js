import React from "react";
import Introduction from "./introduction.js";
import Cause from "./cause.js";
import Prevention from "./prevention.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Nav.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={Introduction} exact />
          <Route path="/cause" component={Cause} />
          <Route path="/prevention" component={Prevention} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
