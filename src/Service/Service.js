import React from "react";
import "./Service.css";
import asset from "../assets/images/section8_asset1.svg";
import service_icon1 from "../assets/images/section8_icon1.svg";
import service_icon2 from "../assets/images/sectin8_icon2.svg";
import service_icon3 from "../assets/images/section8_icon3.svg";
import { Container, Row, Col } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";

function Service() {
  return (
    <div className="section8">
      <Container id="containers">
        <Row className="justify-content-xs-center" id="section8_row1">
          <Col xs lg="12">
            <h3 className="pixel_heading" id="ser_h3">
              some service from bullseye.
            </h3>

            <p className="home_para" id="section8_para1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt leo et leo tincidun vel efficitur mi egestas curabitur.
            </p>
          </Col>
        </Row>
      </Container>

      <Container id="containers">
        <Row className="justify-content-xs-center" id="section8_row2">
          <Col xs="12" lg="4">
            <div class="icon-box" id="icon_box1">
              <Bounce top>
                <div class="icon">
                  <i class="bx bxl-dribbble"></i>
                </div>

                <img
                  src={service_icon1}
                  alt="service_icon1"
                  id="service_icon1"
                />

                <h4 className="pixel_heading icon_h4" id="ser_c1_h4">
                  <a href="">range rental</a>
                </h4>

                <p className="home_para c1_para" id="sec_8c1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tincidunt leo et leo tincidun vel efficitur mi.
                </p>

                <span className="col_btn1" id="col_btn1">
                  Read more
                </span>
              </Bounce>
            </div>
          </Col>
          <Col xs="12" lg="4">
            <div class="icon-box" id="services_col2">
              <Flip>
                <div className="col2_icon_box2">
                  <div class="icon">
                    <i class="bx bx-file"></i>
                  </div>

                  <img
                    src={service_icon2}
                    alt="service_icon1"
                    id="service_icon2"
                  />

                  <h4 className="pixel_heading icon_h4" id="ser_c2_h4">
                    <a href="">Training & instruction</a>
                  </h4>

                  <p className="home_para c1_para" id="serv_col2_para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tincidunt leo et leo tincidun vel efficitur mi.
                  </p>

                  <span className="col_btn1" id="col_btn2">
                    Read more
                  </span>
                </div>
              </Flip>
            </div>
          </Col>
          <Col xs="12" lg="4">
            <div class="icon-box" id="icon_box3">
              <Bounce top>
                <div class="icon">
                  <i class="bx bx-tachometer"></i>
                </div>

                <img
                  src={service_icon3}
                  alt="service_icon1"
                  id="service_icon3"
                />

                <h4 className="pixel_heading icon_h4" id="ser_c3_h4">
                  <a href="">firearm rental</a>
                </h4>

                <p className="home_para c1_para" id="service_col3_para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tincidunt leo et leo tincidun vel efficitur mi.
                </p>

                <span className="col_btn1" id="service_col3_btn">
                  Read more
                </span>
              </Bounce>
            </div>
          </Col>
        </Row>
      </Container>
      <Container id="containers">
        <Row>
          <Col xs="12" lg="12">
            <p className="home_para" id="section8_last_p">
              Experience the Thrill of shooting,
              <span className="section7_col3_a"> More Service</span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Service;
