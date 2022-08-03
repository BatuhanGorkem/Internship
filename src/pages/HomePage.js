import React from "react";
import Header from "../components/Header";
import Client from "../components/Client";
import Navbar from "../components/Navbar";
import ProductsInfo from "../components/ProductsInfo";
import Info from "../components/Info";
import Footer from "../components/Footer";
import Product from "../components/Product";
import { useState } from "react";
const HomePage = () => {
  const [search, setsearch] = useState("");

  return (
    <>
      <Header />
      <Client search={search} setsearch={setsearch} />
      <Navbar />
      <ProductsInfo />
      <Product search={search} setsearch={setsearch} />
      <Info />
      <Footer />
    </>
  );
};

export default HomePage;
