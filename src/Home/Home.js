import React from "react";
import "./Home.css";
import hero from "../assets/images/home_left.svg";
import vect from "../assets/images/section1_vector.svg";
import rect1 from "../assets/images/section1_asset.svg";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

function Home() {
  return (
    <div className="hompage_1">
      <Container id="containers">
        <Row className="justify-content-xs-center">
          <Col xs="12" md="auto" lg="6" className="bd-example">
            <Fade top distance="10%" duration={2000}>
              <img src={hero} alt="image1" id="col1_img" />
            </Fade>
          </Col>
          <Col xs="12" md="auto" lg="6" id="home_col2">
            <Fade bottom>
              <h1 className="pixel_heading">from novice to expert .</h1>

              <p className="home_para" id="home_p">
                Welcome to Bullseye, the premier shooting range and gun club in
                Indonesia. Whether you’re a seasoned marksman or a beginner
                looking to improve your skills, we have something for everyone.
              </p>

              <a href="#explore_more" className="pixel_view" id="home_btn">
                Explore more
              </a>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Home;
