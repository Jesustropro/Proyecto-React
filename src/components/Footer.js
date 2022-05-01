import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <>
      <footer className="footer text-center">
        <div className="container">
          <section className="mb-1">
            <a
              className="btn btn-floating m-1 icon-button whatsapp"
              href="https://www.whatsapp.com/?lang=es"
              target={"blank"}
            >
              <img
                src="/images/logows.png"
                className="fab fa-whatsapp"
                alt=""
              />
              <span></span>
            </a>

            <a
              className="btn btn-floating m-1 icon-button instagram"
              href="https://www.instagram.com/?hl=es"
              target={"blank"}
            >
              <img
                src="/images/logoig.png"
                className="fab fa-instagram"
                alt=""
              />
              <span></span>
            </a>

            <a
              className="btn btn-floating m-1 icon-button facebook"
              href="https://www.facebook.com/"
              target={"blank"}
            >
              <img
                src="/images/logofb.png"
                className="fab fa-facebook"
                alt=""
              />
              <span></span>
            </a>

            <a
              className="btn btn-floating m-1 icon-button twitter"
              href="https://twitter.com/"
              target={"blank"}
            >
              <img src="/images/logotw.png" className="fab fa-twitter" alt="" />
              <span></span>
            </a>
          </section>
        </div>

        <div className="text-center p-3 ">© 2022 Copyright: TopPC </div>
      </footer>
    </>
  );
};
export default Footer;
