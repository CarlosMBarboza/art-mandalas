import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Product from "../pages/product/Product";
import Contact from "../pages/contact/Contact";
import NavbarAndFooter from "../layout/NavbarAndFooter";
import KnowMore from "../pages/conoseMas/knowMore/KnowMore";

const Routing = () => {
  return (
    <NavbarAndFooter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/know-more" element={<KnowMore />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </NavbarAndFooter>
  );
};

export default Routing;
