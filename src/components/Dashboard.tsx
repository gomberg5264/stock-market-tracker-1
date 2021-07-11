import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/auth";
import { getIntradayPrices } from "../redux/actions/intradayPrices";
import Menu from "./Menu";

interface LoadRootState {
  loadUser: {
    loading: boolean;
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

interface IntradayPricesState {
  intradayPrices: {
    prices: any;
    loading: boolean;
    error: { message: string };
  };
}
const Dashboard = () => {
  const dispatch = useDispatch();

  const isAuthenticatedLogin = useSelector(
    (state: LoginRootState) => state.login.isAuthenticated
  );
  const isAuthenticatedLoadUser = useSelector(
    (state: LoadRootState) => state.loadUser.isAuthenticated
  );

  const intradayData = useSelector(
    (state: IntradayPricesState) => state.intradayPrices.prices
  );
  const intradayPrices = intradayData[0];
  const currentPrices = intradayData[1];
  const intradayPricesLoading = useSelector(
    (state: IntradayPricesState) => state.intradayPrices.loading
  );

  useEffect(() => {
    dispatch(getIntradayPrices());
  }, []);

  const logout = () => dispatch(logoutUser());

  return (
    <>
      <Menu headerText="Dashboard" />
      {(isAuthenticatedLogin || isAuthenticatedLoadUser) && (
        <div>
          {!intradayPricesLoading && intradayData.length > 0 && (
            <div>Table</div>
          )}
        </div>
      )}
    </>
  );
};

export default Dashboard;
