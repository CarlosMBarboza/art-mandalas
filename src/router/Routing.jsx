import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Product from "../pages/product/Product";
import Contact from "../pages/contact/Contact";
import NavbarAndFooter from "../layout/NavbarAndFooter";
import ConoceMas from "../pages/conoceMas/ConoscaMas";
import RegistroAkashicos from "../pages/conocemas/RegistroAkashicos";
import Pendulo from "../pages/conocemas/Pendulo";
import Reiki from "../pages/conocemas/Reiki";
import ConstelacionesFamiliares from "../pages/conocemas/ConstelacionesFamiliares";

const Routing = () => {
  return (
    <NavbarAndFooter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />

        {/* Rutas anidadas para Conose Más */}
        <Route path="/conoceMas" element={<ConoceMas />}>
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
