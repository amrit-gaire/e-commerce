import { TProduct } from "@/types/product";
import React from "react";

type Props = {
  product: Pick<TProduct, "description">;
};

const SingleProductDescription = ({ product }: Props) => {
  return (
    <div className="bg-white">
      <p>{product.description}</p>
    </div>
  );
};

export default SingleProductDescription;
