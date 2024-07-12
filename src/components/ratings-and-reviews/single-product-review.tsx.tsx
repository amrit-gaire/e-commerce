import React from "react";
import { TProduct } from "@/types/product";
import RatingStars from "../shared-component/rating-stars";

type Props = {
  reviews: TProduct;
};

const SingleProductReviews = ({ reviews }: Props) => {
  return (
    <section className="mt-12 shadow-lg p-4">
      <h3 className="text-xl">Ratings and Reviews</h3>
      {reviews.reviews.length !== 0
        ? reviews.reviews.map((reviewer, ind) => (
            <section
              key={ind}
              className="mt-12 border-2 border-slate-200 p-4 rounded-md"
            >
              <div className="flex gap-4">
                <RatingStars rating={reviewer.rating} />
                <span>{reviewer.username}</span>
              </div>
              <section>{reviewer.message}</section>
            </section>
          ))
        : "There is no review for this product."}
    </section>
  );
};

export default SingleProductReviews;
