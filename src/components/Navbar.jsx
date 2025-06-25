import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-screen-lg mx-auto px-4 py-4 flex justify-between items-center">
        {/* Name on the left */}
        <div className="text-lg font-semibold">Sajid Ahamed S</div>

        {/* Navigation links on the right */}
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className={clsx(
                "px-4 py-2 rounded hover:bg-blue-700 transition",
                location.pathname === "/" &&
                  "underline underline-offset-8 decoration-white"
              )}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={clsx(
                "px-4 py-2 rounded hover:bg-blue-700 transition",
                location.pathname === "/projects" &&
                  "underline underline-offset-8 decoration-white"
              )}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className={clsx(
                "px-4 py-2 rounded hover:bg-blue-700 transition",
                location.pathname === "/about" &&
                  "underline underline-offset-8 decoration-white"
              )}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
