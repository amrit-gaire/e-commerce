import { Metadata } from "next";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Sign In | Ahegao",
  description: "Shopping platform for you baby.",
};

export default async function SignInLayout({ children }: Props) {
  return <main>{children}</main>;
}
