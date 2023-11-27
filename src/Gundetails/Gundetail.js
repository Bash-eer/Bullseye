import React from "react";
import "./Gundetails.css";
import gunimg from "../assets/images/Gun-3 3.svg";
import groupimg from "../assets/images/Group_icon.svg";
import asset6 from "../assets/images/section6_asset1.svg";
import { Container, Row, Col } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Reveal from "react-reveal/Reveal";

function Gun() {
  return (
    <div className="gundetails">
      <Container id="containers">
        <Row className="justify-content-xs-center">
          <Col xs="12" md="auto" lg="6" className="bd-example" id="gun_col1">
            <Bounce top>
              <img
                src={gunimg}
                className="section6_biggun res_img"
                id="gun_img"
              />
            </Bounce>
            <Bounce bottom>
              <h5 className="pixel_heading" id="gd_h5">
                accuracy and precision
              </h5>

              <p className="home_para" id="gun_para1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                .
              </p>

              <h5 className="pixel_heading" id="gd2_h5">
                Muzzle velocity and energy
              </h5>

              <p className="home_para" id="gun_para2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                .
              </p>
            </Bounce>
          </Col>
          <Col xs="12" md="auto" lg="6" id="gun_col2">
            <Reveal effect="fadeInUp">
              <h3 className="pixel_heading">
                colt python magnum 3" 6rd stainless
              </h3>

              <p className="home_para" id="gun_p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidun leo et leo tincidun vel efficitur mi egestas curabitur
                vulputate vestibul dapibus orci v natoque penatibus.
              </p>
              <p className="home_para" id="gun_p1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidun leo et leo tincidun vel efficitur mi egestas.
              </p>

              <a href="#explore_more" className="pixel_view" id="g_pixel_btn">
                view all program
              </a>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Gun;
