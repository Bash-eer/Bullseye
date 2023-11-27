import React from "react";
import "./Blog.css";
import asset from "../assets/images/section12 _asset.svg";
import image1 from "../assets/images/section12_img1.svg";
import icon1 from "../assets/images/section12_icon1.svg";
import icon2 from "../assets/images/section12_icon2.svg";
import Flash from "react-reveal/Flash";

function Blog() {
  return (
    <div className="section_12">
      <div className="section_blog">
        <section id="cta" class="cta">
          <div
            class="container aos-init aos-animate"
            data-aos="zoom-in"
            id="containers"
          >
            <div class="row">
              <div class="col-lg-7  text-center text-lg-start">
                <h3 className="pixel_heading" id="blog_h3">
                  You need to know with our latest Blog
                </h3>
              </div>
              <div class="col-lg-5  cta-btn-container text-center">
                <p className="home_para" id="blog_para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tincidunt leo et leo tincidun vel efficitur mi egestas
                  curabitur vulputate vestibulum dapibus orci v natoque
                  penatibus et magnis dis parturient
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" class="portfolio">
          <div
            class="container aos-init aos-animate"
            data-aos="fade-up"
            id="containers"
          >
            <div
              class="row portfolio-container aos-init aos-animate section12_col2_row"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="section12_row2">
                <div class="col-xl-4 col-lg-6 col-md-6 portfolio-item filter-app section12_col2_row_col1">
                  <Flash>
                    <div class="portfolio-img">
                      <img
                        src={image1}
                        class="img-fluid"
                        alt="image1"
                        id="blog_rect_img1"
                      />
                    </div>
                    <div class="portfolio-info" id="portfolio_blog_row1">
                      <div className="portfolio_info_row1">
                        <div className="portfolio_info_col1">
                          <div className=" portfolio_info_col1_img">
                            <img src={icon1} alt="icon1" />
                          </div>
                          <div className=" portfolio_info_col1_h4">
                            <h4>June 15, 2023</h4>
                          </div>
                        </div>
                        <div className="portfolio_info_col2">
                          <div className=" portfolio_info_col2_img">
                            <img src={icon2} alt="icon2" />
                          </div>
                          <div className=" portfolio_info_col_h4">
                            <h4>Tips & Trick</h4>
                          </div>
                        </div>
                      </div>

                      <div className="portfolio_info_row2">
                        <div className="portfolio_info_row2_h4">
                          <h4>
                            Expert Advice, How to Choose the Right Gun for Your…
                          </h4>
                        </div>
                      </div>

                      <a
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox preview-link"
                        title="App 1"
                      >
                        <i class="bx bx-plus"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        class="details-link"
                        title="More Details"
                      >
                        <i class="bx bx-link"></i>
                      </a>
                    </div>
                  </Flash>
                </div>

                <div class="col-xl-4 col-lg-6 col-md-6 portfolio-item filter-web section12_col2_row_col2">
                  <div class="portfolio-img">
                    <img src={image1} class="img-fluid" alt="image2" />
                  </div>
                  <div class="portfolio-info" id="portfolio_blog_row2">
                    <div className="portfolio_info_row1">
                      <div className="portfolio_info_col1">
                        <div className=" portfolio_info_col1_img">
                          <img src={icon1} alt="icon1" />
                        </div>
                        <div className=" portfolio_info_col_h4">
                          <h4>June 15, 2023</h4>
                        </div>
                      </div>
                      <div className="portfolio_info_col2">
                        <div className="portfolio_info_col2_img">
                          <img src={icon2} alt="icon2" />
                        </div>
                        <div className="portfolio_info_col2_h4">
                          <h4>Tips & Trick</h4>
                        </div>
                      </div>
                    </div>

                    <div className="portfolio_info_row2">
                      <div className="portfolio_info_row2_h4">
                        <h4>
                          5 Essential Tips for Taking Your Shooting Skills from
                          Good…
                        </h4>
                      </div>
                    </div>

                    <a
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox preview-link"
                      title="Web 3"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      class="details-link"
                      title="More Details"
                    >
                      <i class="bx bx-link"></i>
                    </a>
                  </div>
                </div>

                <div class="col-xl-4 col-lg-6 col-md-6 portfolio-item filter-app section12_col2_row_col3">
                  <div class="portfolio-img">
                    <img src={image1} class="img-fluid" alt="image3" />
                  </div>
                  <div class="portfolio-info" id="portfolio_blog_row3">
                    <div className="portfolio_info_row1">
                      <div className="portfolio_info_col1">
                        <div className=" portfolio_info_col1_img">
                          <img src={icon1} alt="icon1" />
                        </div>
                        <div className=" portfolio_info_col1_h4">
                          <h4>June 15, 2023</h4>
                        </div>
                      </div>
                      <div className="portfolio_info_col2">
                        <div className="portfolio_info_col2_img">
                          <img src={icon2} alt="icon2" />
                        </div>
                        <div className="portfolio_info_col2_h4">
                          <h4>Tips & Trick</h4>
                        </div>
                      </div>
                    </div>

                    <div className="portfolio_info_row2">
                      <div className="portfolio_info_row2_h4">
                        <h4>
                          The History of Shooting Sports, From Ancient Times to
                          the…
                        </h4>
                      </div>
                    </div>
                    <a
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox preview-link"
                      title="App 2"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      class="details-link"
                      title="More Details"
                    >
                      <i class="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Blog;
