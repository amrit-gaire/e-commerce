import { TProduct } from "@/types/product";
import React from "react";
import { Card, CardContent } from "../ui/card";

type Props = {
  product: Pick<TProduct, "description">;
};

const SingleProductDescription = ({ product }: Props) => {
  return (
    <Card className="bg-white p-4">
      <CardContent>{product.description}</CardContent>
    </Card>
  );
};

export default SingleProductDescription;
