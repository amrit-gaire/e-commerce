import RatingStars from "@/components/shared-component/rating-stars";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TProduct } from "@/types/product";
import { getDiscountedPrice } from "@/utils/getDiscountedPrice";
import Image from "next/image";
import React from "react";

type Props = {
  product: TProduct;
};

const SingleProductCard = ({ product }: Props) => {
  const discountedPrice = getDiscountedPrice(product.price, product.discount);

  const renderDiscountInfo = () => {
    if (product.discount === 0) return null;
    return (
      <>
        <p className="line-through text-muted-foreground">Rs.{product.price}</p>
        <p>{product.discount}% off</p>
      </>
    );
  };

  return (
    <Card
      className="h-full w-full hover:shadow-lg transition-all rounded-sm"
      title={product.name}
    >
      <CardHeader className="relative w-full h-[160px]">
        <Image
          src={product.image[0]}
          alt={product.name}
          className="object-cover rounded-t-sm"
          fill
        />
      </CardHeader>
      <CardContent>
        <div className="pl-1">
          <h1 className="text-lg font-medium line-clamp-2">{product.name}</h1>
          <RatingStars rating={product.avgRating} />
          <div className="flex gap-4 text-sm font-normal">
            <span>Rs.{discountedPrice}</span>
            {renderDiscountInfo()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SingleProductCard;
