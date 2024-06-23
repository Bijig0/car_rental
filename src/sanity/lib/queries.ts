export const POSTS_QUERY = `*[_type == "post" && defined(slug)] {
 ...,
 "author": author->,
 "excerpt": array::join(string::split((pt::text(body)), "")[0..255], "") + "...",
 "categories": categories[]->{title}
}`;

export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
 ...,
 "author": author->,
 "excerpt": array::join(string::split((pt::text(body)), "")[0..255], "") + "...",
 "categories": categories[]->{title}
}`;

export const CARS_QUERY = `*[_type == "inventory"] {
  _id,
  _createdAt,
  _updatedAt,
  "metadata": {
    "rank": metadata.rank
  },
  "data": {
    "transmission": data.transmission,
    "year": data.year,
    "name": data.name,
    "shortName": data.shortName,
    "drive": data.drive,
    "seats": data.seats,
    "doors": data.doors,
    "fuelUsage": data.fuelUsage,
    "shortFuelType": data.shortFuelType,
    "fuelType": data.fuelType,
    "description": data.description,
    "features": data.features,
    "safety": {
      "childSafetySeat": data.safety.childSafetySeat,
      "pricePerWeek": data.safety.pricePerWeek
    },
    "guidelines": data.guidelines[]{
      "message": message
    },
    "pricePerWeek": data.pricePerWeek,
    "cc": data.cc,
    "heroImageUrl": data.heroImageUrl.asset->url,
    "cardImageUrl": data.cardImageUrl.asset->url,
    "listingImages": {
      "mainImage": data.listingImages.mainImage.asset->url,
      "subImages": data.listingImages.subImages[].asset->url
    }
  },
}
`;

// export const CAR_QUERY = `*[_type == "inventory" && slug.current == $slug][0] {
//  ...,
//  "data": data->,
//  "metadata": metadata->,
//  "author": author->,
//  "excerpt": array::join(string::split((pt::text(body)), "")[0..255], "") + "...",
//  "categories": categories[]->{title}
// }`;
