import React from "react";
import "./Price.css";
import { Container, Row, Col } from "react-bootstrap";
import rect1 from "../assets/images/section10_img.svg";
import { IconContext } from "react-icons";
import { FaDollarSign } from "react-icons/fa";
import Slide from "react-reveal/Slide";

function Price() {
  return (
    <div className="section_10">
      <Container id="containers">
        <Row className="justify-content-xs-center">
          <Col xs="12" md="auto" lg="5" id="price_col1">
            <Slide left>
              <h3 className="pixel_heading" id="best">
                Best special price for you
              </h3>

              <p className="home_para" id="price_p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                tincidu tincidunt leo et leo tincidun vel efficitur mi egestas
                curabitur ipsum vulputate vestibulum dapibus orci v natoque
                penatibus et magnis dis parturient consectetur ipsum dolor.
              </p>
              <p className="home_para" id="price_p1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                tincidu tincidunt leo et leo tincidun vel efficitur mi egestas.
              </p>

              <a href="#explore_more" className="pixel_view" id="price_btn">
                view all price
              </a>
            </Slide>
          </Col>
          <Col xs="12" md="auto" lg="4" id="price_col2">
            <img src={rect1} alt="image1" id="price_center" />

            <div className="right_img_border"></div>
          </Col>
          <Col xs="12" md="auto" lg="3" id="price_col3">
            <Slide right>
              <div className="price_col3">
                <h4 className="pixel_heading price_h2">gold membership</h4>

                <div className="section10_right_head2">
                  <h4 className="pixel_heading dollar" id="dollar">
                    $
                  </h4>

                  <p className="home_para" id="para_199">
                    199
                  </p>
                  <sub>
                    <h5 className="pixel_heading year" id="year">
                      / Year
                    </h5>
                  </sub>
                </div>

                <p className="home_para" id="price_p2">
                  Lorem ipsum dolor sit amet consectetu adipiscing elit sed
                  tincidu tincidunt leo et leo tincidun vel efficitur mi.
                </p>
              </div>
            </Slide>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Price;
