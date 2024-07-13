import React from "react";
import productData from "@/data/products.json";
import Link from "next/link";
import SingleProductCard from "./single-product-card";
import CustomCard from "@/components/ui/custom/card";

type Props = {};

const ProductList = (props: Props) => {
  return (
    <section className="grid grid-cols-5 gap-5 w-full mt-4">
      {productData.map((product, ind) => {
        return (
          <Link key={product.id} href={`/products/${product.id}`}>
            {/* <SingleProductCard product={product} key={ind} /> */}
            <CustomCard variants="blackHole" product={product} />
          </Link>
        );
      })}
    </section>
  );
};

export default ProductList;
