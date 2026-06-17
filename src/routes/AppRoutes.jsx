import { Routes, Route } from "react-router";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import ProductDetails from "../pages/ProductDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;