import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Product from "../pages/product/Product";
import Contact from "../pages/contact/Contact";
import NavbarAndFooter from "../layout/NavbarAndFooter";
import ConoseMas from "../pages/conoseMas/ConoseMas";
import RegistroAkashicos from "../pages/conoseMas/RegistroAkashicos";
import Pendulo from "../pages/conoseMas/Pendulo";
import Reiki from "../pages/conoseMas/Reiki";
import ConstelacionesFamiliares from "../pages/conoseMas/ConstelacionesFamiliares";

const Routing = () => {
  return (
    <NavbarAndFooter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />

        {/* Rutas anidadas para Conose Más */}
        <Route path="/conoseMas" element={<ConoseMas />}>
          <Route path="registroAkashicos" element={<RegistroAkashicos />} />
          <Route path="pendulo" element={<Pendulo />} />
          <Route path="reiki" element={<Reiki />} />
          <Route path="constelacionesFamiliares" element={<ConstelacionesFamiliares />} />
        </Route>
      </Routes>
    </NavbarAndFooter>
  );
};

export default Routing;
