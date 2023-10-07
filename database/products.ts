import 'server-only';
import { cache } from 'react';
import { sql } from '../database/connect';
import { Product } from '../migrations/00000-createTableCakes';

export const getProducts = cache(async () => {
  // return products;
  const products = await sql<Product[]>`
    SELECT * FROM cakes
  `;
  return products;
});

export const getProductById = cache(async (id: number) => {
  // Postgres always returns an array so we close the product in square brackets
  const [product] = await sql<Product[]>`
    SELECT * FROM cakes WHERE id = ${id}
  `;
  return product;
});
// postgres always return an array, so if we need to get the one product
// we may need to use product[0] - to get the first element of the array
//    but a better way to do it is to destruct the array directly when we define it
//    so we write  --const [product]--  instead than  --const product---
