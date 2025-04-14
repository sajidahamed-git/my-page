export default function Navbar({ setPage }) {
    return (
      <nav className="bg-blue-600 text-white shadow-md">
        <div className="max-w-screen-lg mx-auto px-4 py-4 flex justify-between items-center">
          {/* Name on the left */}
          <div className="text-lg font-semibold">Sajid Ahamed S</div>
  
          {/* Navigation links on the right */}
          <ul className="flex space-x-6">
            <li>
              <button onClick={() => setPage("home")} className="hover:underline">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => setPage("projects")} className="hover:underline">
                Projects
              </button>
            </li>
            <li>
              {/* <button onClick={() => setPage("contact")} className="hover:underline"> */}
                {/* Contact */}
              {/* </button> */}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  