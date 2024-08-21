import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { AboutUs } from "./pages/AboutUs";
import { Pricing } from "./pages/Pricing";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter basename="">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
