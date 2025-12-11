"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, routeMap } from "../_constant/nav";

export const convertRoute = (oldPath: string): string => {
  return routeMap[oldPath] || oldPath;
};

// Client component to use usePathname hook
const Nav = () => {
  const pathname = usePathname();

  return (
    <section className="secondary-nav sticky-top py-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="nav nav-tabs justify-content-center">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav__link ${isActive ? "active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
