"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getPublicAbsoluteURL } from "@/lib/utils";
import { navLinks } from "@/_constant/navigation";
import { DropdownNavLink, WideDropdownNavLink } from "@/types/navlike";
// import { navLinks } from "../../app/_constant/navigation";
// import { DropdownNavLink, WideDropdownNavLink } from "../../app/types/navlike";

const renderDropdown = (items: DropdownNavLink[]) => (
  <ul className="dropdown-menu">
    {items.map((item, i) => (
      <li className="nav__item" key={i}>
        <Link
          href={item.href}
          className={`nav__item-link ${item.className ?? ""}`}
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
);

const renderWideDropdown = (columns: WideDropdownNavLink["columns"]) => (
  <ul className="dropdown-menu wide-dropdown-menu">
    <li className="nav__item">
      <div className="mx-0 row">
        {columns.map((col, i) => (
          <div className="col-sm-6 dropdown-menu-col" key={i}>
            <Link
              href={col.href}
              className="nav__item-link dropdown-menu-title"
            >
              {col.title}
            </Link>
            <ul className="nav flex-column">
              {col.links.map((item, index) => (
                <li className="nav__item" key={index}>
                  <Link href={item.href} className="nav__item-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </li>
  </ul>
);

const Header: React.FC = () => {
  return (
    <header className="header header-transparent ">
      {/* // <header className="header header-light "> */}
      <nav className="navbar navbar-expand-lg sticky-navbar">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image
              src={getPublicAbsoluteURL("assets/images/logo/logo-light.png")}
              className="logo-light"
              width={120}
              height={120}
              alt="logo"
            />
            <Image
              src={getPublicAbsoluteURL("assets/images/logo/logo-dark.png")}
              className="logo-dark"
              width={120}
              height={120}
              alt="logo"
            />
          </Link>

          <button className="navbar-toggler" type="button">
            <span className="menu-lines">
              <span></span>
            </span>
          </button>

          <div className="navbar-collapse" id="mainNavigation">
            <ul className="ml-auto navbar-nav">
              {navLinks.map((nav, index) => (
                <li
                  key={index}
                  className={`nav__item ${
                    nav.items || nav.columns ? "has-dropdown" : ""
                  }`}
                >
                  <Link
                    href={nav.href}
                    data-toggle={
                      nav.items || nav.columns ? "dropdown" : undefined
                    }
                    className={` ${
                      nav.items || nav.columns ? "dropdown-toggle" : undefined
                    } nav__item-link`}
                  >
                    {nav.label}
                  </Link>

                  {nav.items && renderDropdown(nav.items)}
                  {nav.columns && renderWideDropdown(nav.columns)}
                </li>
              ))}
            </ul>
          </div>

          <ul className="mb-0 navbar-actions list-unstyled d-flex align-items-center">
            <li className="d-none d-xl-block">
              <Link href="request-quote" className="btn action__btn-contact">
                Request A Quote
              </Link>
            </li>
            <li>
              <button
                suppressHydrationWarning
                className="action__btn action__btn-login open-login-popup"
              >
                <i className="icon-user"></i>
                <span>Login</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
