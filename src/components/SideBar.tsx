import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem, Tooltip } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import TimelineIcon from "@material-ui/icons/Timeline";
import ViewAgendaOutlinedIcon from "@material-ui/icons/ViewAgendaOutlined";
import { logoutUser } from "../redux/actions/auth";
import styled from "styled-components/macro";

const StyledDrawer = styled(Drawer)`
  && {
    .MuiPaper-root {
      background-color: transparent;
      border: none;
    }
    ul {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

const listIconStyle = {
  minWidth: 0,
  padding: 20,
  color: "white",
};

interface LoadRootState {
  loadUser: {
    loading: boolean;
    isAuthenticated: boolean;
    user: {
      watchLists: Array<{ name: string; symbols: Array<string> }>;
      id: string;
      name: string;
      email: string;
    };
  };
}
interface LoginRootState {
  login: {
    loading: boolean;
    error: string;
    isAuthenticated: boolean;
    user: {
      watchLists: Array<{ name: string; symbols: Array<string> }>;
      id: string;
      name: string;
      email: string;
    };
  };
}

const SideBar = () => {
  const dispatch = useDispatch();
  const isAuthenticatedLogin = useSelector(
    (state: LoginRootState) => state.login.isAuthenticated
  );
  const isAuthenticatedLoadUser = useSelector(
    (state: LoadRootState) => state.loadUser.isAuthenticated
  );
  const logout = () => dispatch(logoutUser());
  
  return (
    <>
      {(isAuthenticatedLogin || isAuthenticatedLoadUser) && (
        <StyledDrawer variant="permanent">
          <List>
            <div>
              <ListItem button component={Link} to="/watchlist">
                <Tooltip title="Watchlists" placement="right">
                  <ListItemIcon style={listIconStyle}>
                    <ViewAgendaOutlinedIcon />
                  </ListItemIcon>
                </Tooltip>
              </ListItem>
              <ListItem button component={Link} to="/dashboard">
                <Tooltip title="Dashboard" placement="right">
                  <ListItemIcon style={listIconStyle}>
                    <DashboardIcon />
                  </ListItemIcon>
                </Tooltip>
              </ListItem>
              <ListItem button component={Link} to="/charts">
                <Tooltip title="Charts" placement="right">
                  <ListItemIcon style={listIconStyle}>
                    <TimelineIcon />
                  </ListItemIcon>
                </Tooltip>
              </ListItem>
              <ListItem button component={Link} to="/search">
                <Tooltip title="Search" placement="right">
                  <ListItemIcon style={listIconStyle}>
                    <SearchIcon />
                  </ListItemIcon>
                </Tooltip>
              </ListItem>
            </div>

            <div>
              <ListItem button component={Link} to="/" onClick={logout}>
                <Tooltip title="Map" placement="right">
                  <ListItemIcon style={listIconStyle}>
                    <ExitToAppIcon />
                  </ListItemIcon>
                </Tooltip>
              </ListItem>
            </div>
          </List>
        </StyledDrawer>
      )}
    </>
  );
};

export default SideBar;
