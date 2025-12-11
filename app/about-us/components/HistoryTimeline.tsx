import Image from "next/image";
import TimelineCarousel from "./TimelineCarousel";
import CustomImage from "@/components/custom/CustomImage";

const HistoryTimeline = () => {
  return (
    <section className="history-timeline pb-0">
      <div className="history-timeline-bg">
        <div className="bg-Image">
          <CustomImage
            fill={true}
            src="assets/images/backgrounds/1.jpg"
            alt="background"
          />
        </div>
      </div>
      <div className="container">
        <div className="row heading mb-50">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="d-flex align-items-center mb-20">
              <div className="divider divider-primary mr-30"></div>
              <h2 className="heading__subtitle mb-0">
                Explore Our Great History!!
              </h2>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h3 className="heading__title color-white">
              One of the world's largest IT Providers since 2005.
            </h3>
          </div>
        </div>
      </div>
      <div className="position-relative ">
        <div className="timeline-bar ">
          <div className="container d-flex">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
      </div>

      <TimelineCarousel />

      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column justify-content-between">
            <div className="row row-no-gutter read-note">
              <div className="col-sm-4">
                <div className="rating mb-10">
                  <i className="fas fa-star color-primary"></i>
                  <i className="fas fa-star color-primary"></i>
                  <i className="fas fa-star color-primary"></i>
                  <i className="fas fa-star color-primary"></i>
                  <i className="fas fa-star color-primary"></i>
                </div>
              </div>
              <div className="col-sm-8">
                <p className="read-note__text color-white">
                  <span className="font-weight-bold text-underlined">
                    99.9% Customer Satisfaction
                  </span>
                  based on 750+ reviews and 20,000 Objective Resource
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <p className="mb-30 font-weight-bold sub__desc">
                  As one of the world's largest ITService Providers with over
                  120 engineers and IT support staff are ready to help.
                </p>
                <a
                  href="#"
                  className="btn btn__primary btn__bordered btn__icon mb-30"
                >
                  <span>Request Demo</span>
                  <i className="icon-arrow-right"></i>
                </a>
              </div>
              <div className="col-sm-12 col-md-6">
                <ul className="list-items list-unstyled mb-30">
                  <li>450,000 client’s interactions </li>
                  <li>Help challenge critical activities</li>
                  <li>Simplify & Automate Workflows</li>
                  <li>Peer perspectives and advice</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <CustomImage src="assets/images/banners/3.jpg" alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
