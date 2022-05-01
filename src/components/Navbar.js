import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navegation = () => {
  return (
    <Navbar expand="lg" variant="dark" collapseOnSelect>
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/catalogo" className="nav-link">
              <Nav.Link href="#catalogo">Catálogo</Nav.Link>
            </Link>
            <Link to="/categoria/Pc" href="#features" className="nav-link">
              <Nav.Link href="#pc">Pc</Nav.Link>
            </Link>
            <Link to="/categoria/Notebooks" className="nav-link">
              <Nav.Link href="#notebooks">Notebooks</Nav.Link>
            </Link>
            <Link to="/categoria/Componentes" className="nav-link">
              <Nav.Link href="#componentes">Componentes</Nav.Link>
            </Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navegation;
