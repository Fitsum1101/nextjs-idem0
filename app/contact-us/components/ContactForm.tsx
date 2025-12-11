import React from "react";

const ContactForm = () => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-7 mb-3">
      <form
        className="contact-form"
        method="post"
        action="assets/php/contact.php"
        id="contactForm"
      >
        <div className="row">
          <div className="col-sm-12">
            <h4 className="contact-panel__title">Get In Touch</h4>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                id="contact-name"
                name="contact-name"
                required
              />
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="contact-email"
                name="contact-email"
                required
              />
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Phone"
                id="contact-Phone"
                name="contact-phone"
                required
              />
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Website"
                id="contact-website"
                name="contact-website"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group mb-20">
              <textarea
                className="form-control"
                placeholder="Additional Details!"
                id="contact-message"
                name="contact-message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn__primary btn__xhight mt-10"
            >
              Submit Request
            </button>
            <div className="contact-result"></div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
