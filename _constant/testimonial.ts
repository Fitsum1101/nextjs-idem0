interface BlogPost {
  id: number;
  img: string;
  categories: string[];
  date: string;
  title: string;
  description: string;
  link: string;
}

export const clientImages = [
  "assets/images/clients/1.png",
  "assets/images/clients/2.png",
  "assets/images/clients/3.png",
  "assets/images/clients/4.png",
  "assets/images/clients/5.png",
  "assets/images/clients/6.png",
  "assets/images/clients/7.png",
];
export const testimonials = [
  {
    desc: "If you’re looking for a rewarding career and the chance to make an impact, you’ve come to the right place. We will transform your business through our techniques!",
    name: "Ahmed Abdallah",
    title: "Digital Media Manager",
    thumb: "assets/images/testimonials/thumbs/1.png",
  },
  {
    desc: "If you’re looking for a rewarding career and the chance to make an impact, we will transform your business!",
    name: "John Peter",
    title: "7oroof Inc",
    thumb: "assets/images/testimonials/thumbs/2.png",
  },
  {
    desc: "If you’re looking for a rewarding career and the chance to make an impact, we will transform your business!",
    name: "Ayman",
    title: "7oroof Inc",
    thumb: "assets/images/testimonials/thumbs/3.png",
  },
  {
    desc: "My project was a simple & small task, but persistence turned it into an awesome project which made me happy.",
    name: "John Peter",
    title: "7oroof Inc",
    thumb: "assets/images/testimonials/thumbs/3.png",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    img: "assets/images/blog/grid/1.jpg",
    categories: ["Consulting", "Sales"],
    date: "May 13, 2020",
    title: "Five Ways to Develop a World Class Sales Operations Function",
    description:
      "Outsourcing IT infrastructure is a concept that has been around for a while. Characterized in terms of technicians and engineers, workstations and servers, the idea of outsourcing your basic IT needs...",
    link: "blog-single-post.html",
  },
  {
    id: 2,
    img: "assets/images/blog/grid/2.jpg",
    categories: ["Tech", "Communications"],
    date: "April 17, 2020",
    title: "Succession Risks That Threaten Your Leadership Strategy",
    description:
      "Today’s organizations need a quality bench of leaders to drive business outcomes and satisfy employees, customers and investors who now demand more transparency and accountability...",
    link: "blog-single-post.html",
  },
  {
    id: 3,
    img: "assets/images/blog/grid/3.jpg",
    categories: ["Digital Business", "Cloud"],
    date: "March 20, 2020",
    title: "What Do Employee Engagement Surveys Tell You About Employee?",
    description:
      "Outsourcing IT infrastructure is a concept that has been around for a while. Characterized in terms of technicians and engineers, workstations and servers, the idea of outsourcing your basic IT needs...",
    link: "blog-single-post.html",
  },
];

export const portfolioItems = [
  {
    img: "assets/images/portfolio/grid/1.jpg",
    categories: ["Building", "Interior"],
    title: "Financial’s Need For Strategic Advisor",
    desc: "We delivered solutions at every step, and moved seamlessly into a more proactive role as a strategic advisor, providing support and guidance across all IT topics.",
    link: "blog-single-post.html",
  },
  {
    img: "assets/images/portfolio/grid/2.jpg",
    categories: ["Software", "Support"],
    title: "24x7 System Monitoring and Alert Response",
    desc: "This single, unified platform integrates all operational phases of selling and activation of their wireless services and devices, and serves as the backbone of the operations.",
    link: "blog-single-post.html",
  },
  {
    img: "assets/images/portfolio/grid/3.jpg",
    categories: ["Management", "Cloud"],
    title: "Nonprofit Organization Utilized Security",
    desc: "Servers going down on a weekly basis had become the organization’s “normal.” We came on board with the objective of stabilizing the environment, assisting",
    link: "blog-single-post.html",
  },
  {
    img: "assets/images/portfolio/grid/4.jpg",
    categories: ["Digital", "HR"],
    title: "Powerful IT Upgrade Aligns With Your Objectives",
    desc: "They needed a robust management solution to organize archive critical documents for client cases, and wanted to determine solutions at every step.",
    link: "blog-single-post.html",
  },
  {
    img: "assets/images/portfolio/grid/5.jpg",
    categories: ["Consulting", "Management"],
    title: "The Best IT Practices in Cloud and Security",
    desc: "This single, unified platform integrates all operational phases of selling and activation of their wireless services and devices, and serves as the backbone of the operations.",
    link: "blog-single-post.html",
  },
  {
    img: "assets/images/portfolio/grid/6.jpg",
    categories: ["Software", "Security"],
    title: "Helping Companies With Healthcare Industry",
    desc: "Servers going down on a weekly basis had become the organization’s “normal.” We came on board with the objective of stabilizing the environment, assisting",
    link: "blog-single-post.html",
  },
];

export const featureItems = [
  {
    icon: "icon-software",
    title: "Software Asset",
    desc: "All aspects of your software assets including purchasing, deployment & maintenance.",
  },
  {
    icon: "icon-dos",
    title: "Privileged Access",
    desc: "Extend proven Tech best practices to HR, finance, and other service delivery areas.",
  },
  {
    icon: "icon-operating-system",
    title: "Software License",
    desc: "Build dynamic request templates with associated workflows, and tasks.",
  },
  {
    icon: "icon-machine-learning",
    title: "Enterprise Service",
    desc: "Our technology allows you to offer the latest software to your possible customers!",
  },
];
