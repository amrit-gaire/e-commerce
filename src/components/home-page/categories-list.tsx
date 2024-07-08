import React from "react";
import categoriesData from "@/data/categories.json";

type Props = {};

const CategoriesList = (props: Props) => {
  return (
    <div>
      <section>
        {categoriesData.map((category) => {
          return (
            <div key={category.id}>
              <h3>{category.name}</h3>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default CategoriesList;
