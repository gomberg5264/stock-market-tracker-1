import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { ListItem } from "@material-ui/core";
import styled from "styled-components/macro";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/auth";
import Header from "./Header";

const StyledAppBar = styled(AppBar)`
  && {
    background: transparent;
    padding-top: 30px;
    box-shadow: none;
  }
`;

const StyledDrawer = styled(Drawer)`
  div.MuiPaper-root {
    width: 100%;
    background-color: transparent;
    color: white;
  }
  .MuiIconButton-root {
    margin: 20px;
  }
  ul {
    height: ${window.innerHeight}px;
    padding: 0px 0 0 80px;
    font-family: "Bebas Neue", cursive;
    li:first-child {
      display: flex;
      justify-content: flex-end;
    }
    background: radial-gradient(
      168.45% 88.95% at 52.54% 0%,
      #e5006e 23.89%,
      #09294f 74.1%,
      #1a1527 100%
    );
    a {
      font-size: 30px;
      font-weight: bold;
      color: inherit;
      :hover {
        text-decoration: underline;
      }
    }
  }
`;
type MenuProps = {
  headerText: string;
};
const Menu: FC<MenuProps> = ({ headerText }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("/");

  useEffect(() => {
    setPage(window.location.pathname);
  }, [window.location.pathname]);
  const logout = () => dispatch(logoutUser());

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };
  return (
    <>
      <StyledAppBar position="static">
        <Toolbar>
          <Grid justify="space-between" container>
            <Grid item>
              <Header>{headerText}</Header>
            </Grid>
            <Grid item>
              <IconButton
                onClick={toggleDrawer(true)}
                onKeyDown={toggleDrawer(true)}
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </StyledAppBar>

      <StyledDrawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem>
              <IconButton
                onClick={toggleDrawer(false)}
                edge="end"
                color="inherit"
                aria-label="clear"
              >
                <ClearIcon fontSize="large" />
              </IconButton>
            </ListItem>
            <ListItem button component={Link} to="/profile">
              My Profile
            </ListItem>
            <ListItem button component={Link} to="/" onClick={logout}>
              Log out
            </ListItem>
          </List>
        </div>
      </StyledDrawer>
    </>
  );
};

export default Menu;
