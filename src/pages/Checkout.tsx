import { Link } from "react-router";
import { Button, Divider, Radio, TextInput, Textarea } from "@mantine/core";
import { FaArrowLeft, FaLock } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F7]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#5B1E2D]">
            Checkout
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Complete your order
          </h1>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Checkout Form */}
          <section className="rounded-2xl bg-white p-6 sm:p-8">
            {/* Shipping */}
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Shipping Information
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Enter the information needed to deliver your order.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <TextInput
                  label="First Name"
                  placeholder="Enter your first name"
                />

                <TextInput
                  label="Last Name"
                  placeholder="Enter your last name"
                />

                <TextInput
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                />

                <TextInput label="Phone Number" placeholder="0800 000 0000" />

                <div className="sm:col-span-2">
                  <TextInput
                    label="Address"
                    placeholder="Enter your delivery address"
                  />
                </div>

                <TextInput label="City" placeholder="Lagos" />

                <TextInput label="State" placeholder="Lagos State" />

                <div className="sm:col-span-2">
                  <Textarea
                    label="Delivery Note"
                    placeholder="Any additional delivery instructions?"
                    minRows={3}
                  />
                </div>
              </div>
            </div>

            <Divider my="xl" />

            {/* Payment */}
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Payment Method
              </h2>

              <Radio.Group name="payment" defaultValue="card" className="mt-6">
                <div className="space-y-3">
                  <div className="rounded-xl border border-gray-200 p-4">
                    <Radio value="card" label="Card Payment" />
                  </div>

                  <div className="rounded-xl border border-gray-200 p-4">
                    <Radio value="transfer" label="Bank Transfer" />
                  </div>
                </div>
              </Radio.Group>
            </div>

            <div className="mt-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Link
                to="/cart"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#5B1E2D]"
              >
                <FaArrowLeft size={17} />
                Back to Cart
              </Link>

              <Button
                size="lg"
                color="#5B1E2D"
                leftSection={<FaLock size={18} />}
              >
                Place Order
              </Button>
            </div>
          </section>

          {/* Summary */}
          <aside className="h-fit rounded-2xl bg-white p-6">
            <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

            <div className="mt-6 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#F8F0F2] p-2">
                  <img
                    src="https://placehold.co/100x100/f8f0f2/5b1e2d?text=iPhone"
                    alt="iPhone"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold">iPhone 17 Pro</p>

                  <p className="mt-1 text-xs text-gray-500">Qty: 1</p>
                </div>

                <p className="text-sm font-semibold">₦1,500,000</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#F8F0F2] p-2">
                  <img
                    src="https://placehold.co/100x100/f8f0f2/5b1e2d?text=AirPods"
                    alt="AirPods"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold">AirPods Pro</p>

                  <p className="mt-1 text-xs text-gray-500">Qty: 1</p>
                </div>

                <p className="text-sm font-semibold">₦350,000</p>
              </div>
            </div>

            <Divider my="lg" />

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span>₦1,850,000</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Delivery</span>
                <span>₦10,000</span>
              </div>
            </div>

            <Divider my="lg" />

            <div className="flex items-center justify-between">
              <span className="font-semibold">Total</span>

              <span className="text-xl font-bold text-[#5B1E2D]">
                ₦1,860,000
              </span>
            </div>

            <p className="mt-5 text-center text-xs leading-5 text-gray-400">
              Your payment and personal information will be handled securely.
            </p>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
