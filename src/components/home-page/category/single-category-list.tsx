"use client";

import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

type Props = {};

const CATEGORY = "categories";

const CategoryRedirect = (props: Props) => {
  const searchParams = useSearchParams();
  console.log(searchParams.get(CATEGORY));

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return <div>CategoryRedirect</div>;
};

export default CategoryRedirect;
