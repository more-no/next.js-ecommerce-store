import 'server-only';
import { cache } from 'react';
import { sql } from '../database/connect';
import { Product } from '../migrations/00000-createTableCakes';

export const getProducts = cache(async () => {
  const products = await sql<Product[]>`
    SELECT
      *
    FROM
      cakes
  `;
  return products;
});

export const getProductById = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
      cakes
    WHERE
      id = ${id}
  `;
  return product;
});
