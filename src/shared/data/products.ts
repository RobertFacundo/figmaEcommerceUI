export interface Product {
  id: string;
  brand: string;
  name: string;
  description: string;
  benefits: string[];
  price: number;
  images: {
    main: string;
    gallery: string[];
  };
}

export const products: Product[] = [
  {
    id: "product-1",
    brand: "Off-White",
    name: `Out Of Office "Ooo" sneakers`,
    description: "Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.",
    benefits: [
      "Regular fit",
      "Lace closure",
      "Rubber outsole with vulcanized look",
      "Imported"
    ],
    price: 775,
    images: {
      main: "/products/off-white-1.png",
      gallery: [
        "/products/off-white-1.png",
        "/products/off-white-2.png",
        "/products/off-white-3.png",
        "/products/off-white-4.png",
      ],
    },
  },
  {
    id: "product-2",
    brand: "Nike",
    name: `Nike Gamma Force`,
    description: "Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.",
    benefits: [
      "Regular fit",
      "Lace closure",
      "Rubber outsole with vulcanized look",
      "Imported"
    ],
    price: 200,
    images: {
      main: "/products/nike-force-1.png",
      gallery: [
        "/products/nike-force-1.png",
        "/products/nike-force-2.png",
        "/products/nike-force-3.png",
        "/products/nike-force-4.png",
      ],
    },
  },
  {
    id: "product-3",
    brand: "Nike",
    name: `Cosmic Unity 3`,
    description: "Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.",
    benefits: [
      "Regular fit",
      "Lace closure",
      "Rubber outsole with vulcanized look",
      "Imported"
    ],
    price: 160,
    images: {
      main: "/products/nike-cosmic-1.png",
      gallery: [
        "/products/nike-cosmic-1.png",
        "/products/nike-cosmic-2.png",
        "/products/nike-cosmic-3.png",
        "/products/nike-cosmic-4.png",
      ],
    },
  },
  {
    id: "product-4",
    brand: "Adidas",
    name: `DAILY 3.0 SHOES`,
    description: "Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.",
    benefits: [
      "Regular fit",
      "Lace closure",
      "Rubber outsole with vulcanized look",
      "Imported"
    ],
    price: 160,
    images: {
      main: "/products/adidas-1.png",
      gallery: [
        "/products/adidas-1.png",
        "/products/adidas-2.png",
        "/products/adidas-3.png",
        "/products/adidas-4.png",
      ],
    },
  },
]