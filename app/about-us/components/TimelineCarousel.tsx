import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { timelineData } from "../_constant/timeline";
import CustomImage from "@/components/custom/CustomImage";

const TimelineCarousel = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="timeline-carousel-wrapper mb-70">
            <div
              className="slick-carousel carousel-arrows-light"
              data-slick='{"slidesToShow": 1, "slidesToScroll": 1, "arrows": true, "dots": false, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 1}}, {"breakpoint": 768, "settings": {"slidesToShow": 1}}, {"breakpoint": 570, "settings": {"slidesToShow": 1}}]}'
            >
              <div className="carousel-block">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="timeline-item row align-items-end">
                      <div className="timeline__Image col-sm-6">
                        <CustomImage
                          src="assets/images/timeline/1.jpg"
                          alt="timeline"
                        />
                      </div>
                      <div className="timeline__content col-sm-6">
                        <p className="timeline__desc">
                          Our support works around the clock to ensure your work
                          is secure and monitored safely access to over 99 IT
                          professionals working to help you
                        </p>
                        <h4 className="mb-0 timeline__year">2005</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="timeline-item row align-items-end">
                      <div className="timeline__Image col-sm-6">
                        <CustomImage
                          src="assets/images/timeline/2.jpg"
                          alt="timeline"
                        />
                      </div>
                      <div className="timeline__content col-sm-6">
                        <p className="timeline__desc">
                          Providing consulting expertise on a specific
                          technology, strategizing on IT, providing a security
                          assessment, or managing IT infrastructure.
                        </p>
                        <h4 className="mb-0 timeline__year">2010</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="timeline-item row">
                      <div className="timeline__content col-sm-6">
                        <h4 className="timeline__year">2015</h4>
                        <p className="timeline__desc">
                          We partner with you to enable your technology so you
                          mfocus on your organization’s mission leverage our
                          talent, and creativity.
                        </p>
                      </div>
                      <div className="timeline__Image col-sm-6">
                        <CustomImage
                          src="assets/images/timeline/3.jpg"
                          alt="timeline"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="timeline-item row">
                      <div className="timeline__content col-sm-6">
                        <h4 className="timeline__year">2020</h4>
                        <p className="timeline__desc">
                          Our people are held to the highest level
                          accountability to ensure you are always satisfied with
                          your results and commitment
                        </p>
                      </div>
                      <div className="timeline__Image col-sm-6">
                        <CustomImage
                          src="assets/images/timeline/4.jpg"
                          alt="timeline"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-block">
                <div className="row">
                  {timelineData.map((item, index) => (
                    <div key={index} className="col-sm-12 col-md-12 col-lg-6">
                      <div
                        className={`timeline-item row ${
                          item.layout === "right" ? "align-items-end" : ""
                        }`}
                      >
                        {/* Left layout: Content first, then Image */}
                        {item.layout === "left" ? (
                          <>
                            <div className="timeline__content col-sm-6">
                              <h4 className="timeline__year">{item.year}</h4>
                              <p className="timeline__desc">{item.desc}</p>
                            </div>
                            <div className="timeline__Image col-sm-6">
                              <CustomImage
                                src={item.image}
                                alt={item.imageAlt}
                              />
                            </div>
                          </>
                        ) : (
                          /* Right layout: Image first, then Content */
                          <>
                            <div className="timeline__Image col-sm-6">
                              <CustomImage
                                src={item.image}
                                alt={item.imageAlt}
                              />
                            </div>
                            <div className="timeline__content col-sm-6">
                              <p className="timeline__desc">{item.desc}</p>
                              <h4
                                className={`timeline__year ${
                                  index >= 2 ? "mb-0" : ""
                                }`}
                              >
                                {item.year}
                              </h4>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCarousel;
