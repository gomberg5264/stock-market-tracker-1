import React, { useEffect, FC } from "react";
import { Route, RouteProps, Redirect } from "react-router";
import { useSelector } from "react-redux";
interface LoadRootState {
  loadUser: {
    token: string;
    loading: boolean;
    error: string;
    isAuthenticated: boolean;
  };
}
interface LoginRootState {
  login: {
    loading: boolean;
    error: string;
    isAuthenticated: boolean;
  };
}
interface PrivateRouteProps extends RouteProps {}

const PrivateRoute: FC<PrivateRouteProps> = ({ children, ...rest }) => {
  const isAuthenticatedLogin = useSelector(
    (state: LoginRootState) => state.login.isAuthenticated
  );
  const isAuthenticatedLoadUser = useSelector(
    (state: LoadRootState) => state.loadUser.isAuthenticated
  );
  
  return (
    <Route
      {...rest}
      render={() =>
       (isAuthenticatedLogin || isAuthenticatedLoadUser) ? (
          children
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
