import CustomImage from "@/components/custom/CustomImage";
import { getPublicAbsoluteURL } from "@/lib/utils";
import Image from "next/image";
import React from "react";

// List items data
const listItems = [
  "Eliminate Repeat Entry",
  "Simplify Communication",
  "Drive Business Process",
  "Speed Up Transactions",
  "Structure Data & Docs",
  "Automate Workflows",
];

const AboutLayout1 = () => {
  return (
    <section className="about-layout1">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="heading mb-30">
              <div className="d-flex align-items-center mb-20">
                <div className="divider divider-primary mr-30"></div>
                <h2 className="heading__subtitle mb-0">
                  Timely Service Delivery & Incident Resolutions!!
                </h2>
              </div>
              <h3 className="heading__title mb-40">
                Manages service delivery across various business like, HR, Legal
                and other IT departments!!
              </h3>
            </div>

            <div className="position-relative offset-xl-1">
              <i className="icon-quote"></i>
              <p className="mb-40">
                SmartData has been helping organizations throughout the World to
                manage their IT with our unique approach to technology
                management and consultancy solutions with appropriate view and
                permissions to requests, problems, changes, contracts, assets..
              </p>

              <ul className="list-items list-items-layout2 list-unstyled d-flex flex-wrap list-horizontal mb-50">
                {listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <img src="assets/images/about/singnture.png" alt="singnture" />
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
            <div className="about__Image mb-40">
              <CustomImage src="assets/images/about/1.jpg" alt="about" />

              <blockquote className="blockquote d-flex align-items-end mb-0">
                <div className="blockquote__avatar">
                  <CustomImage
                    src="assets/images/testimonials/thumbs/1.png"
                    alt="thumb"
                  />
                </div>
                <div className="blockquote__content">
                  <h4 className="blockquote__title mb-0">
                    As one of the world's largest ITService Providers with over
                    120 engineers and IT support staff are ready to help.
                  </h4>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLayout1;
