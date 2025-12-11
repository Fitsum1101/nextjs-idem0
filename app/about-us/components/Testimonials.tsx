import CustomImage from "@/components/custom/CustomImage";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="testimonials pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <CustomImage
              // fill={true}
              width={1024}
              src="assets/images/backgrounds/map.png"
              alt="map"
            />
            <div className="testimonial-box">
              <div className="testimonial__thumb">
                <CustomImage
                  // fill={true}
                  src="assets/images/testimonials/thumbs/1.png"
                  alt="author thumb"
                />
                <span className="pulsing-animation pulsing-animation-1"></span>
                <span className="pulsing-animation pulsing-animation-2"></span>
                <span className="pulsing-animation pulsing-animation-3"></span>
              </div>
              <div className="testimonial__panel">
                <div className="testimonial__desc">
                  As one of the world's largest ITService Providers with over
                  120 engineers and IT support staff are ready to help.
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="testimonial__thumb">
                <CustomImage
                  src="assets/images/testimonials/thumbs/2.png"
                  alt="author thumb"
                />
                <span className="pulsing-animation pulsing-animation-1"></span>
                <span className="pulsing-animation pulsing-animation-2"></span>
                <span className="pulsing-animation pulsing-animation-3"></span>
              </div>
              <div className="testimonial__panel">
                <div className="testimonial__desc">
                  As one of the world's largest ITService Providers with over
                  120 engineers and IT support staff are ready to help.
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="testimonial__thumb">
                <CustomImage
                  src="assets/images/testimonials/thumbs/3.png"
                  alt="author thumb"
                />
                <span className="pulsing-animation pulsing-animation-1"></span>
                <span className="pulsing-animation pulsing-animation-2"></span>
                <span className="pulsing-animation pulsing-animation-3"></span>
              </div>
              <div className="testimonial__panel">
                <div className="testimonial__desc">
                  As one of the world's largest ITService Providers with over
                  120 engineers and IT support staff are ready to help.
                </div>
              </div>
            </div>
            <div className="testimonial-box testimonial-hover-left">
              <div className="testimonial__thumb">
                <CustomImage
                  src="assets/images/testimonials/thumbs/4.png"
                  alt="author thumb"
                />
                <span className="pulsing-animation pulsing-animation-1"></span>
                <span className="pulsing-animation pulsing-animation-2"></span>
                <span className="pulsing-animation pulsing-animation-3"></span>
              </div>
              <div className="testimonial__panel">
                <div className="testimonial__desc">
                  As one of the world's largest ITService Providers with over
                  120 engineers and IT support staff are ready to help.
                </div>
              </div>
            </div>

            <div className="testimonial-box testimonial-hover-left">
              <div className="testimonial__thumb">
                <CustomImage
                  src="assets/images/testimonials/thumbs/5.png"
                  alt="author thumb"
                />
                <span className="pulsing-animation pulsing-animation-1"></span>
                <span className="pulsing-animation pulsing-animation-2"></span>
                <span className="pulsing-animation pulsing-animation-3"></span>
              </div>
              <div className="testimonial__panel">
                <div className="testimonial__desc">
                  As one of the world's largest ITService Providers with over
                  120 engineers and IT support staff are ready to help.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-100">
        <div className="bg-Image">
          <CustomImage src="assets/images/backgrounds/2.jpg" alt="background" />
        </div>
        <div className="container">
          <div className="cta d-flex align-items-center">
            <div className="cta__item d-flex align-items-center">
              <div className="cta__icon">
                <i className="icon-programmer"></i>
              </div>
              <div className="cta__content">
                <h4 className="cta__title">Small/Growing Business!</h4>
                <p className="cta__desc mb-0">
                  Professional IT support packages tailored to align with your
                  business objectives and meet your needs.
                </p>
              </div>
            </div>
            <div className="or-seperator">or</div>
            <div className="cta__item d-flex align-items-center">
              <div className="cta__content text-right">
                <h4 className="cta__title">Enterprise Level Organization</h4>
                <p className="cta__desc mb-0">
                  Professional IT support packages tailored to align with your
                  business objectives and meet your needs.
                </p>
              </div>
              <div className="cta__icon">
                <i className="icon-developer"></i>
              </div>
            </div>
          </div>
          <p className="text__link text-center mt-40 mb-0">
            IT Management Solutions for your Business,
            <a href="#" className="btn btn__link btn__secondary btn__icon px-0">
              <span>Explore Our Plans</span>{" "}
              <i className="icon-arrow-right"></i>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
