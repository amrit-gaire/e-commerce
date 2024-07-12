"use client";

import React, { useCallback, useState } from "react";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {};

export const SELECTED_QUANTITY = "quantity";

const QuantityInput = (props: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  //   console.log(searchParams.get(SELECTED_QUANTITY));

  //doesn't recreate instead just use cache data
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleQuantityUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    router.push(
      pathname + "?" + createQueryString(SELECTED_QUANTITY, event.target.value)
    );
  };

  return (
    <>
      <div className="flex">
        <Button variant={"outline"}>-</Button>
        <input
          type="number"
          min={1}
          max={5}
          step={1}
          className="focus:outline-none px-3 py-2 w-[4ch] text-center"
          value={searchParams.get(SELECTED_QUANTITY) ?? 1} //null collision operator
          onChange={handleQuantityUpdate}
        />
        <Button variant={"outline"}>+</Button>
      </div>
    </>
  );
};

export default QuantityInput;
