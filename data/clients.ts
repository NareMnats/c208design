export type ClientProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  fullWidth?: boolean;
  loading?: "eager" | "lazy";
};

export type ClientProject = {
  title: string;
  slug: string;
  description?: string;
  images?: ClientProjectImage[];
  galleryMode?: "lightbox";
  galleryCoverFit?: "contain";
  plannedAssets?: Array<{
    label: string;
    note: string;
  }>;
  plannedAssetsBeforeLastImage?: boolean;
  galleryColumns?: 2 | 3;
  galleryEqualHeight?: boolean;
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
  category: "Education" | "Community" | "Business" | "Independent";
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
        "Many audiences share the same campus, but each program has its own voice. The challenge was to create distinction without fragmenting: work that feels energetic and student-centered while strengthening one shared identity.",
      approach:
        "C208 Design built the system from the school outward. Strong Spartan cues, a green palette, clear typography, and adaptable graphic elements create continuity across everything from career pathway identities to murals, maps, posters, and pins.",
      outcome:
        "The result is a growing identity system rather than a one-time campaign—one that helps students recognize their programs, gives staff practical visual assets, and makes school pride visible across campus.",
      partnership: "Ongoing creative partnership",
      accent: "#18763f",
      accentSoft: "#dceee2",
    },
    projects: [
      {
        title: "PVP Pathway Branding",
        slug: "pvp-pathway-branding",
        description:
          "A pathway identity designed to make Project-Based Visual Programming (PVP) feel approachable and connected to the rest of the Schurr community.",
        images: [
          {
            src: "/projects/schurr/PVP_Logos.png",
            alt: "Project-based Visual Programming Pathway logo system",
            width: 18750,
            height: 6250,
          },
          {
            src: "/projects/schurr/PVP_Identity.png",
            alt: "Project-based Visual Programming Pathway color and typography system",
            width: 13542,
            height: 2084,
          },
        ],
      },
      {
        title: "Gaming Association Branding",
        slug: "gaming-association-branding",
        description:
          "A student-org identity built to work across digital spaces, apparel, events, & member recognition.",
        galleryColumns: 2,
        images: [
          {
            src: "/projects/schurr/GA_Logo.png",
            alt: "Schurr Gaming Association logo",
            width: 6250,
            height: 6250,
          },
          {
            src: "/projects/schurr/GA_Pins.png",
            alt: "Schurr Gaming Association and Legacy Alumni enamel pins",
            width: 1300,
            height: 1299,
          },
          {
            src: "/projects/schurr/GA_Shirts.png",
            alt: "Schurr Gaming Association shirt designs in black, gray, and white",
            width: 2000,
            height: 830,
            fullWidth: true,
          },
          {
            src: "/projects/schurr/GA_Identity.png",
            alt: "Schurr Gaming Association color and typography system",
            width: 13542,
            height: 2084,
          },
        ],
      },
      {
        title: "Engineering & Design Pathway Branding",
        slug: "engineering-design-pathway-branding",
        description:
          "An identity that gives the Engineering & Design Pathway (E&D) its own character while remaining part of Schurr's visual family.",
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
          {
            src: "/projects/schurr/Eng_Shirts.png",
            alt: "Engineering and Design Pathway shirt designs",
            width: 1254,
            height: 1254,
          },
        ],
      },
      {
        title: "Schurr High School Identity",
        slug: "school-identity",
        description:
          "A school-wide identity system that brings the Spartan mark, shared values, typography, and green palette into everyday campus visuals.",
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
        galleryColumns: 3,
        galleryEqualHeight: true,
        description:
          "A large-scale environmental concept that turned our prominent campus wall into a visible expression of Spartan identity, values, & pride.",
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
            fullWidth: false,
          },
          {
            src: "/projects/schurr/Mural_Mockups.png",
            alt: "Schurr campus mural wall mockups",
            width: 6250,
            height: 6250,
            fullWidth: false,
          },
        ],
      },
      {
        title: "Academic Awards Pins",
        slug: "academic-awards-pins",
        description:
          "A family of small recognition pieces that gives academic achievement & participation a tangible, collectible presence.",
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
          "A coordinated set of visual posters makes behavioral expectations and core learning frameworks clear, engaging, & accessible for daily campus use.",
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
          "A campus-navigation system redesigned for clarity, legibility, and faster orientation for students, families, staff, & visitors.",
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
    tagline:
      "MASCA brings Montebello, California, and Ashiya, Japan, together through cultural exchange, youth programs, and a lasting sister-city partnership.",
    description:
      "A fully custom WordPress website designed and developed to give the Montebello–Ashiya Sister City Association a welcoming, flexible digital home.",
    category: "Community",
    services: ["Brand Identity", "Website", "Print Design"],
    featuredMedia: "/projects/masca/hero.mp4",
    caseStudy: {
      eyebrow: "A digital home for cultural exchange",
      introduction:
        "MASCA needed a website that could clearly share its mission, programs, history, & opportunities to participate with families and community members in Montebello.",
      challenge:
        "The existing digital experience needed an overhaul. The challenge was to organize a wide range of info into an approachable site while reflecting the warmth & longevity of the Montebello–Ashiya relationship.",
      approach:
        "C208 Design redesigned the MASCA website in its entirety, then designed and developed a custom WordPress theme from the ground up rather than using a prebuilt template.",
      outcome:
        "The result is a modern & maintainable website that gives MASCA a voice, makes its programs easier to explore, and provides a flexible foundation for future stories & events.",
      partnership: "Website strategy, design, and development",
      accent: "#c94f62",
      accentSoft: "#f5e2e5",
    },
    projects: [
      {
        title: "Website Redesign",
        slug: "website-redesign",
        description:
          "A complete redesign and custom WordPress build, including a theme designed from scratch to support MASCA’s content, programs, and community storytelling without relying on an existing template.",
        images: [
          {
            src: "/projects/masca/Website.mp4",
            alt: "A walkthrough of the custom-designed MASCA website",
            width: 1920,
            height: 1080,
            fullWidth: true,
          },
          {
            src: "/projects/masca/mobile-frames.mp4",
            alt: "The MASCA website displayed across mobile device frames",
            width: 1920,
            height: 1080,
            fullWidth: true,
          },
          {
            src: "/projects/masca/desktop-frames.mp4",
            alt: "The MASCA website displayed across desktop screen frames",
            width: 1920,
            height: 1080,
            fullWidth: true,
          },
        ],
      },
      {
        title: "MASCA Letterhead",
        slug: "masca-letterhead",
        description:
          "A letterhead redesign that carries MASCA’s established identity into official correspondence while keeping information clear & approachable.",
        images: [
          {
            src: "/projects/masca/MASCA_Letterhead.png",
            alt: "Montebello–Ashiya Sister City Association letterhead design",
            width: 2000,
            height: 1314,
            fullWidth: true,
          },
        ],
      },
      {
        title: "Youth Identity",
        slug: "youth-identity",
        description:
          "A bilingual youth identity system with complementary Montebello and Ashiya marks, unified by a shared palette, type, and sense of connection.",
        images: [
          {
            src: "/projects/masca/MASCAYouth_Logo_20260806.png",
            alt: "Montebello and Ashiya Youth logo variations in full color and monochrome",
            width: 6250,
            height: 4167,
            fullWidth: true,
            loading: "eager",
          },
          {
            src: "/projects/masca/MASCAYouth_Identity.png",
            alt: "MASCA Youth color palette & type system",
            width: 9584,
            height: 2084,
            fullWidth: true,
          },
        ],
      },
      {
        title: "Youth Stickers",
        slug: "youth-stickers",
        description:
          "An expression of the youth identity logo designed for giveaways, personal gear, and everyday visibility across the exchange community. We thank the Ashiya Cosmopolitan Association for their collaboration on this project.",
        images: [
          {
            src: "/projects/masca/MASCAYouth_Stickers.png",
            alt: "Montebello–Ashiya Youth logo stickers",
            width: 2000,
            height: 657,
            fullWidth: true,
          },
          {
            src: "/projects/masca/MASCAYouth_Bottle.png",
            alt: "Montebello–Ashiya Youth logo sticker applied to a reusable bottle",
            width: 2000,
            height: 954,
            fullWidth: true,
          },
        ],
      },
    ],
  },
  {
    slug: "movsys-engineering",
    client: "MovSys Engineering & Consulting",
    tagline: "Professional branding for a modern hardware engineering consultant.",
    description:
      "A complete visual identity including a logo, website, and business card.",
    category: "Business",
    services: ["Brand Identity", "Website", "Print Design"],
    featuredMedia: "/projects/movsys/hero.mp4",
    projects: [
      {
        title: "Website Redesign",
        slug: "website-redesign",
        description:
          "A website experience that introduces MovSys, communicates its engineering expertise, and gives prospective clients a clear path into their services.",
        images: [
          {
            src: "/projects/movsys/Website.mp4",
            alt: "A slideshow of the MovSys Engineering & Consulting website",
            width: 1920,
            height: 1080,
            fullWidth: true,
          },
        ],
      },
      {
        title: "Brand Identity",
        slug: "brand-identity",
        description:
          "An identity system built around a hardware-inspired monogram with an M-shaped electrical trace design and a green-to-cyan palette.",
        images: [
          {
            src: "/projects/movsys/MovSys_Logo.png",
            alt: "MovSys Engineering & Consulting logo variations",
            width: 8334,
            height: 2084,
            fullWidth: true,
          },
          {
            src: "/projects/movsys/MovSys_Identity.png",
            alt: "MovSys color palette & type system",
            width: 13542,
            height: 2084,
            fullWidth: true,
          },
        ],
      },
      {
        title: "Business Cards",
        slug: "business-cards",
        description:
          "A fun business-card system pairing gradient details with precision-cut black sleeves that turn the MovSys business card into a memorable reveal.",
        images: [
          {
            src: "/projects/movsys/MovSys_BC_All.png",
            alt: "MovSys business cards and die-cut black sleeves",
            width: 3888,
            height: 1545,
            fullWidth: true,
          },
          {
            src: "/projects/movsys/MovSys_BC_Close.png",
            alt: "Close view of MovSys business cards with gradient and black finishes",
            width: 2000,
            height: 1333,
          },
          {
            src: "/projects/movsys/MovSys_BC_Half.png",
            alt: "MovSys business card partially revealed from its die-cut sleeve",
            width: 3888,
            height: 2592,
          },
        ],
      },
    ],
  },
  {
    slug: "miscellaneous-work",
    client: "Miscellaneous Work",
    tagline:
      "Independent identities, academic projects, mockups, and visual experiments.",
    description:
      "An evolving collection of standalone logos, undergraduate and graduate design work, concept studies, and projects that sit outside the larger client partnerships.",
    category: "Independent",
    services: ["Logo Design", "Academic Work", "Design Explorations"],
    featuredMedia: "/c208-logo-blackcyan.png",
    mediaFit: "contain",
    caseStudy: {
      eyebrow: "A broader archive of design exploration",
      introduction:
        "Not every piece belongs to a long-term client engagement. This collection creates space for focused identities, academic investigations, mockups, and ideas developed through independent practice.",
      challenge:
        "Standalone and exploratory work spans different audiences, formats, and moments in the design process, so the collection needs room to remain varied without feeling disconnected.",
      approach:
        "The work is organized by type rather than client, allowing individual marks, academic projects, and visual studies to be added over time while preserving the context behind each piece.",
      outcome:
        "The result is an evolving archive that complements the larger case studies and shows a wider range of process, craft, and visual exploration.",
      partnership: "Independent and academic work",
      accent: "#1aa9ad",
      accentSoft: "#dcefee",
    },
    projects: [
      {
        title: "ArmAng Armenian Typeface",
        slug: "armang-armenian-typeface",
        description:
          "An Armenian typeface designed as an MFA thesis project at California State University, Long Beach, presented through a type specimen, large-scale vinyl installation, and experimental visual studies.",
        galleryMode: "lightbox",
        images: [
          {
            src: "/projects/miscellaneous/armang/vinyl_1.png",
            alt: "ArmAng Armenian typeface displayed as a large-scale red and gold vinyl wall installation",
            width: 2000,
            height: 1333,
          },
          {
            src: "/projects/miscellaneous/armang/typespecimen_1.png",
            alt: "Open ArmAng type specimen book showing the project introduction in Armenian and English",
            width: 2000,
            height: 1333,
          },
          {
            src: "/projects/miscellaneous/armang/typespecimen_2.png",
            alt: "Open ArmAng type specimen book showing Armenian glyph construction studies",
            width: 2000,
            height: 1333,
          },
          {
            src: "/projects/miscellaneous/armang/vinyl_2.png",
            alt: "Close view of the ArmAng vinyl installation with red Armenian and Latin letterforms",
            width: 2000,
            height: 1333,
          },
          {
            src: "/projects/miscellaneous/armang/vinyl_3.png",
            alt: "ArmAng red Armenian letterforms with circular gold construction guides",
            width: 2000,
            height: 1333,
          },
          {
            src: "/projects/miscellaneous/armang/vinyl_4.png",
            alt: "ArmAng brown and gold Armenian letterforms in the vinyl installation",
            width: 2000,
            height: 1333,
          },
          {
            src: "/projects/miscellaneous/armang/Experiment1.png",
            alt: "ArmAng experimental composition in warm tan and burgundy",
            width: 2000,
            height: 1294,
          },
          {
            src: "/projects/miscellaneous/armang/Experiment2.png",
            alt: "ArmAng experimental composition layering translucent Armenian letterforms",
            width: 2000,
            height: 1294,
          },
          {
            src: "/projects/miscellaneous/armang/Experiment3.png",
            alt: "ArmAng experimental composition with textured figurative imagery",
            width: 2000,
            height: 1294,
          },
        ],
      },
      {
        title: "Armenian Health Collaboration Identity",
        slug: "armenian-health-collaboration-identity",
        description:
          "A visual identity for Armenian Health Collaboration, a nonprofit led by Armenian doctors and medical professionals working to deliver medical aid to people in Armenia.",
        images: [
          {
            src: "/projects/miscellaneous/AHC_Logo.png",
            alt: "Armenian Health Collaboration logo shown on light and dark backgrounds",
            width: 4167,
            height: 2084,
            fullWidth: true,
          },
          {
            src: "/projects/miscellaneous/AHC_Identity.png",
            alt: "Armenian Health Collaboration color palette and typography system",
            width: 9375,
            height: 2084,
            fullWidth: true,
          },
        ],
      },
      {
        title: "Birchwood Ale Packaging",
        slug: "birchwood-ale-packaging",
        description:
          "A college packaging project built around an original beer brand, featuring a hand-applied gold-leaf emblem and a custom typeface created for the Birchwood wordmark.",
        galleryMode: "lightbox",
        images: [
          {
            src: "/projects/miscellaneous/birchwood/Birchwood_All.png",
            alt: "Birchwood Ale bottle and four-pack packaging displayed outdoors",
            width: 1500,
            height: 1000,
          },
          {
            src: "/projects/miscellaneous/birchwood/Birchwood_Font.png",
            alt: "Custom display typeface created for the Birchwood Ale wordmark",
            width: 3319,
            height: 655,
          },
          {
            src: "/projects/miscellaneous/birchwood/Birchwood_Palette.png",
            alt: "Birchwood Ale black, gold, yellow, and pale green color palette",
            width: 2000,
            height: 300,
          },
          {
            src: "/projects/miscellaneous/birchwood/Birchwood_3Bottles.png",
            alt: "Birchwood Ale Pale, Original, and Oaked bottle designs",
            width: 1200,
            height: 1200,
          },
          {
            src: "/projects/miscellaneous/birchwood/Birchwood_Bottle1.png",
            alt: "Birchwood Ale Pale bottle photographed outdoors",
            width: 1500,
            height: 1000,
          },
          {
            src: "/projects/miscellaneous/birchwood/Birchwood_Bottle2.png",
            alt: "Birchwood Ale Oaked bottle photographed outdoors",
            width: 1074,
            height: 1500,
          },
        ],
      },
      {
        title: "The Stinking Rose Brand Redesign",
        slug: "the-stinking-rose-brand-redesign",
        description:
          "A college branding redesign concept for The Stinking Rose restaurant chain, bringing its garlic-focused personality and Italian heritage into a coordinated stationery system.",
        galleryMode: "lightbox",
        galleryCoverFit: "contain",
        images: [
          {
            src: "/projects/miscellaneous/stinking-rose/StinkingRose_All.png",
            alt: "The Stinking Rose redesigned stationery system with letterhead, business cards, and envelope",
            width: 1400,
            height: 2000,
          },
          {
            src: "/projects/miscellaneous/stinking-rose/StinkingRose_LetterBC.png",
            alt: "The Stinking Rose redesigned envelope and business cards styled with garlic and red roses",
            width: 1400,
            height: 980,
          },
          {
            src: "/projects/miscellaneous/stinking-rose/StinkingRose_LetterEnv.png",
            alt: "The Stinking Rose redesigned letterhead and envelope styled with garlic and red roses",
            width: 1400,
            height: 980,
          },
        ],
      },
      {
        title: "Mockups & Explorations",
        slug: "mockups-and-explorations",
        description:
          "Concept designs, presentation mockups, and visual experiments that explore materials, formats, and new directions.",
      },
    ],
  },
];
