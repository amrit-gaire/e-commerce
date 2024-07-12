import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex justify-between py-10 px-5 bg-slate-200">
      <section>
        <h2>Customer Care</h2>
      </section>
      <section>
        <h2>Shopify</h2>
      </section>
      <section>Follow</section>
    </footer>
  );
};

export default Footer;
