"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/_constant/services_arousel";

const ServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate total slides
  const totalSlides = Math.ceil(services.length / itemsPerSlide);

  // Handle responsiveness
  const updateItemsPerSlide = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 992) {
      setItemsPerSlide(3); // lg and larger: 3 cards
    } else if (width >= 768) {
      setItemsPerSlide(2); // md: 2 cards
    } else if (width >= 480) {
      setItemsPerSlide(2); // 480px+: 2 cards
    } else {
      setItemsPerSlide(1); // sm: 1 card
    }
  }, []);

  // Auto-slide functionality
  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
  }, [totalSlides]);

  // Handle next/previous slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    startAutoSlide();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    startAutoSlide();
  };

  useEffect(() => {
    updateItemsPerSlide();
    startAutoSlide();

    const handleResize = () => {
      const oldItemsPerSlide = itemsPerSlide;
      updateItemsPerSlide();

      if (oldItemsPerSlide !== itemsPerSlide) {
        const newTotalSlides = Math.ceil(services.length / itemsPerSlide);
        setCurrentSlide(Math.min(currentSlide, newTotalSlides - 1));
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [updateItemsPerSlide, startAutoSlide]);

  // Get current slide items
  const getCurrentSlideItems = () => {
    const start = currentSlide * itemsPerSlide;
    const end = start + itemsPerSlide;
    return services.slice(start, end);
  };

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
              <div className="flex justify-end gap-3 mb-6">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10"
                  aria-label="Previous slide"
                >
                  <i className="icon-arrow-left"></i>
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10"
                  aria-label="Next slide"
                >
                  <i className="icon-arrow-right"></i>
                </button>
              </div>

              {/* Carousel Items */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.7 }}
                  >
                    {getCurrentSlideItems().map((service) => (
                      <div className="service-item" key={service.id}>
                        <div className="service__content">
                          <div className="service__icon">
                            <i className={service.icon}></i>
                          </div>
                          <h4
                            className="service__title"
                            dangerouslySetInnerHTML={{ __html: service.title }}
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
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* <div className="relative">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                  {getCurrentSlideItems().map((service) => (
                    <div className="service-item" key={service.id}>
                      <div className="service__content">
                        <div className="service__icon">
                          <i className={service.icon}></i>
                        </div>
                        <h4
                          className="service__title"
                          dangerouslySetInnerHTML={{ __html: service.title }}
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
                  ))}
                </div>
              </div> */}

              {/* Progress Bar */}
              <div className="mt-8">
                {/* Slide Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentSlide(index);
                        startAutoSlide();
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-primary w-6"
                          : "bg-gray-400 hover:bg-gray-500"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
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
