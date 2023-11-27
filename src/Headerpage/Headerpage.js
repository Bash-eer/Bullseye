/*eslint-disable*/

import React, { useEffect, useState } from "react";
import "./Headerpage.css";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

function Headerpage() {
  const [state, setState] = useState("");
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 80) {
      setState("navbar-scrolled");
    } else if (window.scrollY < 80) {
      setState("");
    }
  });

  /************ code for onclick path 
  const navigate = useNavigate();
  const handleaboutus = () => {
    navigate("/about");
  };

  *****/

  return (
    <div>
      <header id="header" class={`head fixed-top ${state}`}>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container" id="containers">
            <a class="navbar-brand" href="http://localhost:3000/#">
              <img
                src={logo}
                alt="logo_image"
                loading="lazy"
                className="logo "
                id="logo_head"
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav" id="header_navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link pixel_heading" href="#" id="home_id">
                    <Link to="/" className="link_head">
                      Home
                    </Link>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle pixel_heading"
                    href="#"
                    id="navbarDropdown_page"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <Link to="/about" className="link_head">
                      Pages
                    </Link>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="/about">
                      page 1
                    </a>
                    <a className="dropdown-item" href="/about">
                      page 2
                    </a>
                    <a className="dropdown-item" href="/about">
                      page 3
                    </a>
                    <a className="dropdown-item" href="/about">
                      page 4
                    </a>
                    <a className="dropdown-item" href="/about">
                      page 5
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link pixel_heading" href="#" id="shoot_id">
                    shooting package
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle pixel_heading"
                    href="#"
                    id="navbarDropdown_blog"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    blog
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      blog 1
                    </a>
                    <a className="dropdown-item" href="#">
                      blog 2
                    </a>
                    <a className="dropdown-item" href="#">
                      blog 3
                    </a>
                    <a className="dropdown-item" href="#">
                      blog 4
                    </a>
                    <a className="dropdown-item" href="#">
                      blog 5
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link pixel_heading"
                    href="#"
                    id="contact_id"
                  >
                    <Link to="/contact" className="link_head">
                      Contact us
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Headerpage;
