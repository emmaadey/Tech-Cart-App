import { Link, useParams } from "react-router";
import { Badge, Button, NumberInput } from "@mantine/core";
import { FaArrowLeft } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-[#FAF7F7]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#5B1E2D]"
        >
          <FaArrowLeft size={17} />
          Back to products
        </Link>

        {/* Product */}
        <section className="mt-8 overflow-hidden rounded-3xl bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="flex min-h-[450px] items-center justify-center bg-[#F8F0F2] p-10">
              <img
                src="https://placehold.co/800x700/f8f0f2/5b1e2d?text=Product+Image"
                alt="Product"
                className="max-h-[500px] w-full object-contain"
              />
            </div>

            {/* Information */}
            <div className="p-6 sm:p-10 lg:p-14">
              <Badge variant="light" color="#5B1E2D">
                Phones
              </Badge>

              <p className="mt-6 text-sm text-gray-500">Apple</p>

              <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                iPhone 17 Pro
              </h1>

              <div className="mt-4 flex items-center gap-2">
                <FaStar size={19} className="fill-current text-[#5B1E2D]" />

                <span className="font-medium">4.8</span>

                <span className="text-gray-400">(124 reviews)</span>
              </div>

              <p className="mt-7 text-3xl font-bold text-[#5B1E2D]">
                ₦1,500,000
              </p>

              <p className="mt-6 leading-7 text-gray-600">
                Experience a powerful smartphone with a premium design,
                excellent performance and advanced camera capabilities.
              </p>

              <div className="my-8 border-t border-gray-100" />

              <div className="flex items-end gap-4">
                <NumberInput
                  label="Quantity"
                  min={1}
                  defaultValue={1}
                  className="w-32"
                />

                <Button
                  size="md"
                  color="#5B1E2D"
                  leftSection={<FiShoppingCart size={19} />}
                >
                  Add to Cart
                </Button>
              </div>

              <div className="mt-8 rounded-xl bg-[#FAF7F7] p-5">
                <p className="font-semibold text-gray-900">
                  Product Information
                </p>

                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Brand</p>
                    <p className="mt-1 font-medium">Apple</p>
                  </div>

                  <div>
                    <p className="text-gray-400">Category</p>
                    <p className="mt-1 font-medium">Phones</p>
                  </div>

                  <div>
                    <p className="text-gray-400">Availability</p>
                    <p className="mt-1 font-medium text-green-600">In Stock</p>
                  </div>

                  <div>
                    <p className="text-gray-400">Product ID</p>
                    <p className="mt-1 font-medium">{id}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="mt-8 rounded-3xl bg-white p-6 sm:p-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Product Description
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            This section will contain the full product description,
            specifications and other information about the gadget.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
