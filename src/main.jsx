import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import HomePage from "./landing_page/home/HomePage.jsx";
import Signup from "./landing_page/signup/Signup.jsx";
import Aboutpage from "./landing_page/about/Aboutpage.jsx";
import ProductPage from "./landing_page/products/ProductPage.jsx";
import PricingPage from "./landing_page/pricing/PricingPage.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";
import Notfound from "./landing_page/Notfound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
