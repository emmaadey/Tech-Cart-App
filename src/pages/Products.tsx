import { Select, Button } from "@mantine/core";
import { FaSlidersH, FaChevronDown } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import ProductGrid from "../components/ProductGrid";
import { products } from "../products";

const Products = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F7]">
      <Navbar />

      {/* Header */}
      <section className="bg-[#5B1E2D] py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#F3D9DE]">
            Explore
          </p>

          <h1 className="mt-2 text-4xl font-bold">All Gadgets</h1>

          <p className="mt-4 max-w-xl text-white/70">
            Browse phones, laptops, headphones, cameras, TVs, gaming consoles
            and more.
          </p>
        </div>
      </section>

      {/* Products Area */}
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Search */}
        <div className="mx-auto max-w-2xl">
          <SearchBar />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <aside className="hidden rounded-2xl border border-gray-200 bg-white p-6 lg:block">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-gray-900">Filters</h2>

              <FaSlidersH size={20} className="text-[#5B1E2D]" />
            </div>

            <div className="mt-7">
              <p className="text-sm font-semibold text-gray-800">Category</p>

              <div className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="accent-[#5B1E2D]" />
                  Phones
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" className="accent-[#5B1E2D]" />
                  Laptops
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" className="accent-[#5B1E2D]" />
                  Headphones
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" className="accent-[#5B1E2D]" />
                  Cameras
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" className="accent-[#5B1E2D]" />
                  Televisions
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" className="accent-[#5B1E2D]" />
                  Gaming
                </label>
              </div>
            </div>

            <div className="my-7 border-t border-gray-100" />

            <div>
              <p className="text-sm font-semibold text-gray-800">Brand</p>

              <div className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="accent-[#5B1E2D]" />
                  Apple
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" className="accent-[#5B1E2D]" />
                  Samsung
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" className="accent-[#5B1E2D]" />
                  Sony
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" className="accent-[#5B1E2D]" />
                  LG
                </label>
              </div>
            </div>
          </aside>

          {/* Products */}
          <section>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-gray-500">
                Showing{" "}
                <strong className="text-gray-900">{products.length}</strong>{" "}
                products
              </p>

              <Select
                placeholder="Sort by"
                data={[
                  "Newest",
                  "Price: Low to High",
                  "Price: High to Low",
                  "Highest Rated",
                ]}
                rightSection={<FaChevronDown size={16} />}
                className="w-full sm:w-56"
              />
            </div>

            <ProductGrid products={products} />

            {/* Pagination placeholder */}
            <div className="mt-12 flex justify-center">
              <Button variant="outline" color="#5B1E2D">
                Load More
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
