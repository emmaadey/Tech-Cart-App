import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#5B1E2D] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">
            Gadget<span className="text-[#F3D9DE]">Cart</span>
          </h2>

          <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
            Your simple destination for phones, laptops, headphones, cameras,
            TVs, gaming consoles and other gadgets.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-semibold">Shop</h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
            <Link to="/products" className="hover:text-white">
              All Products
            </Link>

            <Link to="/products" className="hover:text-white">
              Phones
            </Link>

            <Link to="/products" className="hover:text-white">
              Laptops
            </Link>

            <Link to="/products" className="hover:text-white">
              Gaming
            </Link>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold">Categories</h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
            <Link to="/products" className="hover:text-white">
              Headphones
            </Link>

            <Link to="/products" className="hover:text-white">
              Cameras
            </Link>

            <Link to="/products" className="hover:text-white">
              Televisions
            </Link>

            <Link to="/products" className="hover:text-white">
              Smartwatches
            </Link>
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold">Support</h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
            <a href="#" className="hover:text-white">
              Contact Us
            </a>

            <a href="#" className="hover:text-white">
              Delivery
            </a>

            <a href="#" className="hover:text-white">
              Returns
            </a>

            <a href="#" className="hover:text-white">
              Help Center
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-sm text-white/60 sm:px-6 lg:px-8">
          © 2026 GadgetCart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
