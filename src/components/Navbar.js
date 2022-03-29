import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navegation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img
              alt=""
              src="/images/imgNav.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Link>
        <Link to="/">
          <Navbar.Brand>TopPC</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
            <Link to="/categoria/Pc" className="nav-link">
              Pc
            </Link>
            <Link to="/categoria/Laptop" className="nav-link">
              Laptop
            </Link>
            <Link to="/categoria/Componentes" className="nav-link">
              Componentes
            </Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navegation;
