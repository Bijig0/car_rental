import { defineField, defineType } from "sanity";

export default defineType({
  name: "featuredCars",
  title: "Featured Cars",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Order",
      type: "array",
      of: [{ type: "string" }],
      
    }),
  ],
});
