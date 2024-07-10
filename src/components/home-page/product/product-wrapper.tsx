import React from "react";
import ProductList from "./product-list";

type Props = {};

const ProdcutWrapper = (props: Props) => {
  return (
    <section className="w-full text-center">
      <h2 className="text-5xl py-5 font-bold ">Our Latest Product</h2>

      <ProductList />
    </section>
  );
};

export default ProdcutWrapper;
