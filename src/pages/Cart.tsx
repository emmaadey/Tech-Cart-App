import { Link } from "react-router";
import { Button, Divider, NumberInput } from "@mantine/core";
import { FaArrowLeft, FaTrash } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCartSummary } from "../useCartSummary";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { count, updateQty, removeFromCart } = useCart();
  const { cartProducts, subtotal, delivery, total } = useCartSummary();

  return (
    <div className="min-h-screen bg-[#FAF7F7]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#5B1E2D]">
            Shopping Cart
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">Your Cart</h1>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* Cart Items */}
          <section className="rounded-2xl bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Cart Items</h2>

              <span className="text-sm text-gray-500">
                {count} {count === 1 ? "item" : "items"}
              </span>
            </div>

            {cartProducts.length === 0 && (
              <p className="mt-7 text-gray-500">Your cart is empty.</p>
            )}

            {cartProducts.map(({ product, qty }) => (
              <div
                key={product.id}
                className="flex flex-col gap-5 border-b border-gray-100 py-7 sm:flex-row sm:items-center"
              >
                <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-[#F8F0F2]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-sm text-gray-400">{product.brand}</p>

                  <h3 className="mt-1 font-semibold text-gray-900">
                    {product.name}
                  </h3>

                  <p className="mt-2 font-bold text-[#5B1E2D]">
                    ₦{product.price.toLocaleString()}
                  </p>
                </div>

                <NumberInput
                  min={1}
                  max={product.stock}
                  value={qty}
                  onChange={(value) =>
                    updateQty(product.id, Number(value) || 1)
                  }
                  className="w-24"
                />

                <Button
                  variant="subtle"
                  color="red"
                  px={8}
                  onClick={() => removeFromCart(product.id)}
                >
                  <FaTrash size={18} />
                </Button>
              </div>
            ))}

            <Link
              to="/products"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#5B1E2D]"
            >
              <FaArrowLeft size={17} />
              Continue Shopping
            </Link>
          </section>

          {/* Summary */}
          <aside className="h-fit rounded-2xl bg-white p-6">
            <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

            <div className="mt-7 space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-medium">
                  ₦{subtotal.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Delivery</span>
                <span className="font-medium">
                  ₦{delivery.toLocaleString()}
                </span>
              </div>
            </div>

            <Divider my="lg" />

            <div className="flex justify-between">
              <span className="font-semibold">Total</span>
              <span className="text-xl font-bold text-[#5B1E2D]">
                ₦{total.toLocaleString()}
              </span>
            </div>

            <Link to="/checkout">
              <Button fullWidth size="lg" color="#5B1E2D" className="mt-7">
                Proceed to Checkout
              </Button>
            </Link>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
