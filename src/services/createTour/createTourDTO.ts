interface CreateTourDTO {
  description: string;
  duration: number;
  price: number;
  rating: number;
  slug: string;
  title: string;
  images: { alt: string; url: string }[];
  locations: {
    id: string;
  }[];
  services: { id: string }[];
}
