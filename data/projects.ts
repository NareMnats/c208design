export type ClientProject = {
  slug: string;
  client: string;
  tagline: string;
  description: string;

  category: "Education" | "Community" | "Business";

  services: string[];

  projectCount: number;

  featuredImage: string;
};

export const projects: ClientProject[] = [
  {
    slug: "schurr-high-school",

    client: "Schurr High School",

    tagline: "Building school pride through cohesive visual identity.",

    description:
      "A long-term creative partnership encompassing branding, environmental graphics, academic pathway identity, campus communications, recognition programs, and photography.",

    category: "Education",

    services: [
      "Brand Identity",
      "Environmental Graphics",
      "Photography",
    ],

    projectCount: 9,

    featuredImage: "/projects/schurr/hero.jpg",
  },

  {
    slug: "masca",

    client: "MASCA",

    tagline: "Celebrating international community through thoughtful design.",

    description:
      "Brand identity, website redesign, youth branding, and promotional materials for the Montebello–Ashiya Sister City Association.",

    category: "Community",

    services: [
      "Brand Identity",
      "Website",
      "Print Design",
    ],

    projectCount: 4,

    featuredImage: "/projects/masca/hero.jpg",
  },

  {
    slug: "movsys-engineering",

    client: "MovSys Engineering & Consulting",

    tagline: "Professional branding for a modern engineering firm.",

    description:
      "Complete identity system including logo, website, and business collateral.",

    category: "Business",

    services: [
      "Brand Identity",
      "Website",
    ],

    projectCount: 3,

    featuredImage: "/projects/movsys/hero.jpg",
  },
];