export type ClientProject = {
  title: string;
  slug: string;
  description?: string;
  images?: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
  plannedAssets?: Array<{
    label: string;
    note: string;
  }>;
};

export type CaseStudy = {
  eyebrow: string;
  introduction: string;
  challenge: string;
  approach: string;
  outcome: string;
  partnership: string;
  accent: string;
  accentSoft: string;
};

export type Client = {
  slug: string;
  client: string;
  tagline: string;
  description: string;
  category: "Education" | "Community" | "Business";
  services: string[];
  featuredMedia: string;
  mediaFit?: "cover" | "contain";
  projects: ClientProject[];
  caseStudy?: CaseStudy;
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
    caseStudy: {
      eyebrow: "A living identity for a school community",
      introduction:
        "Schurr High School needed more than a collection of individual design pieces. It needed a visual language flexible enough to support academics, student programs, campus life, and recognition—while always feeling unmistakably Schurr.",
      challenge:
        "Many audiences share the same campus, but each program has its own voice. The challenge was to create distinction without fragmentation: work that could feel energetic, credible, and student-centered while strengthening one shared identity.",
      approach:
        "We built the system from the school outward. Strong Spartan cues, a focused green palette, clear typography, and adaptable graphic elements create continuity across everything from pathway identities to murals, maps, posters, and pins.",
      outcome:
        "The result is a growing identity system rather than a one-time campaign—one that helps students recognize their programs, gives staff practical tools, and makes school pride visible across campus.",
      partnership: "Ongoing creative partnership",
      accent: "#18763f",
      accentSoft: "#dceee2",
    },
    projects: [
      {
        title: "PVP Pathway Branding",
        slug: "pvp-pathway-branding",
        description:
          "A flexible pathway identity designed to make project-based visual programming feel approachable, creative, and connected to the wider Schurr community.",
        images: [
          {
            src: "/projects/schurr/PVP_Logos.png",
            alt: "Project-based Visual Programming Pathway logo system",
            width: 18750,
            height: 6250,
          },
          {
            src: "/projects/schurr/PVP_Swatches.png",
            alt: "Project-based Visual Programming Pathway color palette",
            width: 6250,
            height: 6250,
          },
          {
            src: "/projects/schurr/PVP_Typefaces.png",
            alt: "Project-based Visual Programming Pathway type system",
            width: 6250,
            height: 3125,
          },
        ],
      },
      {
        title: "Gaming Association Branding",
        slug: "gaming-association-branding",
        description:
          "An energetic student-organization identity built to work across digital spaces, apparel, events, and member recognition.",
        images: [
          {
            src: "/projects/schurr/GA_Logo.png",
            alt: "Schurr Gaming Association logo",
            width: 6250,
            height: 6250,
          },
          {
            src: "/projects/schurr/GA_Swatches.png",
            alt: "Schurr Gaming Association color palette",
            width: 6250,
            height: 6250,
          },
          {
            src: "/projects/schurr/GA_Typefaces.png",
            alt: "Schurr Gaming Association type system",
            width: 6250,
            height: 3125,
          },
        ],
        plannedAssets: [
          {
            label: "GA shirt designs",
            note: "Reserved for upcoming apparel artwork",
          },
          {
            label: "GA pins",
            note: "Reserved for upcoming pin photography",
          },
        ],
      },
      {
        title: "Engineering & Design Pathway Branding",
        slug: "engineering-design-pathway-branding",
        description:
          "A bold, technical identity that gives the Engineering & Design Pathway its own character while remaining part of Schurr's visual family.",
        images: [
          {
            src: "/projects/schurr/Eng_Logo.png",
            alt: "Engineering and Design Pathway logo",
            width: 6250,
            height: 6250,
          },
          {
            src: "/projects/schurr/Engineering_Pins.png",
            alt: "Engineering and Design Pathway recognition pins",
            width: 2000,
            height: 2000,
          },
        ],
        plannedAssets: [
          {
            label: "ED shirt designs",
            note: "Reserved for upcoming apparel artwork",
          },
        ],
      },
      {
        title: "Schurr High School Identity",
        slug: "school-identity",
        description:
          "A cohesive school-wide identity system that brings the Spartan mark, shared values, typography, and green palette into everyday campus communication.",
        images: [
          {
            src: "/projects/schurr/SHS_Logos.png",
            alt: "Schurr High School logo variations",
            width: 18750,
            height: 6250,
          },
          {
            src: "/projects/schurr/SHSLogo_Banner.png",
            alt: "Schurr High School identity displayed on a campus banner",
            width: 6250,
            height: 6250,
          },
          {
            src: "/projects/schurr/Letterhead.png",
            alt: "Schurr High School letterhead system",
            width: 6250,
            height: 6250,
          },
        ],
      },
      {
        title: "Campus Mural",
        slug: "campus-mural",
        description:
          "A large-scale environmental concept that turns a prominent campus wall into a visible expression of Spartan identity, values, and pride.",
        images: [
          {
            src: "/projects/schurr/Mural_Full.png",
            alt: "Full Schurr High School campus mural concept",
            width: 3500,
            height: 1147,
          },
          {
            src: "/projects/schurr/Mural_Details1.png",
            alt: "Detailed square view of the Schurr campus mural",
            width: 6250,
            height: 6250,
          },
          {
            src: "/projects/schurr/Mural_Details2.png",
            alt: "Wide detail view of the Schurr campus mural",
            width: 6250,
            height: 3125,
          },
          {
            src: "/projects/schurr/Mural_Mockups.png",
            alt: "Schurr campus mural wall mockups",
            width: 6250,
            height: 6250,
          },
        ],
      },
      {
        title: "Academic Awards Pins",
        slug: "academic-awards-pins",
        description:
          "A family of small recognition pieces that gives academic achievement and pathway participation a tangible, collectible presence.",
        images: [
          {
            src: "/projects/schurr/S_Pins.png",
            alt: "Schurr S academic recognition pins",
            width: 2000,
            height: 2000,
          },
        ],
      },
      {
        title: "Campus Posters",
        slug: "campus-posters",
        description:
          "A coordinated set of visual tools makes behavior expectations and core learning frameworks clear, engaging, and accessible for daily campus use.",
        images: [
          {
            src: "/projects/schurr/PBIS_Poster.png",
            alt: "Schurr High School PBIS poster",
            width: 1594,
            height: 2000,
          },
          {
            src: "/projects/schurr/CEE_4Cs_Posters.png",
            alt: "Schurr High School CEE Framework and 4Cs of Education posters",
            width: 1536,
            height: 1024,
          },
        ],
      },
      {
        title: "Campus Map Redesign",
        slug: "campus-map-redesign",
        description:
          "A practical campus-navigation system reorganized for clarity, legibility, and faster orientation for students, families, staff, and visitors.",
        images: [
          {
            src: "/projects/schurr/Schurr_Map.png",
            alt: "Redesigned Schurr High School campus map",
            width: 5500,
            height: 3288,
          },
        ],
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
    featuredMedia: "/projects/movsys/hero.mp4",
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
