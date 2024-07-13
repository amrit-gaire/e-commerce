"use client";
import React, { useEffect } from "react";
import productData from "@/data/products.json";

type Props = {
  category: string;
};

const ProductCategory = ({ category }: Props) => {
  console.log(category);
  const filteredData = productData.filter(
    (product) => product.category.name.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="flex">
      {filteredData.length > 0 ? (
        filteredData.map((product) => (
          <div key={product.id} className="mb-4">
            <h3 className="p-5 bg-slate-300">{product.name}</h3>
          </div>
        ))
      ) : (
        <p>No products found for this category.</p>
      )}
    </div>
  );
};

export default ProductCategory;
