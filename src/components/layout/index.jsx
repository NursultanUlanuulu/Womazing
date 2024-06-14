import { useState } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Route, Routes } from "react-router-dom";
import Hero from "../hero/Hero";
import Qwalites from "../qwalites/Qwalites";
import Staf from "../staf/Staf";
import Shop from "../../pages/Shop";
import ProductDetal from "../../pages/ProductDetal";
import Backet from "../../pages/Backet";
import About from "../../pages/About";
import Contacts from "../../pages/Contacts";
import Favorite from "../../pages/Favorite";
import Auth from "../../pages/Auth";
const Root = () => {
  return (
    <>
      <Hero />
      <Qwalites />
      <Staf />
    </>
  );
};

const Layout = () => {
  const [IsVithible, setIsVithible] = useState(false);
  const changeVithible = () => {
    setIsVithible(true);
  };
  return (
    <div>
      <Header changeVithible={changeVithible} />
      {IsVithible && <Auth setIsVithible={setIsVithible} />}
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/productDetal/:id" element={<ProductDetal />} />
        <Route path="/backet" element={<Backet />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Layout;
