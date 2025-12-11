"use client";

import { getPublicAbsoluteURL } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioItems } from "@/_constant/testimonial";

// ----------------------------
// Keep your original PortfolioItem styling
// ----------------------------
const PortfolioItem: React.FC<(typeof portfolioItems)[0]> = ({
  img,
  categories,
  title,
  desc,
  link,
}) => (
  <div className="portfolio-item">
    <div className="portfolio__img">
      <Image
        width={370}
        height={370}
        src={getPublicAbsoluteURL(img)}
        alt="portfolio img"
        className="transition-transform duration-100 group-hover:scale-105"
      />
    </div>
    <div className="portfolio__content">
      <div className="portfolio__cat">
        {categories.map((cat) => (
          <Link key={cat} href="#">
            {cat}
          </Link>
        ))}
      </div>
      <h4 className="portfolio__title">
        <Link href="#">{title}</Link>
      </h4>
      <p className="portfolio__desc">{desc}</p>
      <Link href={link} className="btn btn__secondary btn__link">
        <span>Read More</span>
        <i className="icon-arrow-right"></i>
      </Link>
    </div>
  </div>
);

// ----------------------------
// Main Portfolio Grid with Carousel
// ----------------------------
const PortfolioGrid = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate total slides based on itemsPerSlide
  const totalSlides = Math.ceil(portfolioItems.length / itemsPerSlide);

  // Handle responsiveness
  const updateItemsPerSlide = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setItemsPerSlide(3);
    } else if (width >= 768) {
      setItemsPerSlide(2);
    } else {
      setItemsPerSlide(1);
    }
  }, []);

  // Auto-slide functionality
  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000); // Change slide every 3 seconds
  }, [totalSlides]);

  // Handle next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    startAutoSlide();
  };

  useEffect(() => {
    updateItemsPerSlide();
    startAutoSlide();

    const handleResize = () => {
      const oldItemsPerSlide = itemsPerSlide;
      updateItemsPerSlide();

      // Adjust current slide when items per slide changes
      if (oldItemsPerSlide !== itemsPerSlide) {
        const newTotalSlides = Math.ceil(portfolioItems.length / itemsPerSlide);
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
    return portfolioItems.slice(start, end);
  };

  return (
    <section className="pb-40 portfolio-grid portfolio-grid-carousel">
      <div className="container">
        {/* Heading - Keep your original styling */}
        <div className="mb-10 row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="heading mb-50">
              <div className="d-flex align-items-center">
                <div className="divider divider-primary mr-30"></div>
                <h2 className="mb-0 text-green-600 heading__subtitle">
                  Success Stories
                </h2>
              </div>
              <h3 className="mb-0 heading__title">Latest Case Studies</h3>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex items-center justify-end col-sm-12 col-md-12 col-lg-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center text-sm text-gray-500">
                <ChevronLeft
                  className="w-10 h-10 text-ring hover:text-green-700"
                  aria-disabled={currentSlide == 0}
                  onClick={() => setCurrentSlide(currentSlide - 1)}
                />
                <div className="flex gap-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentSlide(index);
                        startAutoSlide();
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-1000 ${
                        index === currentSlide
                          ? "bg-primary w-6"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                <ChevronRight
                  className="w-10 h-10 text-ring hover:text-green-700"
                  aria-disabled={currentSlide == 0}
                  onClick={() => setCurrentSlide(currentSlide + 1)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Portfolio Items Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
              >
                {getCurrentSlideItems().map((item, idx) => (
                  <motion.div
                    key={`${currentSlide}-${idx}`}
                    className="group"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PortfolioItem {...item} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
