const footerData = [
  {
    linkTitle: "About Us",
    footerLink: [
      {
        name: "How it works",
        path: "/signin",
      },
      {
        name: "Testimonials",
        path: "/signin",
      },
      {
        name: "Careers",
        path: "/signin",
      },
      {
        name: "Investors",
        path: "/signin",
      },
      {
        name: "Terms of Service",
        path: "/signin",
      },
    ],
  },

  {
    linkTitle: "Videos",
    footerLink: [
      {
        name: "Submit Video",
        path: "/signin",
      },
      {
        name: "Ambassadors",
        path: "/signin",
      },
      {
        name: "Agency",
        path: "/signin",
      },
      {
        name: "Influencer",
        path: "/signin",
      },
    ],
  },
  {
    linkTitle: "Contact Us",
    footerLink: [
      {
        name: "Contact",
        path: "/signin",
      },
      {
        name: "Support",
        path: "/signin",
      },
      {
        name: "Destinations",
        path: "/signin",
      },
      {
        name: "Sponsorships",
        path: "/signin",
      },
      {
        name: "Terms of Service",
        path: "/signin",
      },
    ],
  },
  {
    linkTitle: "Social Media",
    footerLink: [
      {
        name: "Instagram",
        path: "/",
      },
      {
        name: "Facebook",
        path: "/",
      },
      {
        name: "Youtube",
        path: "/",
      },
      {
        name: "Twitter",
        path: "/",
      },
    ],
  },
];

// Divide footerData array in two arrays for two separate columns in the footer.
export const firstColFooter = footerData.slice(0, footerData.length / 2);
export const secondColFooter = footerData.slice(
  footerData.length / 2,
  footerData.length
);
