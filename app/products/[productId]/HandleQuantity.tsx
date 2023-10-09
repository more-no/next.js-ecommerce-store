export function handleQuantity(currentQuantity: number, quantityToAdd: number) {
  return (currentQuantity = currentQuantity += quantityToAdd);
}
