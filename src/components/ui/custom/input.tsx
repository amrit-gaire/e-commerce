import React from "react";

type Props = {
  type?: string;
};

const CustomInput = ({ type }: Props) => {
  return (
    <>
      <input
        type={type}
        className="w-full h-10 focus:outline-none border-2 border-black rounded-md px-2"
      />
    </>
  );
};

export default CustomInput;
