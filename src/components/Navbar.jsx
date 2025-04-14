export default function Navbar({ setPage, page }) {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-screen-lg mx-auto px-4 py-4 flex justify-between items-center">
        {/* Name on the left */}
        <div className="text-lg font-semibold">Sajid Ahamed S</div>

        {/* Navigation links on the right */}
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => setPage("home")}
              className={`px-4 py-2 rounded hover:bg-blue-700 transition ${
                page === "home" ? "underline underline-offset-8 decoration-white" : ""
              }`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage("projects")}
              className={`px-4 py-2 rounded hover:bg-blue-700 transition ${
                page === "projects" ? "underline underline-offset-8 decoration-white" : ""
              }`}
            >
              Projects
            </button>
          </li>
          <li>

          </li>
        </ul>
      </div>
    </nav>
  );
}
