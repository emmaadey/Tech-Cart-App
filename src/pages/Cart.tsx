import { Link } from "react-router";
import { Button, Divider, NumberInput } from "@mantine/core";
import { FaArrowLeft, FaTrash } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cart = () => {
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

              <span className="text-sm text-gray-500">2 items</span>
            </div>

            {/* Item */}
            <div className="mt-7 flex flex-col gap-5 border-b border-gray-100 pb-7 sm:flex-row sm:items-center">
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-[#F8F0F2] p-3">
                <img
                  src="https://placehold.co/200x200/f8f0f2/5b1e2d?text=iPhone"
                  alt="iPhone"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex-1">
                <p className="text-sm text-gray-400">Apple</p>

                <h3 className="mt-1 font-semibold text-gray-900">
                  iPhone 17 Pro
                </h3>

                <p className="mt-2 font-bold text-[#5B1E2D]">₦1,500,000</p>
              </div>

              <NumberInput min={1} defaultValue={1} className="w-24" />

              <Button variant="subtle" color="red" px={8}>
                <FaTrash size={18} />
              </Button>
            </div>

            {/* Second Item */}
            <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center">
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-[#F8F0F2] p-3">
                <img
                  src="https://placehold.co/200x200/f8f0f2/5b1e2d?text=AirPods"
                  alt="AirPods"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex-1">
                <p className="text-sm text-gray-400">Apple</p>

                <h3 className="mt-1 font-semibold text-gray-900">
                  AirPods Pro
                </h3>

                <p className="mt-2 font-bold text-[#5B1E2D]">₦350,000</p>
              </div>

              <NumberInput min={1} defaultValue={1} className="w-24" />

              <Button variant="subtle" color="red" px={8}>
                <FaTrash size={18} />
              </Button>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#5B1E2D]"
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
                <span className="font-medium">₦1,850,000</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Delivery</span>
                <span className="font-medium">₦10,000</span>
              </div>
            </div>

            <Divider my="lg" />

            <div className="flex justify-between">
              <span className="font-semibold">Total</span>
              <span className="text-xl font-bold text-[#5B1E2D]">
                ₦1,860,000
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
