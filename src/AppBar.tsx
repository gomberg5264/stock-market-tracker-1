import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import BubbleIcon from "./BubbleIcon";

const AppBar = () => (
  <Navbar
    style={{
      borderBottomLeftRadius: "1rem",
      borderBottomRightRadius: "1rem",
      background: "rgb(191, 45, 116)",
      boxShadow: '0px -1px 8px 9px rgb(210 72 139)'
    }}
  >
    <Nav.Link href="/">
      <BubbleIcon />
    </Nav.Link>
    <Navbar.Brand
      className="font-weight-bold"
      style={{ color: "white" }}
      href="/"
    >
      STOCK MARKET TRACKER
    </Navbar.Brand>
  </Navbar>
);
export default AppBar;
