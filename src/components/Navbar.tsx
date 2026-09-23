import { Link } from "react-router";
import { Button } from "@mantine/core";
import { FaShoppingCart, FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#5B1E2D] text-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Gadget<span className="text-[#b4b4b2f7]">Cart</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium transition hover:text-[#F3D9DE]"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-sm font-medium transition hover:text-[#F3D9DE]"
          >
            Products
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium transition hover:text-[#F3D9DE]"
          >
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link to="/cart">
            <Button
              variant="white"
              color="#5B1E2D"
              leftSection={<FaShoppingCart size={18} />}
              className="hidden sm:flex"
            >
              Cart
            </Button>
          </Link>

          {/* Mobile menu button */}
          <Button variant="subtle" color="white" className="md:hidden" px={8}>
            <FaBars size={22} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
