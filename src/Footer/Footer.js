import React from "react";
import "./Footer.css";
import logo from "../assets/images/logo.svg";

function Foot() {
  return (
    <div className="section_footer">
      <footer id="footer">
        <div className="footer-top">
          <div className="container foot_final" id="foot_container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <img src={logo} alt="logo" id="foot_logo" />
              </div>
              {/********   <div className="col-lg-1 col-md-0 footer-contact"></div>  */}
              <div className="col-lg-3 col-md-6 footer-links">
                <div className="footercol2">
                  <h4 className="pixel_heading" id="foot_h4">
                    contact us
                  </h4>

                  <p id="col1_p1" className="home_para">
                    Call Us : 1 (123) 234 1234 We are open from Monday to Friday
                    00.90 AM - 17.00 PM
                  </p>
                  <p id="col1_p2" className="home_para">
                    Pekanbaru, Indonesia, 99 Roving St., Big City, PKU 23456.
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 footer-links" id="foot_col3">
                <h4 className="pixel_heading" id="our_service">
                  our services
                </h4>

                <ul id="section_footer_ul">
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Range Rental</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Firearm Rental</a>
                  </li>
                  <li className="foot_li train_li">
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a id="foot_li_a" href="#">
                      Training and Instruction
                    </a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Membership</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Retail Sales</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Event Hosting</a>
                  </li>
                </ul>
              </div>
              <div
                className="col-lg-4 col-md-6 footer-links last_foot_col"
                id="last_foot_col"
              >
                <h4 className="pixel_heading" id="foot_h4_sub">
                  subscribe News letter
                </h4>

                <div className="section_footer_col4_input">
                  <input className="col4_label" placeholder="Your Email" />

                  <span></span>
                </div>

                <a href="#explore_more" className="pixel_view" id="foot_btn">
                  subscribe now
                </a>

                <h4 className="pixel_heading" id="range">
                  Range Hours
                </h4>

                <p className="home_para" id="foot_c4l">
                  Mon - Fri: 8:00 a.m. - 5:30 p.m. / Saturday: 8:00 a.m. - 3:30
                  p.m. / Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <hr />
        </div>

        <div className="container footer-bottom" id="foot_bottom">
          <div className="credits">
            <a href="#">
              <span>privacy policy</span>
            </a>
            <a href="#">
              <span id="terms">Terms & services</span>
            </a>
          </div>
          <div class="copyright">
            Copyright 2023 © All Rights Reserved Design by Rometheme
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Foot;
