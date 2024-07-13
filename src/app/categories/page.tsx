"use client";

import ProductCategory from "@/components/home-page/category/category-product";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

type Props = {};

const CategoryPage = (props: Props) => {
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "";
  return (
    <>
      <ProductCategory category={category} />
    </>
  );
};

export default CategoryPage;
