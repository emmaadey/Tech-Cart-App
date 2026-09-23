import { Link } from "react-router";
import { Button } from "@mantine/core";
import {
  FaArrowRight,
  FaMobileAlt,
  FaLaptop,
  FaHeadphones,
  FaCamera,
  FaTv,
  FaGamepad,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import { products } from "../products";

const categories = [
  {
    name: "Phones",
    icon: <FaMobileAlt size={28} />,
  },
  {
    name: "Laptops",
    icon: <FaLaptop size={28} />,
  },
  {
    name: "Headphones",
    icon: <FaHeadphones size={28} />,
  },
  {
    name: "Cameras",
    icon: <FaCamera size={28} />,
  },
  {
    name: "Televisions",
    icon: <FaTv size={28} />,
  },
  {
    name: "Gaming",
    icon: <FaGamepad size={28} />,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#5B1E2D] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#F3D9DE]">
              Your gadget store
            </p>

            <h1 className="max-w-xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Everything you need, all in one place.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/75 sm:text-lg">
              Shop phones, laptops, headphones, cameras, TVs, gaming consoles
              and more from popular brands.
            </p>

            <div className="mt-8">
              <Link to="/products">
                <Button
                  size="lg"
                  color="white"
                  c="#5B1E2D"
                  rightSection={<FaArrowRight size={19} />}
                >
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="flex justify-center">
            <div className="flex aspect-square w-full max-w-lg items-center justify-center rounded-3xl bg-white/10 p-8">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white/10">
                <span className="text-center text-4xl font-bold text-white/80 sm:text-5xl">
                  GADGETS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#FAF7F7] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#5B1E2D]">
              Browse
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Shop by category
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-gray-500">
              Find the gadget you're looking for quickly.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to="/products"
                className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 text-center transition hover:-translate-y-1 hover:border-[#5B1E2D] hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F8F0F2] text-[#5B1E2D]">
                  {category.icon}
                </div>

                <span className="mt-4 text-sm font-semibold text-gray-800">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#5B1E2D]">
                Featured
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Popular gadgets
              </h2>
            </div>

            <Link
              to="/products"
              className="hidden items-center gap-2 text-sm font-semibold text-[#5B1E2D] sm:flex"
            >
              View all
              <FaArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-10">
            <ProductGrid products={products.slice(0, 4)} />
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-[#5B1E2D] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-bold">Quality Gadgets</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Shop from a selection of popular gadgets and trusted brands.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Easy Shopping</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Find what you need with simple search and product browsing.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Secure Checkout</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                A straightforward checkout experience designed for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
