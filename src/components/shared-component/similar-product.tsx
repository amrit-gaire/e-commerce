import React from "react";
import ProductList from "../home-page/product/product-list";

type Props = {};

const SimilarProduct = (props: Props) => {
  return (
    <section className="mt-10">
      <h3>You may also like</h3>
      <ProductList />
    </section>
  );
};

export default SimilarProduct;
