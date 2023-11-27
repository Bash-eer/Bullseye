import { React, Component, useState } from "react";
import { useCountUp } from "react-countup";
import "./About.css";
import img1 from "../assets/images/section3_img1.svg";
import img2 from "../assets/images/section3_img2.svg";
import ass1 from "../assets/images/section3_asset1.svg";
import icon1 from "../assets/images/section4_icon1.svg";
import icon2 from "../assets/images/section4_icon2.svg";
import icon3 from "../assets/images/section4_icon3.svg";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";

import CountUp from "react-countup";

function About() {
  return (
    <div className="about_us">
      <section id="skills" className="skills">
        <div
          className="container aos-init aos-animate"
          data-aos="fade-up"
          id="containers"
        >
          <div className="row">
            <div
              className="col-lg-6 d-flex align-items-center aos-init aos-animate section1_column1 bd-example"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <Flip left>
                <img
                  src={img1}
                  class="img1_abt res_img"
                  alt="image1"
                  id="abt_1st_img"
                />
                <div className="image2_border">
                  <img src={img2} class="img2_abt res_img" alt="image2" />
                </div>

                <div className="rect3">
                  <img src={icon1} className="img3_abt" alt="section_4_icon1" />

                  <h5 className="pixel_heading" id="abt_h5">
                    Permit certificate from Bullseye
                  </h5>
                </div>
              </Flip>
            </div>

            <div
              className="col-lg-6 pt-4 pt-lg-0 content aos-init aos-animate section3_column2"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <Slide right>
                <h3 className="pixel_heading" id="about_h3">
                  safe, fun, & affordable shooting for everyone.
                </h3>

                <p className="home_para" id="about_p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tincidunt leo et leo tincidun vel efficitur mi egestas
                  curabitur vulputate vestibulum dapibus orci v natoque
                  penatibus et magnis dis parturient.
                </p>
                <p className="home_para" id="abt_para2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tincidunt leo et leo tincidun vel efficitur mi egestas.
                </p>

                <div className="skills-content">
                  <div className="skills_content_row">
                    <div className="skills_cont_col1">
                      <img
                        src={icon2}
                        alt="icon2"
                        className="skills_cont_col1_img1"
                      />

                      <div className="section3_last_row1">
                        <CountUp
                          start={0}
                          end={1200}
                          duration={2}
                          delay={0}
                          className="div_1200"
                        />

                        <h2 className="pixel_heading plus2" id="plus">
                          +
                        </h2>
                      </div>
                      <h5 className="pixel_heading plus2" id="safe">
                        safe certified
                      </h5>
                    </div>
                    <div className="skills_cont_col2">
                      <img src={icon3} alt="icon2" id="col2_img2" />

                      <div className="section3_last_row2">
                        <CountUp
                          start={0}
                          end={350}
                          duration={2}
                          delay={0}
                          className="div_350"
                        />

                        <h2 className="pixel_heading plus2" id="plus_">
                          +
                        </h2>
                      </div>

                      <h5 className="pixel_heading plus2" id="reliable">
                        reliable instructor
                      </h5>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
