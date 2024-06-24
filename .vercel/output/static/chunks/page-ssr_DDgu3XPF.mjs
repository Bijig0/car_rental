import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"v2023-08-24","projectId":"h7ck6z68","dataset":"production","useCdn":true}
          );

globalThis.sanityClient = sanityClient;

export { sanityClient as s };
