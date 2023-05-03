import React from "react";
import { BsFillTelephoneFill } from 'react-icons/bs';
const Contact = () => {
  return (
    <>
      <section className="section contact" aria-label="contact">
        <div className="container">
          <h2 className="headline-md section-title text-center">
            Have Question ? Get in touch!
          </h2>

          <p className="body-md section-text text-center">
            We are a huge marketplace dedicated to connecting great artists of
            all Metalink with their fans and unique token collectors!
          </p>

          <a href="#" className="btn btn-primary">
          <BsFillTelephoneFill/>

            <span className="span">Contact us</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;