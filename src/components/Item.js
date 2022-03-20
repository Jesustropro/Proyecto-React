import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
const Item = ({ titulo, descripcion, precio, img }) => {
  return (
    <Card border="info" style={{ width: "18rem", background: "grey" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Card.Text>{precio}</Card.Text>
        <Button variant="info">Ver mas</Button>
      </Card.Body>
    </Card>
  );
};
export default Item;
