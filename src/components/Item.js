import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Item = ({ item }) => {
  return (
    <Link to={`/detail/${item.id}`}>
      <div className="contain">
        <div className="card">
          <Card style={{ width: "18rem" }}>
            <div className="imgBx">
              <Card.Img variant="top" src={item.img} />
            </div>
            <div className="contentBx">
              <Card.Title>
                <h2>{item.titulo}</h2>
              </Card.Title>
              <Card.Text>{item.precio}$</Card.Text>

              <button className="custom-btn btn-12" type="button">
                <span>Aquí</span>
                <span>Ver mas</span>
              </button>
            </div>
          </Card>
        </div>
      </div>
    </Link>
  );
}; /*prubea*/
export default Item;
