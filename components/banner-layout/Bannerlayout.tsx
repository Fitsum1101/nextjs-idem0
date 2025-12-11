// ----------------------------
// Types

import { awardsData } from "@/_constant/banner";
import { getPublicAbsoluteURL } from "@/lib/utils";
import {
  AwardItemProps,
  ContactBlockProps,
  CounterItemProps,
} from "@/types/banner";

import Image from "next/image";

const ContactBlock: React.FC<ContactBlockProps> = ({ icon, children }) => (
  <div className="contact-info">
    <div className="contact__icon">
      <i className={icon}></i>
    </div>
    <ul className="contact__list list-unstyled">{children}</ul>
  </div>
);

const CounterItem: React.FC<CounterItemProps> = ({ value, text }) => (
  <div className="col-sm-4">
    <div className="counter-item">
      <h4 className="counter">{value}</h4>
      <p className="counter__desc">{text}</p>
    </div>
  </div>
);

const AwardItem: React.FC<AwardItemProps> = ({ img, title, desc, ribbon }) => (
  <div className="fancybox-item">
    {ribbon && <span className="pinned-ribbon"></span>}
    <div className="fancybox__icon-img">
      <Image
        width={65}
        height={65}
        src={getPublicAbsoluteURL(img)}
        alt="icon"
      />
    </div>
    <div className="fancybox__content">
      <h4 className="fancybox__title">{title}</h4>
      <p className="fancybox__desc">{desc}</p>
    </div>
  </div>
);

