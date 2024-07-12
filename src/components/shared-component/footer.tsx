import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex justify-between py-10 px-5 mt-12">
      <section className="">
        <h2 className="font-medium text-xl">Customer Care</h2>
        <div className="flex flex-col mt-2 text-sm">
          <Link href={"/"}>Help Center</Link>
          <Link href={"/"}>Returns and Refunds</Link>
          <Link href={"/"}>Contact Us</Link>
        </div>
      </section>
      <section>
        <h2 className="font-medium text-xl">Shopify</h2>
        <ul className="mt-2">
          <li>About</li>
          <li>Careers</li>
          <li>Shopify Blog</li>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </section>
      <section>
        <h2 className="font-medium text-xl">Payment Methods</h2>
        <ul className="mt-2">
          <li>Esewa</li>
          <li>Khalti</li>
          <li>Paypal</li>
        </ul>
      </section>
      <section>
        <h2 className="font-medium text-xl">Follow</h2>
        <div className="flex gap-4 mt-2 text-sm">
          <a href="https://www.instagram.com/">
            <CiInstagram size={30} />
          </a>
          <a href="https://www.facebook.com/">
            <CiFacebook size={30} />
          </a>
          <a href="https://www.linkedin.com/">
            <CiLinkedin size={30} />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
