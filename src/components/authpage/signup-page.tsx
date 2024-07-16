import React from "react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import CustomInput from "../ui/custom/input";
import Image from "next/image";

type Props = {};

const SignUpPage = (props: Props) => {
  return (
    <section className="w-full h-screen">
      <Card>
        <CardHeader>AHEGAO</CardHeader>
        <CardTitle>Welcome to Ahegao! 👋🏻</CardTitle>
        <CardTitle className="text-sm font-text-base text-slate-500">
          Please sign-in to your account and start the adventure
        </CardTitle>
        <CustomInput />
        <CustomInput type="password" />
      </Card>
    </section>
  );
};

export default SignUpPage;
