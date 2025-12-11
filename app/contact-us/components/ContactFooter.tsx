import React from "react";
import Link from "next/link";
import { contactOffices } from "../_constant/contact-footer";

// For dynamic grid columns based on number of items
const getGridColumns = (count: number): string => {
  switch (count) {
    case 1:
      return "lg:grid-cols-1";
    case 2:
      return "lg:grid-cols-2";
    case 3:
      return "lg:grid-cols-3";
    case 4:
      return "lg:grid-cols-4";
    default:
      return "lg:grid-cols-3";
  }
};

const ContactLayout2Responsive = () => {
  const gridColumns = getGridColumns(contactOffices.length);

  return (
    <section className="contact-layout2 pt-0 pb-80">
      <div className="container">
        <div className="row">
          {contactOffices.map((office) => (
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="contact-info-box">
                <h4 className="contact__info-box-title">London Office</h4>
                <ul className="contact__info-list list-unstyled">
                  <li>
                    Email:
                    <Link href={`mailto:${office.email}`}>
                      {` ${office.email}`}
                    </Link>
                  </li>
                  <li>Address: {office.address}</li>
                  <li>
                    Phone: <a href={`tel:${office.phone}`}>{office.phone}</a>
                  </li>
                  <li>Hours: {office.hours}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactLayout2Responsive;
