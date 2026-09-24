import { Link } from "react-router";
import { Button, Divider, Radio, TextInput, Textarea } from "@mantine/core";
import { FaArrowLeft, FaLock } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCartSummary } from "../useCartSummary";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  note: "",
  payment: "card",
};

// Label & Input Styles
const labelClass = "mb-1.5 block text-sm font-medium text-gray-800";
const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#5B1E2D] focus:outline-none focus:ring-1 focus:ring-[#5B1E2D]";

const Checkout = () => {
  const { clearCart } = useCart();
  const { cartProducts, subtotal, delivery, total } = useCartSummary();

  const [form, setForm] = useState(emptyForm);
  const [loaded, setLoaded] = useState(false);
  const [placed, setPlaced] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("checkout-form");
    if (saved) setForm(JSON.parse(saved));
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) sessionStorage.setItem("checkout-form", JSON.stringify(form));
  }, [form, loaded]);

  const handleChange = (field: keyof typeof emptyForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const placeOrder = () => {
    clearCart();
    setForm(emptyForm);
    setPlaced(true);
  };

  if (placed || cartProducts.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAF7F7]">
        <Navbar />

        <main className="mx-auto max-w-xl px-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            {placed ? "Thank you, your order is placed" : "Your cart is empty"}
          </h1>

          <p className="mt-3 text-gray-500">
            {placed
              ? "We'll contact you shortly about delivery."
              : "Add something to your cart before checking out."}
          </p>

          <Link to="/products">
            <Button mt="xl" color="#5B1E2D">
              Continue shopping
            </Button>
          </Link>
        </main>

        <Footer />
      </div>
    );
  }

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

        <form
          onSubmit={placeOrder}
          className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]"
        >
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
                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    placeholder="Enter your first name"
                    required
                    className={inputClass}
                    value={form.firstName}
                    onChange={(e) =>
                      handleChange("firstName", e.currentTarget.value)
                    }
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className={labelClass}>
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Enter your last name"
                    required
                    className={inputClass}
                    value={form.lastName}
                    onChange={(e) =>
                      handleChange("lastName", e.currentTarget.value)
                    }
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    className={inputClass}
                    value={form.email}
                    onChange={(e) =>
                      handleChange("email", e.currentTarget.value)
                    }
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="0800 000 0000"
                    required
                    className={inputClass}
                    value={form.phone}
                    onChange={(e) =>
                      handleChange("phone", e.currentTarget.value)
                    }
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="address" className={labelClass}>
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    autoComplete="street-address"
                    placeholder="Enter your delivery address"
                    required
                    className={inputClass}
                    value={form.address}
                    onChange={(e) =>
                      handleChange("address", e.currentTarget.value)
                    }
                  />
                </div>

                <div>
                  <label htmlFor="city" className={labelClass}>
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    placeholder="Lagos"
                    required
                    className={inputClass}
                    value={form.city}
                    onChange={(e) =>
                      handleChange("city", e.currentTarget.value)
                    }
                  />
                </div>

                <div>
                  <label htmlFor="state" className={labelClass}>
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="state"
                    name="state"
                    type="text"
                    autoComplete="address-level1"
                    placeholder="Lagos State"
                    required
                    className={inputClass}
                    value={form.state}
                    onChange={(e) =>
                      handleChange("state", e.currentTarget.value)
                    }
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="note" className={labelClass}>
                    Delivery Note
                  </label>
                  <textarea
                    id="note"
                    name="note"
                    rows={3}
                    placeholder="Any additional delivery instructions?"
                    className={inputClass}
                    value={form.note}
                    onChange={(e) =>
                      handleChange("note", e.currentTarget.value)
                    }
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

              <div className="mt-6 space-y-3">
                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-4 has-checked:border-[#5B1E2D] has-checked:bg-[#FAF7F7]">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    className="accent-[#5B1E2D]"
                    checked={form.payment === "card"}
                    onChange={(e) =>
                      handleChange("payment", e.currentTarget.value)
                    }
                  />
                  <span className="text-sm font-medium text-gray-900">
                    Card Payment
                  </span>
                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-4 has-checked:border-[#5B1E2D] has-checked:bg-[#FAF7F7]">
                  <input
                    type="radio"
                    name="payment"
                    value="transfer"
                    className="accent-[#5B1E2D]"
                    checked={form.payment === "transfer"}
                    onChange={(e) =>
                      handleChange("payment", e.currentTarget.value)
                    }
                  />
                  <span className="text-sm font-medium text-gray-900">
                    Bank Transfer
                  </span>
                </label>
              </div>
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
                type="submit"
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
              {cartProducts.map(({ product, qty }) => (
                <div key={product.id} className="flex items-center gap-4">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-[#F8F0F2]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold">{product.name}</p>
                    <p className="mt-1 text-xs text-gray-500">Qty: {qty}</p>
                  </div>

                  <p className="text-sm font-semibold">
                    ₦{(product.price * qty).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            <Divider my="lg" />

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span>₦{subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Delivery</span>
                <span>₦{delivery.toLocaleString()}</span>
              </div>
            </div>

            <Divider my="lg" />

            <div className="flex items-center justify-between">
              <span className="font-semibold">Total</span>

              <span className="text-xl font-bold text-[#5B1E2D]">
                ₦{total.toLocaleString()}
              </span>
            </div>

            <p className="mt-5 text-center text-xs leading-5 text-gray-400">
              Your payment and personal information will be handled securely.
            </p>
          </aside>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
