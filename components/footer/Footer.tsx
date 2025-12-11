import React from "react";
import Image from "next/image";
import { getPublicAbsoluteURL } from "@/lib/utils";

// ----------------------------
// Types
// ----------------------------
interface FooterMenu {
  title: string;
  links: { label: string; href: string }[];
}

interface SocialIcon {
  href: string;
  iconClass: string;
}

// ----------------------------
// Data
// ----------------------------
const footerMenus: FooterMenu[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "about-us.html" },
      { label: "Meet Our Team", href: "leadership-team.html" },
      { label: "News & Media", href: "blog.html" },
      { label: "Case Studies", href: "projects-grid.html" },
      { label: "Contacts", href: "contact-us.html" },
      { label: "Investors", href: "#" },
    ],
  },

  {
    title: "Resources",
    links: [
      { label: "Pricing and plans", href: "pricing.html" },
      { label: "Terms of Service", href: "#" },
      { label: "Help & FAQ", href: "faqs.html" },
      { label: "Contact Us", href: "contact-us.html" },
      { label: "Site map", href: "#" },
    ],
  },
];

const socialIcons: SocialIcon[] = [
  { href: "#", iconClass: "fab fa-facebook-f" },
  { href: "#", iconClass: "fab fa-instagram" },
  { href: "#", iconClass: "fab fa-twitter" },
];

// ----------------------------
// Reusable Components
// ----------------------------
const FooterMenuBlock: React.FC<FooterMenu> = ({ title, links }) => (
  <div className="col-sm-6 col-md-4 col-lg-2 footer-widget footer-widget-nav">
    <h6 className="footer-widget__title">{title}</h6>
    <div className="footer-widget__content">
      <nav>
        <ul className="list-unstyled">
          {links.map((link, idx) => (
            <li key={idx}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
);

const SocialIcons: React.FC = () => (
  <ul className="social-icons list-unstyled mb-0 mr-30">
    {socialIcons.map((icon, idx) => (
      <li key={idx}>
        <a href={icon.href}>
          <i className={icon.iconClass}></i>
        </a>
      </li>
    ))}
  </ul>
);

// ----------------------------
// Main Footer Component
// ----------------------------
const Footer: React.FC = () => {
  return (
    <footer className="footer footer-light">
      <div className="footer-primary">
        <div className="container">
          <div className="row">
            {/* Logo */}
            <div className="col-sm-12 col-md-12 col-lg-3 footer-widget footer-widget-about">
              <div className="footer-widget__content">
                <Image
                  width={180}
                  height={120}
                  src={getPublicAbsoluteURL("assets/images/logo/logo-dark.png")}
                  alt="logo"
                  className="mb-30"
                />
              </div>
            </div>

            {/* Footer Menus */}
            {footerMenus.map((menu, idx) => (
              <FooterMenuBlock
                key={idx}
                title={menu.title}
                links={menu.links}
              />
            ))}

            {/* Newsletter */}
            <div className="col-sm-6 col-md-6 col-lg-3 footer-widget">
              <h6 className="footer-widget__title">Newsletter</h6>
              <div className="footer-widget__content">
                <form className="footer-form">
                  <div className="form-group mb-20">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email Address"
                    />
                    <button type="submit" className="footer-form__submit">
                      <i className="icon-arrow-right"></i>
                    </button>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center mb-20">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="terms"
                    />
                    <label className="custom-control-label" htmlFor="terms">
                      I accept the privacy and terms.
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Secondary */}
      <div className="footer-secondary">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-5 col-lg-5">
              <div className="footer__copyrights">
                <span className="fz-14">
                  &copy; 2020 Smart Data, All Rights Reserved. With Love by
                </span>
                <a
                  className="fz-14 color-primary"
                  href="http://themeforest.net/user/7oroof"
                >
                  7oroof.com
                </a>
              </div>
            </div>

            <div className="col-sm-12 col-md-2 col-lg-2 text-center">
              <button id="scrollTopBtn" className="my-2">
                <i className="icon-arrow-up-2"></i>
              </button>
            </div>

            <div className="col-sm-12 col-md-5 col-lg-5 d-flex flex-wrap justify-content-end align-items-center">
              <SocialIcons />
              <div>
                <a href="#" className="btn btn__white btn__download mr-20">
                  <i className="fab fa-apple"></i>
                  <span>App Store</span>
                </a>
                <a href="#" className="btn btn__white btn__download">
                  <i className="fab fa-google-play"></i>
                  <span>Google Play</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
