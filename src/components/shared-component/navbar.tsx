"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { FaShoppingCart } from "react-icons/fa";
import CustomInput from "../ui/custom/input";
import SignIn from "@/app/auth/signin/page";
import { signIn, signOut } from "next-auth/react";

type Props = {};

export const Navbar = (props: Props) => {
  const logo =
    "https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <nav className="flex justify-between items-center py-4 px-2">
      <figure className="rounded-lg">
        <Link href={"/"}>AHEGAO</Link>
      </figure>
      <section>
        <CustomInput />
      </section>
      <ul className="flex gap-10">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/products"}>Product</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
      <section className="flex gap-2">
        <Button variant={"outline"} asChild>
          <Link href={"/auth/signup"}>Sign Up</Link>
        </Button>
        <span className="flex items-center">|</span>
        <Button variant={"outline"} asChild>
          <Link href={"/auth/signin"}>Sign In</Link>
        </Button>
        <span className="flex items-center">|</span>
        <Button
          variant={"outline"}
          className="bg-transparent"
          onClick={() => signOut()}
        >
          signout
        </Button>
        <Button variant={"outline"} asChild>
          <Link href={"/customer/cart"}>
            <FaShoppingCart size={20} />
          </Link>
        </Button>
      </section>
    </nav>
  );
};
