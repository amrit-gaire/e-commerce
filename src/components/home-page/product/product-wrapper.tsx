import React from "react";
import ProductList from "./product-list";

type Props = {};

const ProdcutWrapper = (props: Props) => {
  return (
    <section>
      <h2 className="text-2xl">Our Latest Product</h2>
      <ProductList />
    </section>
  );
};

export default ProdcutWrapper;
