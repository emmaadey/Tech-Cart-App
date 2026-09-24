import { Button } from "@mantine/core";
import { FaSlidersH } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import ProductGrid from "../components/ProductGrid";
import { products } from "../products";
import { useSearchParams } from "react-router";

const categories = [...new Set(products.map((product) => product.category))];
const brands = [...new Set(products.map((product) => product.brand))];
const PAGE_SIZE = 8;

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Handle Search
  const search = searchParams.get("search") || "";

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    params.delete("page");
    setSearchParams(params);
  };

  // Handle Category
  const selectedCategories = searchParams.getAll("category");

  const handleCategory = (category: string) => {
    const params = new URLSearchParams(searchParams);

    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter((item) => item !== category)
      : [...selectedCategories, category];

    params.delete("category");
    updated.forEach((item) => params.append("category", item));
    params.delete("page");
    setSearchParams(params);
  };

  // Handle Brands
  const selectedBrands = searchParams.getAll("brand");

  const handleBrand = (brand: string) => {
    const params = new URLSearchParams(searchParams);

    const updated = selectedBrands.includes(brand)
      ? selectedBrands.filter((item) => item !== brand)
      : [...selectedBrands, brand];

    params.delete("brand");
    updated.forEach((item) => params.append("brand", item));
    params.delete("page");
    setSearchParams(params);
  };

  // Filtered Products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);

    return matchesSearch && matchesCategory && matchesBrand;
  });

  const page = Math.max(1, Number(searchParams.get("page")) || 1);

  const visibleProducts = filteredProducts.slice(0, page * PAGE_SIZE);
  const hasMore = visibleProducts.length < filteredProducts.length;

  const handleLoadMore = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page + 1));
    setSearchParams(params);
  };

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
          <SearchBar value={search} onChange={handleSearch} />
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
                {categories.map((category) => (
                  <label key={category} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="accent-[#5B1E2D]"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategory(category)}
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>

            <div className="my-7 border-t border-gray-100" />

            <div>
              <p className="text-sm font-semibold text-gray-800">Brand</p>

              <div className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
                {brands.map((brand) => (
                  <label key={brand} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="accent-[#5B1E2D]"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrand(brand)}
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Products */}
          <section>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-gray-500">
                Showing{" "}
                <strong className="text-gray-900">
                  {filteredProducts.length}
                </strong>{" "}
                products
              </p>
            </div>

            <ProductGrid products={visibleProducts} />
            {hasMore && (
              <div className="mt-12 flex justify-center">
                <Button
                  variant="outline"
                  onClick={handleLoadMore}
                  className="text-black! hover:text-[#5B1E2D]! hover:underline hover:underline-offset-1!"
                >
                  Load More
                </Button>
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
