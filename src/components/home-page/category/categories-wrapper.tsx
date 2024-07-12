import React from "react";
import CategoriesList from "./categories-list";

type Props = {};

export const CategoriesWrapper = (props: Props) => {
  return (
    <div>
      <h2 className="text-2xl">Categories</h2>
      <CategoriesList />
    </div>
  );
};
