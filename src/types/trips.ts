export type TripsType = {
  slug: string;
  image: {
    alt: string;
    url: string;
    width: number;
    height: number;
  };
  totalDays: string;
  title: string;
  startDate: string;
  endDate: string;
  accommodation: { name: string; rating: string };
  pricing: { saving: string; initalPrice: string; finalPrice: string };
};
