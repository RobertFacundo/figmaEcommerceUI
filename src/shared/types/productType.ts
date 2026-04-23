export type Product = {
  id: string;
  brand: string;
  name: string;
  price: number;
  description: string;
  benefits: string[];
  images: {
    main: string;
    gallery: string[];
  };
};