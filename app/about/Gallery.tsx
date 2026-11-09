import galleryJson from "@/public/gallery.json";
import { GALLERY_IMAGES_QUERY, sanityClient, type SanityGalleryImage } from "@/lib/sanity";

export default async function Gallery() {
  const sanityImages = await sanityClient.fetch<SanityGalleryImage[]>(GALLERY_IMAGES_QUERY);
  const images = sanityImages.length
    ? sanityImages
    : galleryJson.map(({ assetPath, altText }) => ({ _id: assetPath, assetPath, altText }));

  return (
    <div className="flex justify-center flex-col gap-8 items-center w-full mx-auto">
      <h2 className="text-6xl text-plastyk-kiss-red font-bold">GALLERY</h2>

      <div className="w-full columns-1 gap-8 md:columns-2 lg:columns-3">
        {images.map((image) => (
          <img
            key={image._id}
            src={image.assetPath}
            alt={image.altText}
            loading="lazy"
            className="w-full h-auto mb-8 break-inside-avoid"
          />
        ))}
      </div>
    </div>
  );
}