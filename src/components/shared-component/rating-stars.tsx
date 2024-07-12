import React from "react";
import { FaRegStar, FaStar, FaRegStarHalfStroke } from "react-icons/fa6";

type Props = {
  rating: number;
};

const TOTAL_STARS_COUNT = 5;

const RatingStars = ({ rating }: Props) => {
  const fillStar = Math.floor(rating);
  const emptyStar = TOTAL_STARS_COUNT - Math.ceil(rating);
  const halfStart = TOTAL_STARS_COUNT - fillStar - emptyStar;

  return (
    <div className="flex">
      {new Array(fillStar).fill("_").map((_, ind) => (
        <FaStar key={ind} className="text-[#f97316]" />
      ))}
      {new Array(halfStart).fill("_").map((_, ind) => (
        <FaRegStarHalfStroke key={ind} className="text-[#f97316]" />
      ))}
      {new Array(emptyStar).fill("_").map((_, ind) => (
        <FaRegStar key={ind} className="text-[#f97316]" />
      ))}
    </div>
  );
};

export default RatingStars;
