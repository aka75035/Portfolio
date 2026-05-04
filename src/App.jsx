import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Projects from "./pages/projects";
import InDevelopment from "./components/indevelopment";
import Contact from "./pages/contact";
import Loader from "./components/loading"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"


function App() {
  const [loading, setLoading] = useState(true);
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
            <Route path="/projects" element={<InDevelopment />} />
            <Route path="/contact" element={<InDevelopment />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
    </div>
  );
}

export default App;