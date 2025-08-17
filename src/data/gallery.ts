interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  category?: string;
}

const gallery: GalleryItem[] = [
  {
    src: "/images/test-andreea.png",
    alt: "Machiaj natural luminos",
    caption: "Natural Glow",
    category: "everyday",
  },
  {
    src: "/images/test-andreea.png",
    alt: "Eyeliner grafic",
    caption: "Graphic Liner",
    category: "artistic",
  },
  {
    src: "/images/test-andreea.png",
    alt: "Machiaj mireasă elegant",
    caption: "Bridal Classic",
    category: "bridal",
  },
  {
    src: "/images/test-andreea.png",
    alt: "Smokey eyes intens",
    caption: "Dramatic Smokey",
    category: "evening",
  },
];

export default gallery;
