import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./auth/LoginPage";
import Register from "./auth/Register";
import Home from "./components/Home";
import WatchlistPage from "./components/WatchlistPage";
import ChartPage from "./components/ChartPage";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./routing/PrivateRoute";
import { loadUser } from "./redux/actions/auth";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser(localStorage.getItem("token") || ""));
  },[]);

  return (
    <Router>
      <Switch>
        <ThemeProvider theme={darkTheme}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute exact path="/watchlist">
            <WatchlistPage />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/chart">
            <ChartPage />
          </PrivateRoute>
        </ThemeProvider>
      </Switch>
    </Router>
  );
};

export default App;
