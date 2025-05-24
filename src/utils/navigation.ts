// An array of links for navigation bar
//   { name: "Products", url: "/products" },
//  { name: "Blog", url: "/blog" },
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Announcement", url: "/blog" },
  { name: "Resources", url: "/products" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Impotant Links",
    links: [
      { name: "MAAP-SEAS [Inside]", url: "http://192.168.1.20/seas/?redirect=0" },
      { name: "MAAP-SEAS [Outside]", url: "http://203.177.24.69/seas/login/index.php" },
      { name: "MAAP Official Website", url: "https://maap.edu.ph/" },
    ],
  },
  {
    section: "Quick Links",
    links: [
      { name: "Announcements", url: "/blog" },
      { name: "Assessment Services", url: "/services" },
      { name: "Resources", url: "/products" },
      { name: "CCA AI Agent", url: "https://agent.jotform.com/0195da88a12f709ba586ecda4f87e62878eb", target: "_blank" },
    ],
  },
  {
    section: "Contact Details",
    links: [
      { name: "Email: cca@maap.edu.ph", url: "mailto:cca@maap.edu.ph" },
      { name: "Alt Email: marlon.bulan@maap.edu.ph", url: "mailto:marlon.bulan@maap.edu.ph" },
      { name: "Phone: 4085", url: "tel:4085" },
      { name: "Phone: 4056", url: "tel:4056" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};