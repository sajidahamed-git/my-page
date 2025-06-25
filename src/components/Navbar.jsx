import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-screen-lg mx-auto px-4 py-4 flex justify-between items-center">
        {/* Name on the left */}
        <div className="text-lg font-semibold">Sajid Ahamed S</div>
        {/* Hamburger icon for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
        {/* Navigation links */}
        <ul
          className={clsx(
            "flex space-x-4 md:flex-row md:static md:space-x-4 md:bg-transparent md:w-auto md:shadow-none",
            "fixed top-16 right-4 bg-gray-800 rounded shadow-lg flex-col space-y-2 p-4 z-50 transition-all duration-200 md:transition-none md:space-y-0 md:p-0 md:rounded-none md:top-auto md:right-auto",
            menuOpen ? "flex" : "hidden md:flex"
          )}
        >
          <li>
            <Link
              to="/"
              className={clsx(
                "px-4 py-2 rounded hover:bg-blue-700 transition block",
                location.pathname === "/" &&
                  "underline underline-offset-8 decoration-white"
              )}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={clsx(
                "px-4 py-2 rounded hover:bg-blue-700 transition block",
                location.pathname === "/projects" &&
                  "underline underline-offset-8 decoration-white"
              )}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className={clsx(
                "px-4 py-2 rounded hover:bg-blue-700 transition block",
                location.pathname === "/resume" &&
                  "underline underline-offset-8 decoration-white"
              )}
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
