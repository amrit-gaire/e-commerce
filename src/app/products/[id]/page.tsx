import React from "react";
import productData from "@/data/products.json";
import { notFound } from "next/navigation";
import { TProduct } from "@/types/product";
import SingleProductHero from "@/components/single-product-page/single-product";
import SingleProductReviews from "@/components/ratings-and-reviews/single-product-review.tsx";
import SimilarProduct from "@/components/shared-component/similar-product";

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
      <SingleProductReviews reviews={product} />
      <SimilarProduct />
    </section>
  );
};

export default SingleProductPage;
