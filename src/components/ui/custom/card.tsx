import React from "react";
import { Card, CardContent, CardHeader } from "../card";
import Image from "next/image";

type Props = {
  variants: "helloWorld" | "blackHole";
};

const CustomCard = ({ variants }: Props) => {
  {
    variants === "helloWorld" ? <HelloWorld /> : <BlackHole />;
  }
  return (
    <Card>
      <CardHeader>
        <Image src={""} alt="" className="object-cover rounded-t-md" fill />
      </CardHeader>
      <CardContent>Hello</CardContent>
    </Card>
  );
};

export default CustomCard;

const HelloWorld = () => {
  return <section>HelloWorld</section>;
};

const BlackHole = () => {
  return <section>BlackHole</section>;
};
