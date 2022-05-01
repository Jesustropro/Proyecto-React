import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Carrusel = () => {
  return (
    <>
      <div className="carrusel">
        <figure className="icon-cards mt-3">
          <div className="icon-cards__content">
            <div className="icon-cards__item d-flex align-items-center justify-content-center">
              <img src="/images/mouse.png" className="w-50" alt="carrousel" />
            </div>
            <div className="icon-cards__item d-flex align-items-center justify-content-center">
              <img src="/images/corneta.png" className="w-50" alt="carrousel" />
            </div>
            <div className="icon-cards__item d-flex align-items-center justify-content-center ">
              <img src="/images/pc1.png" className="w-50" alt="carrousel" />
            </div>
          </div>
        </figure>
      </div>
      <div className=" d-flex justify-content-center mt-4 text-center">
        <h1 className="">TopPC... Tu aliado en tecnología</h1>
      </div>
      <div className=" d-flex m-5 justify-content-center responsive">
        <Link to={`/categoria/Desktop`}>
          <div className="contain  mb-3 m-2">
            <div className="card">
              <Card style={{ width: "18rem" }}>
                <div className="imgBx">
                  <Card.Img variant="top" src="/images/pc1.png" />
                </div>
                <div className="contentBx">
                  <Card.Title>
                    <h2>Desktop</h2>
                  </Card.Title>

                  <button className="custom-btn btn-12" type="button">
                    <span>Aquí</span>
                    <span>Ver mas</span>
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </Link>
        <Link to={`/categoria/Componentes`}>
          <div className="contain  mb-3 m-2">
            <div className="card">
              <Card style={{ width: "18rem" }}>
                <div className="imgBx">
                  <Card.Img variant="top" src="/images/pantalla.png" />
                </div>
                <div className="contentBx">
                  <Card.Title>
                    <h2>Componentes</h2>
                  </Card.Title>
                  <button className="custom-btn btn-12" type="button">
                    <span>Aquí</span>
                    <span>Ver mas</span>
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </Link>
        <Link to={`/categoria/Notebooks`}>
          <div className="contain mb-3 m-2">
            <div className="card">
              <Card style={{ width: "18rem" }}>
                <div className="imgBx">
                  <Card.Img variant="top" src="/images/laptop1.png" />
                </div>
                <div className="contentBx">
                  <Card.Title>
                    <h2>Notebooks</h2>
                  </Card.Title>

                  <button className="custom-btn btn-12" type="button">
                    <span>Aquí</span>
                    <span>Ver mas</span>
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Carrusel;
