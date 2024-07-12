import React from "react";
import categoriesData from "@/data/categories.json";
import SingleCategoryItem from "./single-category-item";
import { Category } from "@/types/category";

type Props = {};

const CategoriesList = (props: Props) => {
  return (
    <>
      <section className="grid grid-cols-8 gap-5 mt-4">
        {(categoriesData as Category[]).map((category) => {
          return (
            <section key={category.id}>
              <SingleCategoryItem category={category} />
            </section>
          );
        })}
      </section>
    </>
  );
};

export default CategoriesList;
