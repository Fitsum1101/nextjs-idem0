import React from "react";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <section className="contact-layout1 pb-60">
      <div className="container">
        <div className="row">
          <ContactForm />
          <div className="col-sm-12 col-md-12 col-lg-4 offset-lg-1 mb-3">
            <div className="contact-info d-flex flex-column justify-content-between">
              <div className="bg-img">
                <img src="assets/images/contact/1.jpg" alt="banner" />
              </div>
              <div>
                <h4 className="contact-info__title">
                  450,000 client’s interactions!
                </h4>
                <p className="contact-info__desc">
                  Provide users with appropriate view access to requests,
                  problems, changes, contracts & solutions with experienced
                  professionals.
                </p>
                <p className="contact-info__desc">
                  As one of the world's largest ITService Providers, we are
                  ready to help.
                </p>
              </div>
              <a
                href="contact-us.html"
                className="btn btn__white btn__bordered btn__icon"
              >
                <span>Download Brochure</span>
                <i className="icon-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
