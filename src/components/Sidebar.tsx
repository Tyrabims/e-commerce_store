import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Cart3 } from "react-bootstrap-icons";

const Sidebar = () => (
  <Navbar sticky="top" className="Nav-Bar">
    <Container>
      <Nav>
        <h6>CELESTIAL.</h6>
      </Nav>
      <Nav>
        <Nav.Link to="/" as={NavLink}>
          Home
        </Nav.Link>
        <Nav.Link to="/collection" as={NavLink}>
          Collection
        </Nav.Link>
        <Nav.Link to="/about" as={NavLink}>
          About
        </Nav.Link>
        <Nav.Link to="/login" as={NavLink}>
          Login
        </Nav.Link>
        <Nav.Link>
          <Cart3 className="bi bi-cart3"></Cart3>
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default Sidebar;
