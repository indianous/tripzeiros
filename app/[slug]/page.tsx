import { findTourBySlugService } from "@/src/services/findTourBySlug";
import TourViewer from "@/src/components/viewers/tour-viewer";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  try {
    const { description, duration, images, price, rating, services, title } =
      await findTourBySlugService.execute(params.slug);
    return (
      <>
        <TourViewer
          tour={{
            description: description.toString(),
            duration,
            images: images.map(({ alt, url }) => ({ alt, url })),
            price,
            rating,
            services: services.map(({ content }) => ({
              content: content || "",
            })),
            title,
            comments: [],
          }}
        />
      </>
    );
  } catch (error) {}
}
