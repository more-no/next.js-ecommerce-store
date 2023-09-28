// import 'server-only';

export const products = [
  { id: 1, name: 'product_1', description: 'descrizione uno' },
  { id: 2, name: 'product_2', description: 'descrizione due' },
  { id: 3, name: 'product_3', description: 'descrizione tre' },
  { id: 4, name: 'product_4', description: 'descrizione quattro' },
  { id: 5, name: 'product_5', description: 'descrizione cinque' },
  { id: 6, name: 'product_6', description: 'descrizione sei' },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
