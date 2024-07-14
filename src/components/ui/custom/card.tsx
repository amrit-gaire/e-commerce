import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../card";
import Image from "next/image";
import { TProduct } from "@/types/product";
import { getDiscountedPrice } from "@/utils/getDiscountedPrice";
import GetDiscountedInfo from "@/components/shared-component/getDiscountInfo";
import RatingStars from "@/components/shared-component/rating-stars";

type Props = {
  variants: "helloWorld" | "blackHole";
  product: TProduct;
};

const CustomCard = ({ variants, product }: Props) => {
  return (
    <>
      {variants === "helloWorld" ? (
        <HelloWorld product={product} variants={"helloWorld"} />
      ) : (
        <BlackHole product={product} variants={"blackHole"} />
      )}
    </>
  );
};

export default CustomCard;

const HelloWorld = ({ product }: Props) => {
  return (
    <Card className="h-full hover:shadow-md transition-all">
      <CardHeader className="relative w-full h-[180px]">
        <Image
          src={product.image[0]}
          alt="image"
          className="object-cover rounded-t-md"
          fill
          sizes="180px"
        />
      </CardHeader>
      <div className="px-2">
        <CardTitle className="text-base line-clamp-2">{product.name}</CardTitle>
        <RatingStars rating={product.avgRating} />
        <CardDescription>
          <span>{product.price}</span>
          <GetDiscountedInfo
            price={product.price}
            discount={product.discount}
          />
        </CardDescription>
      </div>
    </Card>
  );
};

const BlackHole = ({ product }: Props) => {
  return (
    <Card className="h-full group hover:shadow-lg transition-all">
      <CardHeader className="relative w-full h-[180px]">
        <Image
          src={product.image[0]}
          alt="image"
          className="object-cover opacity-70"
          fill
          sizes="400px"
        />
      </CardHeader>
      <div className="flex flex-col justify-between p-2">
        <CardTitle className="text-lg line-clamp-1">{product.name}</CardTitle>
        <CardDescription>
          <span className="flex">
            <RatingStars rating={product.avgRating} />({product.reviews.length})
          </span>
          <span className="text-sm flex flex-col text-black font-bold">
            Rs.{getDiscountedPrice(product.price, product.discount)}
            <GetDiscountedInfo
              price={product.price}
              discount={product.discount}
            />
          </span>
        </CardDescription>
      </div>
    </Card>
  );
};
