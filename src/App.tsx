import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./auth/LoginPage";
import Register from "./auth/Register";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./routing/PrivateRoute";
import PageWrapper from "./components/PageWrapper";
import { loadUser } from "./redux/actions/auth";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser(localStorage.getItem("token")||''));
  }, [loadUser]);

  return (
    <Router>
      <Switch>
        <ThemeProvider theme={darkTheme}>
          <PageWrapper>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>
          </PageWrapper>
        </ThemeProvider>
      </Switch>
    </Router>
  );
};

export default App;
