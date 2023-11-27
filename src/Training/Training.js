import React from "react";
import "./Training.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import asset from "../assets/images/section2_asset.svg";
import arrow from "../assets/images/arrow_btn.svg";
import icon1 from "../assets/images/section3_icon1.svg";
import icon2 from "../assets/images/section3_icon2.svg";
import icon3 from "../assets/images/section3_icon3.svg";
import icon4 from "../assets/images/section3_icon4.svg";

function Training() {
  return (
    <div className="homepage2">
      <section id="cta" class="cta">
        <div
          class="container aos-init aos-animate"
          data-aos="zoom-in"
          id="containers"
        >
          <div class="row row1">
            <div class="col-lg-10 cta-btn-container text-center home2_left">
              <Fade left>
                <h3 className="pixel_heading" id="homepage2_h3">
                  tactical shooting Training
                </h3>
              </Fade>
            </div>
            <div class="col-lg-2 text-center text-lg-start" id="home2_right">
              <Fade right>
                <a
                  href="#explore_more"
                  className="pixel_view"
                  id="homepage2_btn"
                >
                  view all program
                </a>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      <section id="services" class="services section-bg">
        <div
          class="container aos-init aos-animate"
          data-aos="fade-up"
          id="containers"
        >
          <div class="row">
            <div
              class="col-xl-3 col-lg-6 col-md-6 d-flex align-items-stretch aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Zoom bottom>
                <div className="top_icon_box1" id="train_icon_box1">
                  <div class="icon-box" id="train_inner_icon_box1">
                    <div class="icon" id="train_icon1">
                      <i class="bx bxl-dribbble"></i>
                    </div>

                    <h4 className="pixel_heading" id="train_h4_1">
                      <a href="">marksmanship basic</a>
                    </h4>

                    <p className="home_para" id="train_iconbox1_p">
                      Lorem ipsum dolcon sectetur adipiscing elit. Ut elit
                      tellus, luctus nec ullam.
                    </p>

                    <span className="training_span" id="train_iconbox1_btn">
                      join program
                    </span>
                  </div>
                </div>
              </Zoom>
            </div>

            <div
              class="col-xl-3 col-lg-6 col-md-6 d-flex align-items-stretch  aos-init aos-animate aos_animate11"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Zoom bottom>
                <div className="top_icon_box">
                  <div class="icon-box" id="top_icon_box2">
                    <div class="icon">
                      <i class="bx bx-file"></i>
                    </div>

                    <h4 className="pixel_heading" id="train_h4_2">
                      <a href="">concealed carry Training</a>
                    </h4>

                    <p className="home_para">
                      Lorem ipsum dolcon sectetur adipiscing elit. Ut elit
                      tellus, luctus nec ullam.
                    </p>

                    <span className="training_span">join program</span>
                  </div>
                </div>
              </Zoom>
            </div>

            <div
              class="col-xl-3 col-lg-6 col-md-6 d-flex align-items-stretch  aos-init aos-animate aos_animate11"
              data-aos="zoom-in"
              data-aos-delay="300"
              id="services_icon_box3"
            >
              <Zoom bottom>
                <div className="top_icon_box">
                  <div class="icon-box" id="top_icon_box3">
                    <div class="icon">
                      <i class="bx bx-tachometer"></i>
                    </div>

                    <h4 className="pixel_heading" id="long_h4">
                      <a href="">Long-range shooting</a>
                    </h4>

                    <p className="home_para">
                      Lorem ipsum dolcon sectetur adipiscing elit. Ut elit
                      tellus, luctus nec ullam.
                    </p>

                    <span className="training_span">join program</span>
                  </div>
                </div>
              </Zoom>
            </div>

            <div
              class="col-xl-3 col-lg-6 col-md-6 d-flex align-items-stretch  aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="400"
              id="services_icon_box4"
            >
              <Zoom bottom>
                <div className="top_icon_box">
                  <div class="icon-box" id="top_icon_box4">
                    <div class="icon">
                      <i class="bx bx-layer" id="top_icon_box4_icon"></i>
                    </div>

                    <h4 className="pixel_heading" id="virtual_h4">
                      <a href="">virtual reality Training</a>
                    </h4>

                    <p className="home_para" id="virtual_para">
                      Lorem ipsum dolcon sectetur adipiscing elit. Ut elit
                      tellus, luctus nec ullam.
                    </p>

                    <span className="training_span" id="virtual_btn">
                      join program
                    </span>
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Training;
