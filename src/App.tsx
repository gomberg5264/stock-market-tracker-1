import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const InfoPage = lazy(() => import("./InfoPage"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/info">
            <InfoPage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
