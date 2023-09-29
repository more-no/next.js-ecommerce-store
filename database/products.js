// import 'server-only';

export const products = [
  { id: 1, name: 'product_1', price: '30', description: 'descrizione uno' },
  { id: 2, name: 'product_2', price: '25', description: 'descrizione due' },
  { id: 3, name: 'product_3', price: '35', description: 'descrizione tre' },
  { id: 4, name: 'product_4', price: '20', description: 'descrizione quattro' },
  { id: 5, name: 'product_5', price: '35', description: 'descrizione cinque' },
  { id: 6, name: 'product_6', price: '55', description: 'descrizione sei' },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
