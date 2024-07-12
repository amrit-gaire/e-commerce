import React from "react";
import CategoriesList from "./categories-list";
import Heading from "@/components/shared-component/headings";

type Props = {};

export const CategoriesWrapper = (props: Props) => {
  return (
    <section className="mt-12">
      <Heading text={"Categories"} />
      <CategoriesList />
    </section>
  );
};
