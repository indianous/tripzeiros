import { Accommodation } from "./accommodation";
import { Image } from "./image";

export type TripType = {
  slug: string;
  image: Image[];
  totalDays: string;
  title: string;
  startDate: string;
  endDate: string;
  accommodation?: Accommodation;
  price: number;
};
