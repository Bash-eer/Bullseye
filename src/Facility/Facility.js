import React from "react";
import "./Facility.css";
import pointer from "../assets/images/section11.svg";
import asset from "../assets/images/section11_asset.svg";
import Zoom from "react-reveal/Zoom";

function Facility() {
  return (
    <div className="section11">
      <section id="skills" class="skills">
        <div
          class="container aos-init aos-animate"
          data-aos="fade-up"
          id="containers"
        >
          <div class="row">
            <div
              class="col-lg-4 d-flex align-items-center aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <Zoom left>
                <img src={pointer} alt="pointer_image" id="pointer_image" />
              </Zoom>
            </div>
            <div
              class="col-lg-8 pt-4 pt-lg-0 content aos-init aos-animate"
              data-aos="fade-left"
              data-aos-delay="100"
              id="facility_col2"
            >
              <h3 className="pixel_heading">
                Range time now & Discover our Facility, Expert instruction &
                premium equipment.
              </h3>

              <p className="home_para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                tincidu tincidunt leo et leo tincidun vel efficitur mi egestas
                curabitur ipsum vulputate vestibulum.
              </p>

              <a href="#explore_more" className="pixel_view" id="facility_btn">
                Experience the Thrill of shooting now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Facility;
