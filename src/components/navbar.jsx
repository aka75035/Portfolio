import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-black">
          Portfolio
        </h1>

        {/* Links */}
        <div className="flex gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-purple-600 transition">
            Home
          </Link>
          <Link to="/projects" className="hover:text-purple-600 transition">
            Projects
          </Link>
          <Link to="/certificates" className="hover:text-purple-600 transition">
            My Certificates
          </Link>
          <Link to="/contact" className="hover:text-purple-600 transition">
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;