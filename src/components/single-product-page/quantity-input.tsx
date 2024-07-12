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

  const [count, setCount] = useState(
    parseInt(searchParams.get(SELECTED_QUANTITY) ?? "1")
  );

  //doesn't recreate instead just use cache data
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const updateCount = (newCount: number) => {
    setCount(newCount);
    router.push(
      pathname + "?" + createQueryString(SELECTED_QUANTITY, newCount.toString())
    );
  };

  const handleQuantityUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(event.target.value));
    updateCount(value);
  };

  return (
    <div className="flex">
      <Button
        variant={"outline"}
        onClick={() => updateCount(Math.max(1, count - 1))}
      >
        -
      </Button>
      <input
        type="number"
        min={1}
        className="focus:outline-none px-3 py-2 w-[4ch] text-center"
        value={count}
        onChange={handleQuantityUpdate}
      />
      <Button variant={"outline"} onClick={() => updateCount(count + 1)}>
        +
      </Button>
    </div>
  );
};

export default QuantityInput;
