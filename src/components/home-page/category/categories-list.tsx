import React from "react";
import categoriesData from "@/data/categories.json";
import SingleCategoryItem from "./single-category-item";

type Props = {};

const CategoriesList = (props: Props) => {
  return (
    <div>
      <section className="grid grid-cols-6 gap-5 mt-5">
        {categoriesData.map((category) => {
          return (
            <div key={category.id}>
              <SingleCategoryItem category={category} />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default CategoriesList;
