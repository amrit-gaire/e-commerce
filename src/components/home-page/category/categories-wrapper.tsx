import React, { Suspense } from "react";
import CategoriesList from "./categories-list";
import Heading from "@/components/shared-component/headings";
import LoadingSkeleton from "@/components/LoadingSkeleton";

type Props = {};

export const CategoriesWrapper = (props: Props) => {
  return (
    <section className="mt-12">
      <Heading text={"Categories"} />
      <Suspense fallback={<LoadingSkeleton />}>
        <CategoriesList />
      </Suspense>
    </section>
  );
};
