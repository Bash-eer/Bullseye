import React from "react";
import "./Client.css";
import Slider from "react-slick";
import rect9 from "../assets/images/section9_rect.svg";
import asset from "../assets/images/sectin9_asset.svg";
import circle from "../assets/images/section9_img2.svg";
import quots from "../assets/images/section9_img3.svg";

function Client() {
  var settings = {
    dots: false,
    /** fade: true,*/
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    cssEase: "linear",
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: false,
  };
  return (
    <div className="section_9">
      <section id="skills" class="skills">
        <div
          class="container aos-init aos-animate"
          data-aos="fade-up"
          id="containers"
        >
          <div class="row">
            <div
              class="col-lg-5 d-flex align-items-center aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay="100"
              id="Client_col1"
            >
              <div className="column_1 section_9_img">
                <img
                  src={rect9}
                  class="img-fluid"
                  alt=" rect9"
                  id="section_9_img"
                />
              </div>
            </div>
            <div
              class="col-lg-1 d-flex align-items-center aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay="100"
            ></div>
            <div
              class="col-lg-6 pt-4 pt-lg-0 content aos-init aos-animate"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="section9_column2">
                <h3 className="pixel_heading" id="client_head1">
                  what client says about bullseye
                </h3>

                <p className="home_para" id="sec9_para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tincidunt leo et leo tincidun vel efficitur mi egestas
                  curabitur vulputate vestibulum dapibus orci v natoque
                  penatibus et magnis dis parturient.
                </p>

                <p id="sec9_para2" className="home_para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tincidunt leo et leo tincidun vel efficitur mi egestas.
                </p>

                <a href="#explore_more" className="pixel_view" id="client_btn">
                  view all testimonials
                </a>
              </div>

              <div class="skills-content bd-example">
                <Slider {...settings} id="slider">
                  <div>
                    <p id="para_3" className="home_para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed tincidunt leo et leo tincidun vel efficitur mi egestas
                      curabitur vulputate vestibulum dapibus orci v natoque
                      penatibus et magnis dis parturient. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Sed tincidunt leo et
                      leo tincidun vel efficitur mi egestas.
                    </p>
                    <div className="rectangle_content2">
                      <img src={circle} alt="circle" className="rc2_img" />
                      <div className="rect_cont_2">
                        <h5>Testimonial #1</h5>
                        <p id="testi_para">Designation</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p id="para_3" className="home_para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed tincidunt leo et leo tincidun vel efficitur mi egestas
                      curabitur vulputate vestibulum dapibus orci v natoque
                      penatibus et magnis dis parturient. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Sed tincidunt leo et
                      leo tincidun vel efficitur mi egestas.
                    </p>
                    <div className="rectangle_content2">
                      <img src={circle} alt="circle" className="rc2_img" />
                      <div className="rect_cont_2">
                        <h5>Testimonial #1</h5>
                        <p>Designation</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p id="para_3" className="home_para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed tincidunt leo et leo tincidun vel efficitur mi egestas
                      curabitur vulputate vestibulum dapibus orci v natoque
                      penatibus et magnis dis parturient. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Sed tincidunt leo et
                      leo tincidun vel efficitur mi egestas.
                    </p>
                    <div className="rectangle_content2">
                      <img src={circle} alt="circle" className="rc2_img" />
                      <div className="rect_cont_2">
                        <h5>Testimonial #1</h5>
                        <p>Designation</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Client;
