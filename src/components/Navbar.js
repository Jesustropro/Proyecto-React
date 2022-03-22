import React from "react";
import CartWidget from "./CartWidget";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navegation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/images/imgNav.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Brand href="#home">TopPC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#catalogo">Catálago</Nav.Link>
            <Nav.Link href="#contactanos">Contáctanos</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navegation;
