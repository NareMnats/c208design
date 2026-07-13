export type ClientProject = {
  title: string;
  slug: string;
};

export type Client = {
  slug: string;
  client: string;
  tagline: string;
  description: string;
  category: "Education" | "Community" | "Business";
  services: string[];
  featuredMedia: string;
  projects: ClientProject[];
};

export const clients: Client[] = [
  {
    slug: "schurr-high-school",
    client: "Schurr High School",
    tagline: "Building school pride through cohesive visual identity.",
    description:
      "A long-term creative partnership spanning school identity, academic programs, campus communications, environmental design, and recognition materials.",
    category: "Education",
    services: [
      "Brand Identity",
      "Environmental Graphics",
      "Print Design",
    ],
    featuredMedia: "/projects/schurr/hero.mp4",
    projects: [
      {
        title: "PVP Pathway Branding",
        slug: "pvp-pathway-branding",
      },
      {
        title: "Gaming Association Branding",
        slug: "gaming-association-branding",
      },
      {
        title: "Schurr High School Identity",
        slug: "school-identity",
      },
      {
        title: "Campus Mural",
        slug: "campus-mural",
      },
      {
        title: "Academic Awards Pins",
        slug: "academic-awards-pins",
      },
      {
        title: "PBIS Poster",
        slug: "pbis-poster",
      },
      {
        title: "4Cs Poster",
        slug: "4cs-poster",
      },
      {
        title: "CEE Poster",
        slug: "cee-poster",
      },
      {
        title: "Campus Map Redesign",
        slug: "campus-map-redesign",
      },
    ],
  },
  {
    slug: "masca",
    client: "Montebello–Ashiya Sister City Association",
    tagline: "Celebrating international community through thoughtful design.",
    description:
      "Website redesign, youth branding, and promotional materials for the Montebello–Ashiya Sister City Association.",
    category: "Community",
    services: ["Brand Identity", "Website", "Print Design"],
    featuredMedia: "/projects/masca/hero.mp4",
    projects: [
      {
        title: "Website Redesign",
        slug: "website-redesign",
      },
      {
        title: "Montebello Youth Identity",
        slug: "montebello-youth-identity",
      },
      {
        title: "Ashiya Youth Identity",
        slug: "ashiya-youth-identity",
      },
      {
        title: "Youth Stickers",
        slug: "youth-stickers",
      },
    ],
  },
  {
    slug: "movsys-engineering",
    client: "MovSys Engineering & Consulting",
    tagline: "Professional branding for a modern engineering firm.",
    description:
      "A complete visual identity including a logo, website, and business card.",
    category: "Business",
    services: ["Brand Identity", "Website", "Print Design"],
    featuredMedia: "/projects/movsys/hero.png",
    projects: [
      {
        title: "Brand Identity",
        slug: "brand-identity",
      },
      {
        title: "Website",
        slug: "website",
      },
      {
        title: "Business Card",
        slug: "business-card",
      },
    ],
  },
];