import React from "react";

type Props = {};

const DeliveryDetails = (props: Props) => {
  return (
    <section className=" max-w-4xl mx-auto my-10 p-4 bg-white shadow-lg rounded-lg">
      <>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs">Delivery</span>
            <span className="text-blue-500 cursor-pointer">CHANGE</span>
          </div>
          <div>Bagmati, Kathmandu Metro 22 - Newroad Area, Newroad</div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold">Standard Delivery</span>
            <span>14 Jul - 15 Jul</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500 text-xs">3 - 4 day(s)</span>
            <span className="font-bold">Rs. 70</span>
          </div>
          <div>
            <span className="inline-flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Cash on Delivery Available
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Service</span>
          </div>
          <div className="">
            <span className="inline-flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h18M3 6h18m-7 8h7m-7 4h7M3 14h7m-7 4h7"
                ></path>
              </svg>
              14 days free & easy return
            </span>
            <div className="ml-5 text-xs text-gray-500">
              Change of mind is not applicable
            </div>
          </div>
          <div className="">
            <span className="inline-flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7 12l2 2 4-4"
                ></path>
              </svg>
              Warranty not available
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs">Sold by</span>
            <span className="text-blue-500 cursor-pointer">CHAT</span>
          </div>
          <div className="text-gray-500">Aafno Pasal</div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-center">
              <div>Positive Seller Ratings</div>
              <div className="text-blue-500">79%</div>
            </div>
            <div className="text-center">
              <div>Ship on Time</div>
              <div className="text-blue-500">99%</div>
            </div>
            <div className="text-center">
              <div>Chat Response Rate</div>
              <div className="text-blue-500">63%</div>
            </div>
          </div>
        </div>

        <div className="text-center text-blue-500 cursor-pointer">
          Visit Store
        </div>
      </>
    </section>
  );
};

export default DeliveryDetails;
