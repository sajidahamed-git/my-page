import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      // case "about":
        // return <About />;
      case "projects":
        return <Projects />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar setPage={setPage} />
      <div className="p-4">{renderPage()}</div>
    </div>
  );
}
