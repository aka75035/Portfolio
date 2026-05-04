import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Navbar from "./components/navbar";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Loader from "./components/loading"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"


function App() {
  const [loading, setLoading] = useState(false);
  if (loading) {
    return (
      <div className="fixed inset-0 bg-black z-50">
        <Loader onComplete={() => setLoading(false)} />
      </div>
    );
  }
  return (
    <div className="relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
    </div>
  );
}

export default App;