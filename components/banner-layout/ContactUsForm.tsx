"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  ContactUsFormDefaultValue,
  ContactUsFormType,
  ContactUsSchema,
} from "@/schema/contact";

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactUsFormType>({
    resolver: zodResolver(ContactUsSchema),
    defaultValues: ContactUsFormDefaultValue,
    mode: "onChange",
  });

  const onSubmit = async (data: ContactUsFormType) => {
    console.log("Form Data:", data);
    // TODO: handle API submission
  };

  return (
    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
      <div className="contact-panel">
        <form
          className="contact-panel__form"
          onSubmit={handleSubmit(onSubmit)}
          id="contactForm"
        >
          <div className="row">
            <div className="col-12">
              <h4 className="contact-panel__title mb-20">Request A Quote</h4>
              <p className="contact-panel__desc mb-30">
                Our deep pool of certified engineers and IT staff are ready to
                help you to keep your IT business safe & ensure high
                availability.
              </p>
            </div>

            {/* Name */}
            <div className="col-sm-6 col-md-6 col-lg-6 mb-4">
              <div className="form-group">
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Name"
                  {...register("name")}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="col-sm-6 col-md-6 col-lg-6 mb-4">
              <div className="form-group">
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email.message}</div>
                )}
              </div>
            </div>

            {/* Inquiry Type */}
            <div className="col-sm-6 col-md-6 col-lg-6 mb-4">
              <div className="form-group">
                <select
                  className={`form-control ${
                    errors.inquiry_type ? "is-invalid" : ""
                  }`}
                  {...register("inquiry_type")}
                >
                  <option value="0">Inquiry</option>
                  <option value="1">IT Management Services 2</option>
                  <option value="2">IT Management Services 3</option>
                </select>
                {errors.inquiry_type && (
                  <div className="invalid-feedback">
                    {errors.inquiry_type.message}
                  </div>
                )}
              </div>
            </div>

            {/* Phone */}
            <div className="col-sm-6 col-md-6 col-lg-6 mb-4">
              <div className="form-group">
                <input
                  type="text"
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                  placeholder="Phone"
                  {...register("phone")}
                />
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone.message}</div>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="col-12 mb-4">
              <div className="form-group">
                <textarea
                  className={`form-control ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  placeholder="Additional Details!"
                  {...register("message")}
                ></textarea>
                {errors.message && (
                  <div className="invalid-feedback">
                    {errors.message.message}
                  </div>
                )}
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="col-12 mb-4">
              <div className="custom-control custom-checkbox d-flex align-items-center">
                <input
                  type="checkbox"
                  className={`custom-control-input ${
                    errors.accept_terms ? "is-invalid" : ""
                  }`}
                  id="acceptTerms"
                  {...register("accept_terms")}
                />
                <label className="custom-control-label" htmlFor="acceptTerms">
                  I accept the privacy and terms.
                </label>
              </div>
              {errors.accept_terms && (
                <div className="text-danger mt-1">
                  {errors.accept_terms.message}
                </div>
              )}
            </div>

            {/* Submit */}
            <div className="col-12">
              <button
                type="submit"
                className="btn btn__primary btn__xl btn__block"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
              <div className="contact-result"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
