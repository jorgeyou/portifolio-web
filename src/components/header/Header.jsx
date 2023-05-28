import React, { useState } from "react";
import "./header.css";

const Header = () => {
  window.addEventListener("scroll", function () {
    const headerCon = document.querySelector(".header");

    if (this.scrollY >= 80) {
      headerCon.classList.add("scroll-header");
    } else {
      headerCon.classList.remove("scroll-header");
    }
  });

  /* ========= TOGGLE MENU ========= */
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  function changeNavActive(value) {}

  function changeClassActive(value) {
    if (activeNav == value) {
      return "nav__link active-link";
    } else {
      return "nav__link ";
    }
  }

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Fonseca
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={changeClassActive("#home")}
              >
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={changeClassActive("#about")}
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={changeClassActive("#skills")}
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={changeClassActive("#services")}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#qualification"
                onClick={() => setActiveNav("#portifolio")}
                className={changeClassActive("#portifolio")}
              >
                <i className="uil uil-scenery nav__icon"></i> Portifolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={changeClassActive("#contact")}
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            class="uil uil-times nav__close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
