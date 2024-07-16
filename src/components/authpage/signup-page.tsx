import React from "react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import CustomInput from "../ui/custom/input";
import Image from "next/image";

type Props = {};

const SignUpPage = (props: Props) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-auto max-w-3xl mx-auto my-6">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
              <h3 className="text-2xl font-semibold">
                Register to ThemeSelection 🚀
              </h3>
              <button className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <div className="flex justify-center mb-4">
                <button
                  className="bg-blue-500 text-white active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Twitter
                </button>
                <button
                  className="bg-red-500 text-white active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Google
                </button>
                <button
                  className="bg-black text-white active:bg-gray-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  GitHub
                </button>
              </div>
              <div className="text-center mb-4">OR</div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            </div>
            <div className="flex items-center justify-center p-6 border-t border-solid border-gray-200 rounded-b">
              <button
                className="bg-indigo-500 text-white active:bg-indigo-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Sign up Now
              </button>
            </div>
            <div className="text-center p-6">
              <p>
                Already Have Account?{" "}
                <a href="#" className="text-indigo-500">
                  Sign in
                </a>
              </p>
              <p className="mt-2 text-sm">
                By Signin or Signup to ThemeSelection.com using social accounts
                or login/register form, You are agreeing to our{" "}
                <a href="#" className="text-indigo-500">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-indigo-500">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default SignUpPage;
