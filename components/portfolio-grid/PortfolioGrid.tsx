"use client";

import { getPublicAbsoluteURL } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioItems } from "@/_constant/testimonial";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
    <section className="portfolio-grid">
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
        </div>

        <div className="relative w-full">
          <div className="relative">
            <Carousel>
              <CarouselContent className="ml-1">
                {getCurrentSlideItems().map((item, idx) => (
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <PortfolioItem {...item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute z-50 -bottom-9 right-20 ">
                <CarouselNext className="text-black " />
                <CarouselPrevious className="text-black " />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
