import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "mg42imxk",
  dataset: "production",
  apiVersion: "2026-11-09",
  useCdn: true,
  perspective: "published",
});

export const EVENTS_QUERY = `*[_type == "event" && defined(sortOrder) && defined(poster.asset)] | order(sortOrder asc) {
  _id,
  sortOrder,
  altText,
  "posterAssetPath": poster.asset->url
}`;

export const GALLERY_IMAGES_QUERY = `*[_type == "galleryImage" && defined(image.asset)] | order(sortOrder asc, _createdAt desc) {
  _id,
  altText,
  "assetPath": image.asset->url
}`;

export type SanityEvent = {
  _id: string;
  sortOrder: number;
  altText: string;
  posterAssetPath: string;
};

export type SanityGalleryImage = {
  _id: string;
  altText: string;
  assetPath: string;
};
