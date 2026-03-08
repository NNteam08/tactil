export const firstSeries = {
  title: "Tactile Ecosystem — FIRST Series",
  subtitle: "Complete tactile learning kit for FIRST Tech Challenge",
  introFtc:
    "FIRST Tech Challenge (FTC) is a robotics competition and education program for students. Teams design, build, and program robots to compete in an annual game. Traditional FTC relies heavily on visual materials, screens, and printed diagrams.",
  problem:
    "For blind and low-vision students, traditional robotics learning creates barriers: visual manuals, on-screen code, and diagrams are not accessible. Tactil's Tactile Ecosystem is built to solve this.",
  solution:
    "The Tactile Ecosystem combines a Braille book (Read), an audiobook and box audio guide (Hear), and a tactile box with fixed cell layout (Touch). Together they deliver the same curriculum in accessible formats so every student can participate.",
  whatsIncluded: [
    "Braille book — full FIRST Series curriculum in Braille",
    "Tactile box — fixed cell layout for hands-on learning",
    "Audio guide / audiobook — listen to instructions and content",
  ],
  price: "$120",
  priceNote: "Regional pricing may vary. Shipping arranged individually.",
  productGalleryAlt: "Tactile Ecosystem product: Braille book, tactile box, and audio materials",
};

export const howToGet = {
  title: "How to Get a Kit",
  options: [
    {
      key: "request" as const,
      title: "Request a Kit",
      description: "Submit a request and we will contact you to arrange purchase and delivery to your region.",
      cta: "Request a Kit",
      icon: "box",
    },
    {
      key: "grant" as const,
      title: "Apply for a Grant",
      description: "Schools and organizations in underserved regions can apply for a free kit through our grant program.",
      cta: "Apply for Grant",
      icon: "gift",
    },
  ],
};

export const incomingSeries = [
  { id: "series-2", name: "VEX Series", tagline: "Tactile Ecosystem for VEX Robotics — coming soon" },
  { id: "series-3", name: "Arduino Series", tagline: "Tactile learning for Arduino & maker projects — coming soon" },
];

export const guideNames = {
  recreation: "Recreation / Creation guide",
  translation: "Translation guide",
};
