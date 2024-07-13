"use client";

import React, { useCallback } from "react";
import categoriesData from "@/data/categories.json";
import SingleCategoryItem from "./single-category-item";
import { Category } from "@/types/category";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type Props = {};

const CategoriesList = (props: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const newPath = `categories/${pathname}`;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <>
      <section className="grid grid-cols-8 gap-5 mt-4">
        {(categoriesData as Category[]).map((category) => {
          return (
            <Link
              href={
                newPath + "?" + createQueryString("category", category.name)
              }
              key={category.id}
            >
              <SingleCategoryItem category={category} />
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default CategoriesList;
