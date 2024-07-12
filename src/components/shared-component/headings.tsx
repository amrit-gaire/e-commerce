import React from "react";

type Props = {
  text: string;
};

const Heading = ({ text }: Props) => {
  return <h1 className="text-xl font-medium mt-12">{text}</h1>;
};

export default Heading;
