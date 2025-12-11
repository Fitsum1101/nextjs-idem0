import { NavItem } from "@/types/about-nav";

export const navItems: NavItem[] = [
  { href: "/about-us", label: "About Us" },
  { href: "/why-us", label: "Why Choose Us" },
  { href: "/leadership-team", label: "Leadership Team" },
  { href: "/awards", label: "Awards & Recognition" },
  { href: "/pricing", label: "Pricing & Plans" },
  { href: "/faqs", label: "Help & FAQs" },
  { href: "/careers", label: "Careers" },
];

export const routeMap: Record<string, string> = {
  "about-us.html": "/about-us",
  "why-us.html": "/why-us",
  "leadership-team.html": "/leadership-team",
  "awards.html": "/awards",
  "pricing.html": "/pricing",
  "faqs.html": "/faqs",
  "careers.html": "/careers",
};
