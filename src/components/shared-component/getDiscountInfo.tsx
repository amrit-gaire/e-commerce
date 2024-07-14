import React from "react";

type Props = {
  price: number;
  discount: number;
};

const GetDiscountedInfo = ({ price, discount }: Props) => {
  if (discount === 0) return null;
  return (
    <strong className="space-x-2 font-normal">
      <span className="line-through text-muted-foreground">Rs.{price}</span>
      <span className="text-black">{discount}% off</span>
    </strong>
  );
};

export default GetDiscountedInfo;
