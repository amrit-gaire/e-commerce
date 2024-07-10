import { TProduct } from "@/types/product";
import Image from "next/image";
import React from "react";

type Props = {
  product: TProduct;
};

const SingleProductHero = ({ product }: Props) => {
  const primaryImage = product.image[0];
  return (
    <div className="max-w-sm mx-auto my-10 p-4 bg-white shadow-lg rounded-lg ">
      <section>
        <Image
          src={primaryImage}
          alt="M19 TWS Wireless Bluetooth"
          width={900}
          height={900}
          className="rounded-lg my-4"
        />
      </section>
      <section>
        <h1 className="text-lg font-bold">
          M19 TWS Wireless Bluetooth | Charging Time 2 Hours | Play Time 15
          Hours | Digital Indicator
        </h1>
        <div className="flex items-center my-2">
          <div className="flex items-center">
            <div className="flex">
              <span className="text-yellow-400">★ ★ ★ ★ ☆</span>
              <span className="ml-2 text-gray-500 text-sm">
                (307 Ratings | 118 Answered Questions)
              </span>
            </div>
          </div>
        </div>
        <div className="text-gray-500 text-sm mb-2">
          Brand: <span className="text-blue-500">No Brand</span>
        </div>
        <div className="text-gray-500 text-sm mb-2">
          More Audio from <span className="text-blue-500">No Brand</span>
        </div>
        <div className="text-xl text-red-600 font-bold">
          Rs. 635 <span className="text-gray-500 line-through">Rs. 2,500</span>{" "}
          <span className="text-green-600">-75%</span>
        </div>
        <div className="text-sm text-gray-500 my-2">
          Min. Spend Rs. 399 Capped at Rs. 50
        </div>
        <div className="flex items-center my-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Buy Now
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>
        <div className="text-sm text-gray-500">Only 3 items left</div>
      </section>
    </div>
  );
};

export default SingleProductHero;
