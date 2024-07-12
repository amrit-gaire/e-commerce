import React from "react";
import productData from "@/data/products.json";
import { notFound } from "next/navigation";
import { TProduct } from "@/types/product";
import SingleProductHero from "@/components/single-product-page/single-product";
import SimilarProduct from "@/components/shared-component/similar-product";
import SingleProductReviews from "@/components/single-product-page/single-product-review.tsx";
import Heading from "@/components/shared-component/headings";

type Props = {
  params: {
    id: string;
  };
  // searchParams: {
  //     query: string;
  //     page: string;
  // }
};

const SingleProductPage = ({ params: { id } }: Props) => {
  const product = (productData as TProduct[]).find(
    (singleProduct) => singleProduct.id === id
  );

  if (product === undefined) notFound();
  return (
    <section>
      <SingleProductHero product={product} />
      <Heading text="Ratings and Reviews" />
      <SingleProductReviews reviews={product} />
      <Heading text="You may also like" />
      <SimilarProduct />
    </section>
  );
};

export default SingleProductPage;
