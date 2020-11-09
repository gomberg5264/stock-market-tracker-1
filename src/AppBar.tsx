import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import BubbleIcon from "./BubbleIcon";

const AppBar = () => (
  <Navbar
    style={{
      backgroundImage: "linear-gradient(#212e58, rgb(74, 95, 162))",
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
