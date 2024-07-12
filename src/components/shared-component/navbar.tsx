import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { FaShoppingCart } from "react-icons/fa";
import { Input } from "../ui/input";
import Image from "next/image";

type Props = {};

export const Navbar = (props: Props) => {
  const logo =
    "https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <nav className="flex justify-between items-center bg-[#dedcff] py-4 px-2 ">
      <section className="bg-blue-500">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo"
            width={0}
            height={0}
            className="h-10 w-10"
          />
        </Link>
      </section>
      <section>
        <Input />
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
        <Button variant={"outline"}>
          <FaShoppingCart size={20} />
        </Button>
        <Button>Login</Button>
      </section>
    </nav>
  );
};
