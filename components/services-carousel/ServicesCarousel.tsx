"use client";

import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { services } from "@/_constant/services_arousel";

const ServicesCarousel = () => {
  return (
    <section className="services-layout2 services-carousel pt-130 bg-gray">
      <div className="container">
        <div className="mb-40 row heading">
          <div className="col-12">
            <div className="d-flex align-items-center">
              <div className="divider divider-primary mr-30"></div>
              <h2 className="mb-0 heading__subtitle">
                Nationwide Service, Local Expertise
              </h2>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7">
            <h3 className="heading__title">
              Offering the latest software and IT services to our customers!
            </h3>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5">
            <p className="heading__desc">
              Improve efficiency, leverage tech, and provide better customer
              experiences with the modern technology services available allover
              the world. Our skilled personnel, utilising the latest processing
              software, combined with decades of experience.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              {/* Navigation Buttons */}
              {/* <div className="flex justify-end gap-3 mb-6">
                <button
                  // onClick={prevSlide}
                  className="w-10 h-10"
                  aria-label="Previous slide"
                >
                  <i className="icon-arrow-left"></i>
                </button>
                <button
                  // onClick={nextSlide}
                  className="w-10 h-10"
                  aria-label="Next slide"
                >
                  <i className="icon-arrow-right"></i>
                </button>
              </div> */}

              {/* Carousel Items */}
              <div className="relative">
                <Carousel>
                  <CarouselContent className="ml-1">
                    {services.map((service, index) => (
                      <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="relative service-item">
                          <div className="service__content">
                            <div className="service__icon">
                              <i className={service.icon}></i>
                            </div>
                            <h4
                              className="service__title"
                              dangerouslySetInnerHTML={{
                                __html: service.title,
                              }}
                            />
                            <p className="service__desc">{service.desc}</p>
                            <ul className="list-items list-unstyled mb-30">
                              {service.listItems.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                            <Link
                              href={service.link}
                              className="btn btn__secondary"
                            >
                              <span>Read More</span>
                              <i className="icon-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="absolute z-30 right-20 ">
                    <CarouselNext className="text-black " />
                    <CarouselPrevious className="text-black " />
                  </div>
                </Carousel>
              </div>

              {/* Progress Bar */}
              <div className="mt-8">
                {/* Slide Indicators */}
                <div className="flex justify-center gap-2 mt-6"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 btn-wrapper">
            <Link
              href="#"
              className="btn btn__secondary btn__bordered btn__icon"
            >
              <span>Explore All Services</span>
              <i className="icon-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
