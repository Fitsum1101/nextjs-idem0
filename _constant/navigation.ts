export const navLinks = [
  {
    label: "Home",
    href: "index",
    active: true,
    items: [
      { label: "Home Main", href: "index" },
      { label: "Home Modern", href: "home-modern" },
      { label: "Home Classic", href: "home-classic" },
    ],
  },
  {
    label: "Company",
    href: "#",
    items: [
      { label: "About Us", href: "about-us" },
      { label: "Why Choose Us", href: "why-us" },
      { label: "Leadership Team", href: "leadership-team" },
      { label: "Award & Recognition", href: "awards" },
      { label: "Pricing & Plans", href: "pricing" },
      { label: "Help & FAQs", href: "faqs" },
      { label: "Careers", href: "careers" },
    ],
  },
  {
    label: "IT Solutions",
    href: "#",
    wideDropdown: true,
    columns: [
      {
        title: "IT Solutions",
        href: "it-solutions",
        links: [
          { label: "IT Management", href: "it-solutions-single" },
          { label: "Cyber Security", href: "it-solutions-single" },
          { label: "Cloud Computing", href: "it-solutions-single" },
          { label: "IT Consulting", href: "it-solutions-single" },
          { label: "Software Dev", href: "it-solutions-single" },
          { label: "IT Support", href: "it-solutions-single" },
        ],
      },
      {
        title: "Industries",
        href: "industries",
        links: [
          {
            label: "Education, Non-Profit",
            href: "industries-single-industry",
          },
          {
            label: "Accounting, Finance",
            href: "industries-single-industry",
          },
          {
            label: "Government & Public",
            href: "industries-single-industry",
          },
          {
            label: "Energy & Utilities",
            href: "industries-single-industry",
          },
          {
            label: "Legal, Law Firms",
            href: "industries-single-industry",
          },
          { label: "Manufacturing", href: "industries-single-industry" },
        ],
      },
    ],
  },
  {
    label: "News&Media",
    href: "#",
    items: [
      { label: "Our Blog", href: "blog" },
      { label: "Single Blog Post", href: "blog-single-post" },
      { label: "Case Studies Grid", href: "case-studies-grid" },
      { label: "Case Studies Carousel", href: "case-studies-carousel" },
      { label: "Case Studies Classic", href: "case-studies-classic" },
      { label: "Single Case Study", href: "case-studies-single" },
    ],
  },
  {
    label: "Features",
    href: "#",
    items: [
      { label: "Coming Soon", href: "coming-soon" },
      { label: "404 Page", href: "404" },
      { label: "Register", href: "#", className: "open-register-popup" },
      { label: "Login", href: "#", className: "open-login-popup" },
    ],
  },
  {
    label: "Contacts",
    href: "contact-us",
  },
];

// Additional action buttons

// For simpler use cases, here's a flat version:
export const allLinks = [
  // Home
  { label: "Home Main", href: "index", category: "Home" },
  { label: "Home Modern", href: "home-modern", category: "Home" },
  { label: "Home Classic", href: "home-classic", category: "Home" },

  // Company
  { label: "About Us", href: "about-us", category: "Company" },
  { label: "Why Choose Us", href: "why-us", category: "Company" },
  {
    label: "Leadership Team",
    href: "leadership-team",
    category: "Company",
  },
  { label: "Award & Recognition", href: "awards", category: "Company" },
  { label: "Pricing & Plans", href: "pricing", category: "Company" },
  { label: "Help & FAQs", href: "faqs", category: "Company" },
  { label: "Careers", href: "careers", category: "Company" },

  // IT Solutions
  {
    label: "IT Solutions",
    href: "it-solutions",
    category: "IT Solutions",
  },
  {
    label: "IT Management",
    href: "it-solutions-single",
    category: "IT Solutions",
  },
  {
    label: "Cyber Security",
    href: "it-solutions-single",
    category: "IT Solutions",
  },
  {
    label: "Cloud Computing",
    href: "it-solutions-single",
    category: "IT Solutions",
  },
  {
    label: "IT Consulting",
    href: "it-solutions-single",
    category: "IT Solutions",
  },
  {
    label: "Software Dev",
    href: "it-solutions-single",
    category: "IT Solutions",
  },
  {
    label: "IT Support",
    href: "it-solutions-single",
    category: "IT Solutions",
  },

  // Industries
  { label: "Industries", href: "industries", category: "Industries" },
  {
    label: "Education, Non-Profit",
    href: "industries-single-industry",
    category: "Industries",
  },
  {
    label: "Accounting, Finance",
    href: "industries-single-industry.html",
    category: "Industries",
  },
  {
    label: "Government & Public",
    href: "industries-single-industry.html",
    category: "Industries",
  },
  {
    label: "Energy & Utilities",
    href: "industries-single-industry.html",
    category: "Industries",
  },
  {
    label: "Legal, Law Firms",
    href: "industries-single-industry.html",
    category: "Industries",
  },
  {
    label: "Manufacturing",
    href: "industries-single-industry.html",
    category: "Industries",
  },

  // News & Media
  { label: "Our Blog", href: "blog.html", category: "News&Media" },
  {
    label: "Single Blog Post",
    href: "blog-single-post.html",
    category: "News&Media",
  },
  {
    label: "Case Studies Grid",
    href: "case-studies-grid.html",
    category: "News&Media",
  },
  {
    label: "Case Studies Carousel",
    href: "case-studies-carousel.html",
    category: "News&Media",
  },
  {
    label: "Case Studies Classic",
    href: "case-studies-classic.html",
    category: "News&Media",
  },
  {
    label: "Single Case Study",
    href: "case-studies-single.html",
    category: "News&Media",
  },

  // Features
  { label: "Coming Soon", href: "coming-soon.html", category: "Features" },
  { label: "404 Page", href: "404.html", category: "Features" },
  {
    label: "Register",
    href: "#",
    category: "Features",
    className: "open-register-popup",
  },
  {
    label: "Login",
    href: "#",
    category: "Features",
    className: "open-login-popup",
  },

  // Contacts
  { label: "Contacts", href: "contact-us.html", category: "Contacts" },

  // Actions
  {
    label: "Request A Quote",
    href: "request-quote.html",
    category: "Actions",
    className: "btn action__btn-contact",
  },
];
