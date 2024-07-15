"use client";
import { TProduct } from "@/types/product";
import { getDiscountedPrice } from "@/utils/getDiscountedPrice";
import Image from "next/image";
import RatingStars from "../shared-component/rating-stars";
import QuantityInput from "./quantity-input";
import SingleProductDescription from "./product-description";
import DeliveryDetails from "./delivery-details";
import GetDiscountedInfo from "../shared-component/getDiscountInfo";
import { useEffect, useState } from "react";

type Props = {
  product: TProduct;
};

const SingleProductHero = ({ product }: Props) => {
  const [primaryImage, setPrimaryImage] = useState(product.image[0]);
  const discountedPrice = getDiscountedPrice(product.price, product.discount);
  useEffect(() => {
    return setPrimaryImage(product.image[0]);
  }, [product.image]);

  // const primaryImage = product.image[0];
  return (
    <>
      <section className="flex ">
        <section className="max-w-4xl mx-auto my-10 p-4 bg-white shadow-lg rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs text-pink-600 font-bold">FLASH SALE</span>
            <span className="text-xs text-gray-500">Ends in 11:24:51</span>
          </div>
          <section className="flex">
            <section className="w-1/2 p-2">
              <figure>
                <Image
                  src={primaryImage}
                  alt="M19 TWS Wireless Bluetooth"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </figure>
              <div className="flex mt-2 space-x-2">
                {product.image.map((imageUrl, ind) => (
                  <figure key={ind}>
                    <Image
                      src={imageUrl}
                      alt="M19 TWS Wireless Bluetooth"
                      width={80}
                      height={80}
                      className="rounded-lg"
                      onMouseOver={() => {
                        setPrimaryImage(product.image[ind]);
                      }}
                    />
                  </figure>
                ))}
              </div>
            </section>
            <div className="w-1/2 p-2">
              <h1 className="text-lg font-bold">{product.description}</h1>
              <div className="flex items-center my-2">
                <div className="flex items-center">
                  {/* <span className="text-yellow-400">★ ★ ★ ★ ☆</span> */}
                  <span className="ml-2 text-gray-500 text-sm">
                    (307 Ratings | 118 Answered Questions)
                    <div>
                      <RatingStars rating={product.avgRating} />
                    </div>
                  </span>
                </div>
              </div>
              <div className="flex gap-1">
                <div className="text-gray-500 text-sm mb-2">
                  Brand: <span className="text-blue-500">No Brand</span>
                </div>
                <span className="text-gray-500 text-sm">|</span>
                <div className="text-gray-500 text-sm mb-2">
                  More Audio from{" "}
                  <span className="text-blue-500">No Brand</span>
                </div>
              </div>
              <GetDiscountedInfo
                price={product.price}
                discount={product.discount}
              />
              <div className="text-sm text-gray-500 my-2 flex gap-4">
                <span>Promotions</span>
                <span className="bg-[#f97316] text-white px-1">
                  Min. Spend Rs. 399 Capped at Rs. 50
                </span>
              </div>
              <div>
                <span>Quantity</span>
                <QuantityInput />
              </div>
              <div className="flex items-center my-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                  Buy Now
                </button>
                <button className="bg-orange-500 text-white px-4 py-2 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </section>
        </section>
        <DeliveryDetails />
      </section>
      <section>
        <SingleProductDescription product={product} />
      </section>
    </>
  );
};

export default SingleProductHero;
