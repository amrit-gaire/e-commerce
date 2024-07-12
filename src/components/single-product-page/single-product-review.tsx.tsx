import React from "react";
import { TProduct } from "@/types/product";
import RatingStars from "../shared-component/rating-stars";
import { Card, CardDescription, CardTitle } from "../ui/card";

type Props = {
  reviews: TProduct;
};

const SingleProductReviews = ({ reviews }: Props) => {
  return (
    <Card className="mt-4 p-4">
      {reviews.reviews.length !== 0
        ? reviews.reviews.map((reviewer, ind) => (
            <section key={ind}>
              <section className="mt-4 p-4">
                <div className="flex gap-4">
                  <RatingStars rating={reviewer.rating} />
                  <CardTitle className="font-normal text-sm ">
                    {reviewer.username}
                  </CardTitle>
                </div>
                <CardDescription>{reviewer.message}</CardDescription>
              </section>
              <hr />
            </section>
          ))
        : "There is no review for this product."}
    </Card>
  );
};

export default SingleProductReviews;
