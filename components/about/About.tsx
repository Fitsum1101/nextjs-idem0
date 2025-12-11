"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { getPublicAbsoluteURL } from "@/lib/utils";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const clientImages = [
    "assets/images/clients/1.png",
    "assets/images/clients/2.png",
    "assets/images/clients/3.png",
    "assets/images/clients/4.png",
    "assets/images/clients/5.png",
    "assets/images/clients/6.png",
    "assets/images/clients/7.png",
  ];

  // Handle responsiveness
  const updateItemsPerSlide = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 992) {
      setItemsPerSlide(3);
    } else if (width >= 767) {
      setItemsPerSlide(2);
    } else {
      setItemsPerSlide(2);
    }
  }, []);

  // Auto-slide functionality
  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % clientImages.length);
    }, 2000); // 2 seconds as per your original setting
  }, [clientImages.length]);

  // Handle next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % clientImages.length);
    startAutoSlide();
  };

  useEffect(() => {
    updateItemsPerSlide();
    startAutoSlide();

    const handleResize = () => {
      updateItemsPerSlide();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [updateItemsPerSlide, startAutoSlide]);

  // Calculate which images to show based on current slide
  const getVisibleImages = () => {
    const images = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      const index = (currentSlide + i) % clientImages.length;
      images.push(clientImages[index]);
    }
    return images;
  };

  const visibleImages = getVisibleImages();

  return (
    <section className="pb-0 about-layout4 pt-130">
      <div className="container">
        <div className="row heading">
          <div className="col-12">
            <div className="mb-20 d-flex align-items-center">
              <div className="divider divider-primary mr-30"></div>
              <h2 className="mb-0 heading__subtitle">
                Timely Service Delivery & Incident Resolutions!!
              </h2>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h3 className="mb-40 heading__title">
              Manages service delivery across various business like, HR, Legal
              and other IT departments!!
            </h3>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <p>
              SmartData has been helping organizations throughout the World to
              manage their IT with our unique approach to technology management
              and consultancy solutions. Provide users with appropriate view and
              access permissions to requests, problems, changes, contracts,
              assets, solutions, and reports with our experienced professionals.
            </p>
            <p>
              As one of the world's largest ITService Providers, our deep pool
              of certified engineers and IT staff are ready to help you to keep
              your IT business safe & ensure high availability.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="about__img">
              {/* Using Next.js Image for better optimization */}
              <div className="relative w-full h-[400px] md:h-[500px]">
                <Image
                  src={getPublicAbsoluteURL("assets/images/about/2.jpg")}
                  alt="about"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="video__btn-wrapper">
              <a
                className="video__btn video__btn-white popup-video"
                href="https://www.youtube.com/watch?v=nrJtHemSPW4"
              >
                <div className="video__player">
                  <i className="fa fa-play"></i>
                </div>
                <span className="video__btn-title">
                  Watch Our Presentation!
                </span>
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column justify-content-between">
            <ul className="flex-wrap mt-40 list-items list-items-layout2 list-horizontal list-unstyled d-flex">
              <li>Eliminate Repeat Entry</li>
              <li>Simpliy Communication</li>
              <li>Drive Business Process</li>
              <li>Speed Up Transactions</li>
              <li>Structure Data & Docs</li>
              <li>Automate Workflows</li>
            </ul>
            <div className="mt-8 clients">
              <p className="mb-10 text-center text__link">
                Trusted By The World's
                <a
                  href="it-solutions.html"
                  className="btn btn__link btn__primary btn__underlined"
                >
                  Best Organizations
                </a>
              </p>

              {/* Carousel Container */}
              <div className="relative overflow-hidden">
                {/* Carousel Items */}
                <div className="flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      className="flex justify-center gap-8 md:gap-12"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {visibleImages.map((src, index) => (
                        <motion.div
                          key={`${currentSlide}-${index}`}
                          className="client"
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div className="relative w-32 h-16 md:w-40 md:h-20">
                            <Image
                              src={getPublicAbsoluteURL(src)}
                              alt={`client ${index + 1}`}
                              fill
                              className="object-contain transition-all duration-300 filter grayscale hover:grayscale-0"
                              sizes="(max-width: 767px) 150px, 200px"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Progress Bar */}
                {/* <div className="mt-6">
                  <div className="h-1 overflow-hidden bg-gray-300 rounded-full">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, ease: "linear" }}
                      key={currentSlide}
                      onAnimationComplete={nextSlide}
                    />
                  </div>
                </div> */}

                {/* Hidden Slide Indicators for Screen Readers */}
                <div className="sr-only">
                  <p>
                    Slide {currentSlide + 1} of {clientImages.length}
                  </p>
                  <button onClick={() => setCurrentSlide(0)}>
                    Go to first slide
                  </button>
                  <button
                    onClick={() => setCurrentSlide(clientImages.length - 1)}
                  >
                    Go to last slide
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
