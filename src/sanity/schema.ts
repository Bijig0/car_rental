import { type SchemaTypeDefinition } from "sanity";

import author from "./schemaTypes/author";
import blockContent from "./schemaTypes/blockContent";
import car from "./schemaTypes/car";
import category from "./schemaTypes/category";
import post from "./schemaTypes/post";
import featured from "./schemaTypes/featured";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, car, featured],
};
