import { useCart } from "./context/CartContext";
import { products } from "./products";

const DELIVERY_FEE = 10000;

export function useCartSummary() {
  const { items } = useCart();

  const cartProducts = items.flatMap((item) => {
    const product = products.find((p) => p.id === item.id);
    return product ? [{ product, qty: item.qty }] : [];
  });

  const subtotal = cartProducts.reduce(
    (total, line) => total + line.product.price * line.qty,
    0
  );
  const delivery = cartProducts.length > 0 ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  return { cartProducts, subtotal, delivery, total };
}