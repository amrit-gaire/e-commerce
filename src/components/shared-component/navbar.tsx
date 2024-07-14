import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { FaShoppingCart } from "react-icons/fa";

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
        <input className="w-[400px] h-8 focus:outline-none border-2 border-black rounded-md px-2" />
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
        <Button variant={"outline"}>Login</Button>
        <span className="flex items-center">|</span>
        <Button variant={"outline"}>SignUp</Button>
        <Link href={"/customer/cart"}>
          <Button variant={"outline"}>
            <FaShoppingCart size={20} />
          </Button>
        </Link>
      </section>
    </nav>
  );
};
