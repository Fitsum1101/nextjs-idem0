import { Service } from "@/types/service";
import { services } from "../_constant/service";

const ServiceItem = ({
  props,
}: {
  props: { index: number; service: Service };
}) => (
  <div key={props.index} className="col-sm-12 col-md-6 col-lg-4">
    <div className="service-item">
      <div className="service__content">
        <div className="service__icon">
          <i className={`${props.service.icon}`}></i>
        </div>
        <h4 className="service__title">
          {props.service.title} <br />
          Services
        </h4>
        <p className="service__desc">{props.service.desc}</p>
        <ul className="list-items list-unstyled mb-30">
          {props.service.list.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <a href="it-solutions-single.html" className="btn btn__secondary">
          <span>Read More</span>
          <i className="icon-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>
);

const ServiceGrid = () => {
  return (
    <section className="services-layout2 pt-130 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
            <div className="heading text-center mb-50">
              <h2 className="heading__subtitle">
                Nationwide Service, Local Expertise
              </h2>
              <h3 className="heading__title">
                Offering the latest software and IT services to our customers!
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <ServiceItem key={index} props={{ index, service }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
