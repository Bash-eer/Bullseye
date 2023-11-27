import React from "react";
import "./Event.css";
import { Container, Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";

function Event() {
  return (
    <div className="section_event">
      <section id="skills" class="skills">
        <div
          class="container aos-init aos-animate"
          data-aos="fade-up"
          id="containers"
        >
          <div class="row">
            <div
              class="col-lg-6 pt-4 pt-lg-0 content aos-init aos-animate"
              data-aos="fade-left"
              data-aos-delay="100"
              id="event_row1_1"
            >
              <div className="section7_column1">
                <h3 className="pixel_heading section7_head">
                  upcoming event from bullseye.
                </h3>
              </div>
            </div>
            <div
              class="col-lg-5 pt-4 pt-lg-0 content aos-init aos-animate"
              data-aos="fade-left"
              data-aos-delay="100"
              id="aos"
            >
              <p className="home_para" id="event_para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt leo et leo tincidun vel efficitur mi egestas curabitur
                vulputate vestibulum dapibus orci v natoque penatibus et magnis
                dis parturient
              </p>
            </div>
          </div>
        </div>
        <Container id="containers">
          <Row id="event_row1">
            <Col xs lg="5">
              <div className="section7_c1" id="r1_c1">
                <h4 className="pixel_heading event_h4">
                  join us for our shooting competition
                </h4>

                <h5 className="pixel_heading event_h5">
                  Show off your skills and win prizes!
                </h5>
              </div>
            </Col>

            <Col xs lg="4">
              <div className="section7_c2" id="r1_c2">
                <h4 className="pixel_heading event_h4">july 3th-15th</h4>

                <h5 className="pixel_heading event_h5" id="c2_time">
                  09.00am - 05.00pm
                </h5>
              </div>
            </Col>
            <Col xs lg="3">
              <a href="#explore_more" className="pixel_view" id="r1_c3">
                Register now
              </a>
            </Col>
          </Row>
        </Container>
        <Container id="containers">
          <Row id="event_row2">
            <Col xs lg="5">
              <div className="section7_c1" id="r1_c1">
                <h4 className="pixel_heading event_h4">
                  Ladies' Night at the range
                </h4>

                <h5 className="pixel_heading event_h5">
                  A Fun and Empowering Event for Women Shooters
                </h5>
              </div>
            </Col>

            <Col xs lg="4">
              <div className="section7_c2" id="r1_c2">
                <h4 className="pixel_heading event_h4">August 10th-13th</h4>

                <h5 className="pixel_heading event_h5" id="c2_time">
                  09.00am - 05.00pm
                </h5>
              </div>
            </Col>
            <Col xs lg="3">
              <a href="#explore_more" className="pixel_view" id="r1_c3">
                Register now
              </a>
            </Col>
          </Row>
        </Container>
        <Container id="containers">
          <Row id="event_row3">
            <Col xs lg="5">
              <div className="section7_c1" id="r1_c1">
                <h4 className="pixel_heading event_h4">
                  Tactical Training Weekend
                </h4>

                <h5 className="pixel_heading event_h5">
                  Take Your Skills to the Next Level with Advanced Training
                </h5>
              </div>
            </Col>

            <Col xs lg="4">
              <div className="section7_c2" id="r1_c2">
                <h4 className="pixel_heading event_h4">June 14th-17th</h4>

                <h5 className="pixel_heading event_h5" id="c2_time">
                  09.00am - 05.00pm
                </h5>
              </div>
            </Col>
            <Col xs lg="3">
              <a href="#explore_more" className="pixel_view" id="r1_c3">
                Register now
              </a>
            </Col>
          </Row>
        </Container>
        <Container id="containers">
          <Row>
            <Col xs lg="12" className="event_row4" id="event_row4">
              <p className="home_para" id="event_p">
                We have more event,
                <span className="section7_col3_a">View more event now</span>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Event;
