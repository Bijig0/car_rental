import { defineType } from "sanity";

export default defineType({
  name: "inventory",
  title: "Inventory",
  type: "document",
  preview: {
    select: {
      title: "data.name",
    },
  },
  fields: [
    {
      name: "metadata",
      title: "Metadata",
      type: "object",
      fields: [
        {
          name: "rank",
          title: "Rank",
          type: "number",
        },
      ],
    },
    {
      name: "data",
      title: "Data",
      type: "object",
      fields: [
        {
          name: "transmission",
          title: "Transmission",
          type: "string",
          options: {
            list: [
              { title: "Auto", value: "auto" },
              { title: "Manual", value: "manual" },
            ],
          },
        },
        {
          name: "year",
          title: "Year",
          type: "number",
        },
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "shortName",
          title: "Short Name",
          type: "string",
        },
        {
          name: "drive",
          title: "Drive",
          type: "string",
        },
        {
          name: "seats",
          title: "Seats",
          type: "number",
        },
        {
          name: "doors",
          title: "Doors",
          type: "number",
        },
        {
          name: "fuelUsage",
          title: "Fuel Usage",
          type: "string",
        },
        {
          name: "shortFuelType",
          title: "Short Fuel Type",
          type: "string",
        },
        {
          name: "fuelType",
          title: "Fuel Type",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "string",
        },
        {
          name: "features",
          title: "Features",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "safety",
          title: "Safety",
          type: "object",
          fields: [
            {
              name: "childSafetySeat",
              title: "Child Safety Seat",
              type: "boolean",
            },
            {
              name: "pricePerWeek",
              title: "Price Per Week",
              type: "string",
            },
          ],
        },
        {
          name: "guidelines",
          title: "Guidelines",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "message",
                  title: "Message",
                  type: "string",
                },
              ],
            },
          ],
        },
        {
          name: "pricePerWeek",
          title: "Price Per Week",
          type: "number",
        },
        {
          name: "cc",
          title: "CC",
          type: "number",
        },
        {
          name: "heroImageUrl",
          title: "Hero Image",
          type: "image",
        },
        {
          name: "cardImageUrl",
          title: "Card Image",
          type: "image",
        },
        {
          name: "listingImages",
          title: "Listing Images",
          type: "object",
          fields: [
            {
              name: "mainImage",
              title: "Main Image",
              type: "image",
            },
            {
              name: "subImages",
              type: "array",
              title: "Other Listing Images",
              of: [{ type: "image" }],
            },
          ],
        },
      ],
    },
  ],
});
