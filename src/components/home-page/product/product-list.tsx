import React from "react";
import productData from "@/data/products.json";
import SingleProductCard from "./product-single-card";
import Link from "next/link";

type Props = {};

const ProductList = (props: Props) => {
  return (
    <section className="flex gap-5 w-full justify-center">
      {productData.map((product, ind) => {
        return (
          <Link key={product.id} href={`/products/${product.id}`}>
            <SingleProductCard product={product} key={ind} />
          </Link>
        );
      })}
    </section>
  );
};

export default ProductList;
