import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import "./Experience.css";
import play from "../assets/images/Play.svg";
import asset1 from "../assets/images/section5_asset1.svg";
import { overlay } from "../Overlay/Overlay";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";

const VideoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="section_5">
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
              id="exp_col1"
            >
              <Fade left>
                <h3 className="pixel_heading">
                  Experience the best in shooting at Bullseye.
                </h3>

                <p className="home_para" id="exp_p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tincidunt leo et leo tincidun vel efficitur mi egestas.
                </p>

                <div class="skills-content">
                  <div class="progress">
                    <h5 class="skill">
                      professional course <i class="val"></i>
                    </h5>
                    <div class="progress-bar-wrap">
                      <div
                        class="progress-bar bar1"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        90%
                      </div>
                    </div>
                  </div>
                  <div class="progress">
                    <h5 class="skill">
                      top facilities <i class="val"></i>
                    </h5>
                    <div class="progress-bar-wrap">
                      <div
                        class="progress-bar bar2"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        98%
                      </div>
                    </div>
                  </div>

                  <div class="progress">
                    <h5 class="skill">
                      affordable price <i class="val"></i>
                    </h5>
                    <div class="progress-bar-wrap">
                      <div
                        class="progress-bar bar3"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        60%
                      </div>
                    </div>
                  </div>

                  <div class="progress">
                    <h5 class="skill">
                      quality weapon <i class="val"></i>
                    </h5>
                    <div class="progress-bar-wrap">
                      <div
                        class="progress-bar bar4"
                        role="progressbar"
                        aria-valuenow="55"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        80%
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>

            <div
              class="col-lg-6 d-flex align-items-center aos-init aos-animate  section5_col2"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              {/* ... rest of your code ... */}
              {isOpen && (
                <overlay
                  isOpen={isOpen}
                  className="experience_overlay"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                  onClose={() => setIsOverlayOpen(false)}
                ></overlay>
              )}

              <ModalVideo
                channel="youtube"
                isOpen={isOpen}
                videoId="NxyTFzgWjhk?feature=shared"
                onClose={closeModal}
              />

              <div onClick={() => setIsOverlayOpen(!isOverlayOpen)}>
                <Rotate duration={4500}>
                  <img src={play} onClick={openModal} id="play_btn" />
                </Rotate>
              </div>
              {isOpen && <div className="overlay"></div>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoModal;