// ----------------------------
// Main Banner Component
// ----------------------------
const BannerLayout: React.FC = () => {
  return (
    <section className="banner-layout5 banner-layout5-sticky bg-parallax pt-130 pb-0 ">
      <div className="bg-img">
        <Image
          src={getPublicAbsoluteURL("assets/images/banners/9.jpg")}
          width={120}
          height={120}
          alt="background"
        />
      </div>
      <div className="container-fluid">
        <div className="row">
          {/* LEFT SIDE */}
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 d-flex flex-column justify-content-between pb-80">
            <div className="heading heading-light mb-50 sticky-top">
              <div className="divider divider-white"></div>
              <h3 className="heading__title mb-30 ">
                Easy solutions for all difficult IT problems, keep business safe
                & ensure high availability.
              </h3>
            </div>

            <div className="row ">
              <div className="col-sm-6">
                <ContactBlock icon="icon-map-marker">
                  <li>
                    2307 Beverley Rd Brooklyn, New York 11226 United States.
                  </li>
                </ContactBlock>
              </div>
              <div className="col-sm-6">
                <ContactBlock icon="icon-mail">
                  <li>
                    <a href="mailto:SmartData@7oroof.com">
                      Email: SmartData@7oroof.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:5565454117">Phone: +55 654 541 17</a>
                  </li>
                </ContactBlock>
              </div>
              <div className="col-sm-6"></div>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-1">
            <div className="banner__content">
              <div className="bg-img">
                <img src="assets/images/backgrounds/3.png" alt="background" />
              </div>
              <div className="scroll__icon">
                <i className="icon-mouse"></i>
              </div>

              {/* Heading */}
              <div className="row heading heading-light">
                <div className="col-sm-6">
                  <h3 className="heading__title mb-30">
                    450,000 client’s interactions!
                  </h3>
                </div>
                <div className="col-sm-6">
                  <p className="heading__desc mb-20">
                    Provide users with appropriate view access to requests,
                    problems, changes, contracts & solutions with experienced
                    professionals.
                  </p>
                  <p className="heading__desc mb-20">
                    As one of the world's largest ITService Providers, we are
                    ready to help.
                  </p>
                  <a
                    href="#"
                    className="btn btn__white btn__bordered btn__xl btn__icon"
                  >
                    <span>Download Brochure</span>
                    <i className="icon-arrow-right"></i>
                  </a>
                </div>
              </div>

              {/* Counters */}
              <div className="row counters-wrapper counters-light mt-70">
                <CounterItem
                  value="6,154"
                  text="Projects And Software Developed in 2021"
                />
                <CounterItem
                  value="2,512"
                  text="Qualified Employees And Developers With Us"
                />
                <CounterItem
                  value="1,784"
                  text="Satisfied Clients We Have Served Globally"
                />
              </div>
            </div>

            {/* Semi Banner 1 */}
            <div className="semi-banner bg-gray">
              <div className="row row-no-gutter">
                <div className="col-sm-6">
                  <div className="semi-banner__content">
                    <div className="heading">
                      <h3 className="heading__title mb-30">
                        Timely Service, and incident resolutions!!
                      </h3>
                      <p className="heading_desc mb-30">
                        Improve efficiency, leverage tech, and provide better
                        customer experiences with the modern technology services
                        available allover the world.
                      </p>
                      <p className="heading_desc mb-30">
                        Our skilled personnel, utilising the latest processing
                        software, combined with decades of experience.
                      </p>
                    </div>
                    <Image
                      src={getPublicAbsoluteURL(
                        "assets/images/about/singnture.png"
                      )}
                      alt="signature"
                      width={138}
                      height={74}
                    />
                  </div>
                </div>
                <div className="col-sm-6 d-none d-md-block">
                  <Image
                    height={417}
                    width={558}
                    src={getPublicAbsoluteURL("assets/images/banners/7.jpg")}
                    alt="banner"
                    className="w-100"
                  />
                </div>
              </div>
            </div>

            {/* Semi Banner 2 */}
            <div className="semi-banner bg-gray">
              <div className="row row-no-gutter">
                <div className="col-sm-6">
                  <div className="cta-banner bg-primary">
                    <div className="cta__icon color-white">
                      <i className="icon-developer"></i>
                    </div>
                    <h4 className="cta__title color-white">Since 1999</h4>
                    <p className="cta__desc color-white mb-25">
                      Provide users with appropriate view and access to
                      requests, problems, changes, contracts, solutions, and
                      reports.
                    </p>
                    <a
                      href="#"
                      className="btn btn__link btn__white btn__icon px-0"
                    >
                      <span>Find Your Solution</span>{" "}
                      <i className="icon-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="semi-banner__content pb-0">
                    <div className="heading">
                      <h3 className="heading__title mb-30">
                        We have decades of work experience!
                      </h3>
                    </div>
                    <h4 className="banner__subheading">
                      Consulting & Insights
                    </h4>
                    <p className="heading_desc">
                      Our objective insights steer you toward the right
                      decisions on issues that matter.
                    </p>
                    <h4 className="banner__subheading">Research & Advisory</h4>
                    <p className="heading_desc">
                      Our combination of research, problem solving and hands-on
                      experience.
                    </p>
                    <h4 className="banner__subheading">Strategic Advice</h4>
                    <p className="heading_desc">
                      Tools to help turn strategy into decisions, and execute
                      for measurable results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Awards */}
            <section className="awards bg-[#8BC53F]">
              <div className="row heading heading-light mb-60">
                <div className="col-sm-6">
                  <h3 className="heading__title">
                    Our awards and recognitions
                  </h3>
                </div>
                <div className="col-sm-6">
                  <p className="heading__desc">
                    Trusted by the world's best organizations, for 21 years and
                    running, delivering smiles to hundreds of IT advisors,
                    developers, users, and business owners.
                  </p>
                </div>
              </div>

              <div className="row awards-wrapper">
                <div className="col-sm-12">
                  <div className="awards-carousel-wrapper">
                    <div
                      className="slick-carousel"
                      data-slick='{"slidesToShow":3,"slidesToScroll":1,"arrows":false,"dots":true,"autoplay":true,"autoplaySpeed":4000,"infinite":true,"responsive":[{"breakpoint":992,"settings":{"slidesToShow":2}},{"breakpoint":768,"settings":{"slidesToShow":1}}]}'
                    >
                      {awardsData.map((award, index) => (
                        <AwardItem
                          key={index}
                          img={award.img}
                          title={award.title}
                          desc={award.desc}
                          ribbon={award.ribbon}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerLayout;
