"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const slides = [
  {
    image: "/assets/images/sliders/1.jpg",
    title: "We Run All Kinds Of IT Services That Vow Your Success",
    desc: "We are experienced professionals who understand that IT services are changing. Our team provides a consultative approach on emerging technology.",
  },
  {
    image: "/assets/images/sliders/2.jpg",
    title: "Keep Business Safe And Ensure High Availability.",
    desc: "We are experienced professionals who understand that IT services are evolving. Our experts help your business stay ahead and secure.",
  },
];

export default function Slider() {
  const [api, setApi] = React.useState<any>(null);

  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api?.scrollNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="slider relative overflow-hidden">
      <div
        className="slick-carousel carousel-arrows-light carousel-dots-light m-slides-0"
        data-slick='{"slidesToShow": 1, "arrows": true, "dots": true, "speed": 700,"fade": true,"cssEase": "linear"}'
      >
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {slides.map((slide, idx) => (
              <CarouselItem key={idx} className="relative min-w-full">
                <div className="slide-item align-v-h bg-overlay bg-overlay-gradient">
                  {/* Background Image */}
                  {/* <div className="bg-img"> */}
                  <Image
                    src={slide.image}
                    alt="slider"
                    fill
                    className="object-cover"
                  />
                  {/* </div> */}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40"></div>

                  {/* Content */}
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-7">
                        <div className="slide__content text-white space-y-6">
                          <h2 className="slide__title text-4xl font-bold">
                            {slide.title}
                          </h2>

                          <p className="slide__desc text-white/90 text-lg">
                            {slide.desc}
                          </p>

                          <div className="flex gap-4">
                            <a href="#" className="btn btn__primary btn__icon">
                              <span>More About Us</span>
                              <i className="icon-arrow-right"></i>
                            </a>

                            <a
                              href="projects-grid.html"
                              className="btn btn__white"
                            >
                              Our Services
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div>
            <CarouselPrevious className="slider-arrow slider-arrow-prev">
              <i className="icon-arrow-left"></i>
            </CarouselPrevious>
            <CarouselNext className="slider-arrow slider-arrow-next">
              <i className="icon-arrow-right"></i>
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
