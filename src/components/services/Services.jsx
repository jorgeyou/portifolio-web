import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const Modal = ({ active, title, description, services }) => {
    return (
      <div className={`services__modal ${active ? "active-modal" : ""}`}>
        <div className="services__modal-content">
          <i
            onClick={() => toggleTab(0)}
            className="uil uil-times services__modal-close"
          ></i>

          <h3 className="services__modal-title">{title}</h3>

          <p className="services__modal-description">{description}</p>

          <ul className="services__modal-services grid">
            {services.map((service, index) => (
              <li className="services__modal-service" key={index}>
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">{service}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-mobile-android services__icon"></i>
            <h3 className="services__title">
              Mobile <br /> Developer
            </h3>
          </div>

          <span onClick={() => toggleTab(1)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <Modal
            active={toggleState === 1}
            title="Mobile Developer"
            description="Service with over 4 years of experience. Delivering high-quality work to clients and companies."
            services={[
              "I develop mobile applications for various platforms.",
              "Native and cross-platform mobile app development.",
              "I create smooth and intuitive user experiences.",
              "I optimize app performance and responsiveness.",
              "Integration of backend services and APIs.",
            ]}
          />
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-check-square services__icon"></i>
            <h3 className="services__title">
              Quality <br /> Assurance
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <Modal
            active={toggleState === 2}
            title="Quality Assurance Specialist"
            description="Service with over 2 years of experience. Delivering high-quality work to clients and companies."
            services={[
              "I ensure the quality of the back-end infrastructure.",
              "Testing and quality assurance for web applications.",
              "I validate and optimize data interactions.",
              "I enhance your company's performance and reliability.",
              "Design and implementation of comprehensive quality assurance processes.",
            ]}
          />
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-server-network services__icon"></i>
            <h3 className="services__title">
              Back-end <br /> Developer
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <Modal
            active={toggleState === 3}
            title="Back-end Developer"
            description="Service with over 3 years of experience. Delivering high-quality work to clients and companies."
            services={[
              "I develop the back-end infrastructure.",
              "Web application development.",
              "I create efficient data interactions.",
              "I optimize your company's performance.",
              "Design and implementation of robust APIs.",
            ]}
          />
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Front-end <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(4)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <Modal
            active={toggleState === 4}
            title="Front-end Developer"
            description="Experienced front-end developer with over 3 years of expertise.
            Delivering high-quality work to clients and companies."
            services={[
              "I specialize in developing user interfaces.",
              "Proficient in web page development.",
              "I create engaging UX element interactions.",
              "I help position your company's brand.",
              "Design and mockups of products for companies.",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
