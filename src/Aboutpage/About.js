import React from "react";
import Headerpage from "../Headerpage/Headerpage";
import Foot from "../Footer/Footer";
import About from "../Aboutus/About";
import "./Aboutpage.css";
import Modal from "../Experience/Experience";
import g1 from "../assets/images/gun1.jpg";
import b1 from "../assets/images/bullet1.jpg";
import { Parallax, Background } from "react-parallax";
export default function AboutPage() {
  return (
    <div className="aboutpage">
      <Parallax strength={600} bgImage={g1} bgImageAlt="gun_image1">
        <div className="abt_content">
          <section id="about" class="about">
            <div class="container aos-init aos-animate" data-aos="fade-up">
              <div class="abt_section-title">
                <h2 className="pixel_heading">About Us</h2>
              </div>

              <div class="row content">
                <div class="col-lg-6">
                  <p className="home_para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i class="ri-check-double-line"></i> Ullamco laboris nisi
                      ut aliquip ex ea commodo consequat
                    </li>
                    <li>
                      <i class="ri-check-double-line"></i> Duis aute irure dolor
                      in reprehenderit in voluptate velit
                    </li>
                    <li>
                      <i class="ri-check-double-line"></i> Ullamco laboris nisi
                      ut aliquip ex ea commodo consequat
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 pt-4 pt-lg-0">
                  <p className="home_para">
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <a href="#" class="pixel_view">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Parallax>
      <Parallax strength={-400} bgImage={b1} bgImageAlt="bullet_image1">
        <About />
      </Parallax>
      <Modal />
    </div>
  );
}
