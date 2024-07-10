import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TProduct } from "@/types/product";
import { getDiscountedPrice } from "@/utils/getDiscountedPrice";
import Image from "next/image";
import React from "react";

type Props = {
  product: TProduct;
};

const SingleProductCard = ({ product }: Props) => {
  const discountedPrice = getDiscountedPrice(product.price, product.discount);
  return (
    <>
      <Card
        className="w-fit h-fit px-4 border border-slate-400 mb-2 hover:shadow-lg transition-all"
        title={product.name}
      >
        <CardHeader className="">
          <Image
            src={product.image[0]}
            alt={product.name}
            width={200}
            height={100}
            className="w-full object-cover max-h-36"
          />
        </CardHeader>
        <CardTitle className="text-left pl-5">{product.name}</CardTitle>
        <CardTitle className="sr-only">{product.name}</CardTitle>
        <CardContent className="sr-only">{product.description}</CardContent>
        <CardContent className="gap-4">
          <p className="text-muted-foreground text-left">
            Rs.{discountedPrice}
          </p>
          <div className="flex gap-4">
            <p className="line-through">Rs.{product.price}</p>
            <p>{product.discount}%</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default SingleProductCard;
