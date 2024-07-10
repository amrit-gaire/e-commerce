import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { FaShoppingCart } from "react-icons/fa";
import { Input } from "../ui/input";

type Props = {};

export const Navbar = (props: Props) => {
  return (
    <nav className="flex justify-between items-center bg-[#dedcff] py-4 px-2 ">
      <section className="text-2xl">Logo</section>
      <section>
        <Input />
      </section>
      <ul className="flex gap-10">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/product"}>Product</Link>
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
