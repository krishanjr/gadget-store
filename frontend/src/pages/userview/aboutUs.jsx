import { Link } from "react-router-dom";
import {
  Users,
  Award,
  Truck,
  Headphones,
  Twitter,
  Linkedin,
} from "lucide-react";
const AboutPage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen pt-24">
        {/* Header */}
        <header className="bg-gray-900 text-white py-4 px-6">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold">About Gadget Store</h1>
            <nav className="flex space-x-4">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <Link to="/shop" className="hover:underline">
                Shop
              </Link>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 py-12 px-6">
          <section className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-8">
              At Gadget Store, we strive to bring you the latest and greatest in
              tech gadgets. Our mission is to provide high-quality products at
              affordable prices with exceptional customer service.
            </p>
            <img
              src="/mouse.jpg"
              alt="Gadget Team"
              className="mx-auto rounded-lg shadow-lg w-full max-w-md"
            />
          </section>

          <section className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4">
              <Users className="w-10 h-10 text-gray-900" />
              <div>
                <h3 className="text-xl font-semibold">Expert Team</h3>
                <p className="text-gray-600">
                  Our team of experts hand-picks every product to ensure top
                  quality.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Award className="w-10 h-10 text-gray-900" />
              <div>
                <h3 className="text-xl font-semibold">Quality Assurance</h3>
                <p className="text-gray-600">
                  We guarantee satisfaction with every purchase you make.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Truck className="w-10 h-10 text-gray-900" />
              <div>
                <h3 className="text-xl font-semibold">Fast Shipping</h3>
                <p className="text-gray-600">
                  Reliable and fast delivery at your doorstep.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Headphones className="w-10 h-10 text-gray-900" />
              <div>
                <h3 className="text-xl font-semibold">24/7 Support</h3>
                <p className="text-gray-600">
                  We are here for you anytime you need us.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6 px-6 mt-12">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <p>&copy; 2025 Gadget Store. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutPage;
