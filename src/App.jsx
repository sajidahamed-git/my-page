import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/resume" element={<Resume/>} /> */}
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}
