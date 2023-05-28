import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__card">
          <i className="bx bx-mail-send contact__card-icon"></i>

          <h3 className="contact__card-title">Email</h3>
          <span className="contact__card-data">williamfonsecadn@gmail.com</span>

          <a
            href="mailto:williamfonsecadn@gmail.com"
            className="contact__button"
          >
            Write me{" "}
            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
          </a>
        </div>

        <div disabled className="contact__card">
          <i className="bx bxl-whatsapp contact__card-icon"></i>

          <h3 className="contact__card-title">Whatsapp</h3>
          <span className="contact__card-data">-</span>

          {/* <a href="https://web.whatsapp.com/" className="contact__button">
            Write me{" "}
            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
          </a> */}
        </div>

        <div className="contact__card">
          <i className="bx bxl-messenger contact__card-icon"></i>

          <h3 className="contact__card-title">Messenger</h3>
          <span className="contact__card-data">-</span>

          {/* <a href="https://web.whatsapp.com/" className="contact__button">
            Write me{" "}
            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
