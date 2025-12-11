import About from "@/components/about/About";
import BannerLayout from "@/components/banner-layout/Bannerlayout";
import ContactInformation from "@/components/banner-layout/ContactInformation";
import BlogGrid from "@/components/blog-grid/BlogGrid";
import Features from "@/components/features/Features";
import PortfolioGrid from "@/components/portfolio-grid/PortfolioGrid";
import ServicesCarousel from "@/components/services-carousel/ServicesCarousel";
import Slider from "@/components/slider/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <About />
      <ServicesCarousel />
      <Features />
      <PortfolioGrid />
      <BannerLayout />
      <BlogGrid />
      <ContactInformation />
    </>
  );
}
