import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
const Item = ({ item }) => {
  return (
    <Card border="info" style={{ width: "18rem", background: "grey" }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.titulo}</Card.Title>
        <Card.Text>{item.descripcion}</Card.Text>
        <Card.Text>{item.precio}</Card.Text>
        <Button variant="info">Ver mas</Button>
      </Card.Body>
    </Card>
  );
};
export default Item;
