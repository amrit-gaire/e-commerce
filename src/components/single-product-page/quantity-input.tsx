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

  const MIN_QUANTITY = 1;
  const MAX_QUANTITY = 5;

  const [count, setCount] = useState(
    parseInt(searchParams.get(SELECTED_QUANTITY) ?? "1")
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const inc = () => {
    if (count < MAX_QUANTITY) {
      setCount(count + 1);
      router.push(
        pathname +
          "?" +
          createQueryString(SELECTED_QUANTITY, (count + 1).toString())
      );
    }
  };

  const dec = () => {
    if (count > MIN_QUANTITY) {
      setCount(count - 1);
      router.push(
        pathname +
          "?" +
          createQueryString(SELECTED_QUANTITY, (count - 1).toString())
      );
    }
  };

  const handleQuantiyUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(
      Math.max(parseInt(e.target.value), MIN_QUANTITY),
      MAX_QUANTITY
    );
    setCount(value);
    router.push(
      pathname + "?" + createQueryString(SELECTED_QUANTITY, value.toString())
    );
  };

  return (
    <div className="flex">
      <Button variant={"outline"} onClick={dec}>
        -
      </Button>
      <input
        type="number"
        min={MIN_QUANTITY}
        max={MAX_QUANTITY}
        className="focus:outline-none px-3 py-2 w-[4ch] text-center"
        value={count}
        onChange={handleQuantiyUpdate}
      />
      <Button variant={"outline"} onClick={inc}>
        +
      </Button>
    </div>
  );
};

export default QuantityInput;
