const CARS_QUERY = `*[_type == "inventory"] {
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

const slugify = (listing) => {
  const name = listing.data.name;
  const year = listing.data.year;
  const value = [name, year].join(" ");
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, "-");
};

export { CARS_QUERY as C, slugify as s };
