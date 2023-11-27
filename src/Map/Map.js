import React from "react";
import "./Map.css";
import { Container, Row, Col } from "react-bootstrap";
import asset from "../assets/images/section13_asset.svg";
import Fade from "react-reveal/Fade";

function Map() {
  return (
    <div className="section_map">
      <section id="contact" class="contact">
        <Container id="containers">
          <Row className="justify-content-xs-center">
            <Col xs="12" md="auto" lg="5">
              <div class="info">
                <Fade duration={1500}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                    frameborder="0"
                    allowfullscreen=""
                  ></iframe>
                </Fade>
              </div>
            </Col>

            <Col xs="12" md="auto" lg="1"></Col>

            <Col xs="12" md="auto" lg="6">
              <div className="col_right">
                <h3 className="pixel_heading">
                  get in touch with our friendly team
                </h3>

                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  class="php-email-form"
                >
                  <div className="form_row1">
                    <div class="row">
                      <div class="form-group form_input col-md-6">
                        <div className="section_map_input">
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            id="name"
                            required=""
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="border_line">
                          <span></span>
                        </div>

                        <div className="section_map_label">
                          <label>This field is required</label>
                        </div>
                      </div>
                      <div class="form-group form_input col-md-6">
                        <div className="section_map_input">
                          <input
                            type="email"
                            class="form-control"
                            name="email"
                            id="email"
                            required=""
                            placeholder="Input E-mail Here"
                          />
                        </div>
                        <div className="border_line">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form_row2">
                    <div class="form-group">
                      <div className="section_map_label2">
                        <label for="name" id="msg1">
                          Your Message
                        </label>
                      </div>
                      <textarea
                        class="form-control"
                        name="message"
                        rows="10"
                        required=""
                      ></textarea>
                      <div className="section_map_label">
                        <label id="msg">This field is required</label>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#explore_more"
                    className="pixel_view map_btn"
                    id="map_btn"
                  >
                    Ask us anything
                  </a>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
export default Map;
