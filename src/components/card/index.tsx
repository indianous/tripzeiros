import brlConverter from "@/src/utils/brlConverter";
import {
  CardBody,
  CardFooter,
  CardHeader,
  Card as ChakraCard,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "../link";

interface CardProps {
  tour: {
    image: { alt: string; url: string };
    title: string;
    price: number;
    slug: string;
  };
}

export function Card({ tour }: CardProps) {
  return (
    <>
      <Link href={"/" + tour.slug}>
        <ChakraCard>
          <CardHeader>
            <Image alt={tour.image.alt} src={tour.image.url} />
          </CardHeader>
          <CardBody>
            <Text className="text-2xl font-bold">{tour.title}</Text>
          </CardBody>
          <CardFooter>
            <div>
              <div>
                <Text className="text-sm">A partir de: </Text>
              </div>
              <div>
                <Text className="text-xl">{brlConverter(tour.price)}</Text>
              </div>
            </div>
          </CardFooter>
        </ChakraCard>
      </Link>
    </>
  );
}
