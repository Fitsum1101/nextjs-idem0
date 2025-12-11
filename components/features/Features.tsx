"use client";
import Image from "next/image";
import Link from "next/link";
import { getPublicAbsoluteURL } from "@/lib/utils";
import { featureItems } from "@/_constant/testimonial";

const Features = () => {
  return (
    <section className="features-layout1 pb-0 ">
      {/* Background */}
      <div className="features-bg">
        <div className="bg-img">
          <Image
            src={getPublicAbsoluteURL("assets/images/backgrounds/14.jpg")}
            alt="background"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="container">
        {/* Heading Section */}
        <div className="row heading heading-light mb-30">
          <div className="col-lg-5">
            <div className="divider divider-primary mb-20"></div>
            <h3 className="heading__title">
              Provides consultative approach on emerging technology.
            </h3>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1">
            <div className="row">
              <div className="col-sm-6">
                <p className="heading__desc">
                  As one of the world's largest ITService Providers with over
                  120 engineers and IT support staff are ready to help.
                </p>

                <Link
                  href="#"
                  className="btn btn__primary btn__primary-style2 btn__icon mt-30 mb-30 bg-green-500"
                  style={{
                    backgroundColor: "#8CC63F",
                  }}
                >
                  <span>Our Pricing</span>
                  <i className="icon-arrow-right"></i>
                </Link>
              </div>

              <div className="col-sm-6">
                <p className="heading__desc">
                  SmartData has been helping organizations worldwide manage
                  their IT with our unique approach to technology management and
                  consultancy solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature List */}
        <div className="row">
          {featureItems.map((item, i) => (
            <div key={i} className="col-sm-6 col-md-6 col-lg-3">
              <div className="feature-item text-center">
                <div className="feature__icon">
                  <i className={item.icon}></i>
                </div>

                <h4 className="feature__title">{item.title}</h4>

                <p className="feature__desc">{item.desc}</p>

                <Link href="#" className="btn__link">
                  <i className="icon-arrow-right icon-outlined"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="row mt-40">
          <div className="col-lg-6 d-flex flex-column justify-content-between">
            {/* Rating */}
            <div className="row row-no-gutter read-note">
              <div className="col-sm-4">
                <div className="rating mb-10">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i key={i} className="fas fa-star color-primary"></i>
                  ))}
                </div>
              </div>

              <div className="col-sm-8">
                <p className="read-note__text color-white">
                  <span className="font-weight-bold text-underlined">
                    99.9% Customer Satisfaction
                  </span>{" "}
                  based on 750+ reviews and 20,000 Objective Resource
                </p>
              </div>
            </div>

            {/* Text + List */}
            <div className="row">
              <div className="col-sm-6">
                <p className="mb-30 font-weight-bold sub__desc">
                  As one of the world's largest ITService Providers with over
                  120 engineers and IT support staff are ready to help.
                </p>

                <Link
                  href="#"
                  className="btn btn__primary btn__bordered btn__icon mb-30"
                >
                  <span>Request Demo</span>
                  <i className="icon-arrow-right"></i>
                </Link>
              </div>

              <div className="col-sm-6">
                <ul className="list-items list-unstyled mb-30">
                  <li>450,000 client’s interactions</li>
                  <li>Help challenge critical activities</li>
                  <li>Simplify & Automate Workflows</li>
                  <li>Peer perspectives and advice</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Banner Image */}
          <div className="col-lg-6">
            <Image
              src={getPublicAbsoluteURL("assets/images/banners/3.jpg")}
              alt="banner"
              width={538}
              height={380}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
