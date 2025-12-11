import React from "react";
import AboutHero from "./components/AboutHero";
import Nav from "./components/Nav";
import About from "@/components/about/About";
import HistoryTimeline from "./components/HistoryTimeline";
import Testimonials from "./components/Testimonials";
import BannerLayout from "@/components/banner-layout/Bannerlayout";
import BlogGrid from "@/components/blog-grid/BlogGrid";
import AboutLayout1 from "./components/about-layout";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <Nav />
      <AboutLayout1 />
      <HistoryTimeline />
      <Testimonials />
      <BannerLayout />
      <BlogGrid />
    </>
  );
};

export default AboutPage;
