import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Hero Movie</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="link" >Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/favourites" className="link">Favourites</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
};

export default NavBar;
