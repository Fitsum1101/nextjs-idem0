import { getPublicAbsoluteURL } from "@/lib/utils";
import { awards } from "../_constant/serviceOrga";
import Image from "next/image";

const ServiceOrgan = () => {
  return (
    <section className="awards pb-70">
      <div className="container">
        <div className="row heading mb-60">
          <div className="col-12 d-flex align-items-center mb-20">
            <div className="divider divider-primary mr-30"></div>
            <h2 className="heading__subtitle mb-0">
              Timely Service Delivery & Incident Resolutions!!
            </h2>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5">
            <h3 className="heading__title">
              Trusted by the world's best organizations for 21 years.
            </h3>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 offset-lg-2">
            <p className="heading__desc">
              SmartData been helping organizations and Providers through the
              World to manage their IT with our unique approach to technology
              management and consultancy solutions.
            </p>
            <a href="#" className="btn btn__primary btn__icon mt-20">
              <span>Get Started</span>
              <i className="icon-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="row awards-wrapper">
          {awards.map((award, index) => (
            <div key={index} className="col-sm-6 col-md-6 col-lg-3">
              <div className="fancybox-item">
                <span className="pinned-ribbon"></span>
                <div className="fancybox__icon-img">
                  <Image
                    src={getPublicAbsoluteURL(award.src)}
                    alt={award.title}
                    width={70}
                    height={70}
                  />
                </div>
                <div className="fancybox__content">
                  <h4 className="fancybox__title">{award.title}</h4>
                  <p className="fancybox__desc">{award.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOrgan;
