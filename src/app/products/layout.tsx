import { Metadata } from "next";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Ahegao",
  description: "Shopping platform for you baby.",
};

const ProductsLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default ProductsLayout;
