import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import {
  AppBar,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  Toolbar,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/auth";
import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components/macro";

const StyledAppBar = styled(AppBar)`
  && {
    background: transparent;
    padding-top: 30px;
    box-shadow: none;

    @media screen and (min-width: 1000px) {
      .menu {
        display: none;
      }
    }
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
      #49418c 23.89%,
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
                className="menu"
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
            <ListItem button component={Link} to="/dashboard">
              Dashboard
            </ListItem>
            <ListItem button component={Link} to="/" onClick={logout}>
              Log out
            </ListItem>
          </List>
        </div>
      </StyledDrawer>
      <SideBar />
    </>
  );
};

export default Menu;
