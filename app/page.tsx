import { Card } from "@/src/components/card";
import { Footer } from "@/src/components/footer";
import CreateLocationForm from "@/src/components/forms/create-location-form";
import { findAllToursService } from "@/backend/src/services/findAllTour";
import { Heading } from "@chakra-ui/react";

export default async function Home() {
  // const tours = await findAllToursService.execute();
  return (
    <>
      <main className="flex flex-col items-center justify-center p-4 shadow-md">
        <CreateLocationForm />
        <div className=" pt-8">
          <Heading className="mb-8">Excursões</Heading>
          <div className="grid grid-cols-8 gap-4">
            {/* {tours.map(({ title, slug, price, images }, index) => {
              const image = images[0];
              return (
                <div className="col-span-2" key={index}>
                  <Card
                    tour={{
                      image: {
                        alt: image ? image.alt : "Not a Founded",
                        url: image
                          ? image.url
                          : "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
                      },
                      price,
                      slug,
                      title,
                    }}
                  />
                </div>
              );
            })} */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
