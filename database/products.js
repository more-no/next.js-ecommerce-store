export const products = [
  { id: 1, name: 'prodotto1', description: 'descrizione uno' },
  { id: 2, name: 'prodotto2', description: 'descrizione due' },
  { id: 3, name: 'prodotto3', description: 'descrizione tre' },
  { id: 4, name: 'prodotto4', description: 'descrizione quattro' },
  { id: 5, name: 'prodotto5', description: 'descrizione cinque' },
  { id: 6, name: 'prodotto6', description: 'descrizione sei' },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
