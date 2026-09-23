import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F7]">
      <Navbar />

      <section className="bg-[#5B1E2D] py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#F3D9DE]">
            About Us
          </p>

          <h1 className="mt-2 text-4xl font-bold">About GadgetHub</h1>

          <p className="mt-4 max-w-2xl text-white/70">
            Your simple destination for popular gadgets from trusted brands.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="rounded-2xl bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Everything you need in one place
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            GadgetHub is a simple online gadget store where customers can browse
            and shop for phones, laptops, headphones, cameras, televisions,
            gaming consoles and other popular gadgets.
          </p>

          <p className="mt-5 leading-7 text-gray-600">
            Our goal is to make it easy for customers to discover the gadgets
            they need through a simple and straightforward shopping experience.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
