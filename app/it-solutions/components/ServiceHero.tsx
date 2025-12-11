"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";

interface PageTitleProps {
  // Add any props you might need
}

const PageTitleLayout8: React.FC<PageTitleProps> = ({}) => {
  return (
    <section className="page-title page-title-layout8 bg-overlay bg-overlay-gradient bg-parallax">
      <div className="bg-img">
        <Image
          src="/assets/images/page-titles/8.jpg"
          alt="background"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          priority
        />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <h1 className="pagetitle__heading">
              Keep Business Safe And Ensure High Availability.
            </h1>
            <p className="pagetitle__desc">
              We are experienced professionals who understand that IT services
              is changing, and are true partners who care about your success.
              Our team provides a consultative approach on emerging technology.
            </p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 cta-banner-wrapper d-flex justify-content-end">
            <div className="cta-banner text-center">
              {/* Note: Slick carousel will need to be implemented separately in Next.js */}
              <div className="slick-carousel">
                <div className="cta__item">
                  <div className="cta__icon">
                    {/* Replace with your actual icon component or image */}
                    <span className="icon-operating-system"></span>
                  </div>
                  <h4 className="cta__title">Software License</h4>
                  <p className="cta__desc">
                    Build dynamic request templates with associated workflows,
                    and tasks.
                  </p>
                </div>
                <div className="cta__item">
                  <div className="cta__icon">
                    <span className="icon-dos"></span>
                  </div>
                  <h4 className="cta__title">Privileged Access</h4>
                  <p className="cta__desc">
                    Extend proven Tech best practices to HR, finance, and other
                    service delivery areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <nav>
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-decoration-none">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  IT Solutions
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitleLayout8;
