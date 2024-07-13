import React from "react";

type Props = {
  price: number;
  discount: number;
};

const GetDiscountedInfo = ({ price, discount }: Props) => {
  if (discount === 0) return null;
  return (
    <div className="flex gap-3">
      <span className="line-through text-muted-foreground">Rs.{price}</span>
      <span className="text-black">{discount}% off</span>
    </div>
  );
};

export default GetDiscountedInfo;
