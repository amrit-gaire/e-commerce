import React from "react";
import productData from "@/data/products.json";
import { TProduct } from "@/types/product";
import SingleProductCard from "./product-single-card";

type Props = {};

const ProductList = (props: Props) => {
  return (
    <section className="flex gap-5 w-full justify-center">
      {productData.map((product, ind) => {
        return <SingleProductCard product={product} key={ind} />;
      })}
    </section>
  );
};

export default ProductList;
