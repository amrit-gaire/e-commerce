import React from "react";
import ProductList from "./product-list";
import Heading from "@/components/shared-component/headings";

type Props = {};

const ProdcutWrapper = (props: Props) => {
  return (
    <section className="mt-12">
      <Heading text="Our Latest Product" />
      <ProductList />
    </section>
  );
};

export default ProdcutWrapper;
