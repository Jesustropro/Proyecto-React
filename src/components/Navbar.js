import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navegation = () => {
  return (
    <Navbar variant="dark" expand="sm">
      <Container>
        <Link to="/inicio">
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
        <Link to="/inicio">
          <Navbar.Brand>TopPC</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link ">
              Inicio
            </Link>
            <Link to="/catalogo" className="nav-link">
              Catálogo
            </Link>
            <Link to="/categoria/Pc" className="nav-link">
              Pc
            </Link>
            <Link to="/categoria/Notebooks" className="nav-link">
              Notebooks
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
