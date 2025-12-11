import PageTitleLayout8 from "./components/ServiceHero";
import ServiceGrid from "./components/ServiceGrid";
import Features from "@/components/features/Features";
import PortfolioGrid from "@/components/portfolio-grid/PortfolioGrid";
import BannerLayout from "@/components/banner-layout/Bannerlayout";
import ServiceOrgan from "./components/ServiceOrgan";

const ServicePage = () => {
  return (
    <>
      <PageTitleLayout8 />
      <ServiceGrid />
      <Features />
      <PortfolioGrid />
      <BannerLayout />
      <ServiceOrgan />
    </>
  );
};

export default ServicePage;
