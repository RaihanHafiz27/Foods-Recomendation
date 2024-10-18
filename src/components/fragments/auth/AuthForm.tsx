"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface AuthFormProps {
  isRegister: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isRegister }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="w-1/2  flex flex-col justify-evenly items-center ">
      <h2 className="text-center text-3xl font-semibold text-gray-600">
        {isRegister ? "Register" : "Login"}
      </h2>
      <div className=" w-3/5">
        <p className="text-gray-600">
          {isRegister ? "Register" : "Login"} With Email Address
        </p>
        <form action="">
          {isRegister && (
            <input
              type="text"
              placeholder="Username"
              className="border w-full border-gray-300 my-2 py-2 pl-2 rounded-md outline-none"
            />
          )}
          <input
            type="text"
            placeholder="Email"
            className="border w-full border-gray-300 my-2 py-2 pl-2 rounded-md outline-none"
          />
          <div className="relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="******"
              className="border w-full border-gray-300 my-2 py-2 pl-2 rounded-md outline-none"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-4"
            >
              {isPasswordVisible ? (
                <Image
                  src={"/icons/show.png"}
                  alt="hide"
                  width={100}
                  height={100}
                  className="w-6 h-6"
                />
              ) : (
                <Image
                  src={"/icons/hide.png"}
                  alt="hide"
                  width={100}
                  height={100}
                  className="w-6 h-6"
                />
              )}
            </button>
          </div>

          <div className="my-2 flex justify-center items-center w-full">
            <hr className="w-1/4 border border-gray-400" />
            <p className=" text-gray-600 mx-5">or continue with</p>
            <hr className="w-1/4 border border-gray-400" />
          </div>
          <div className="flex flex-col w-full">
            <button className="bg-amber-500 hover:bg-amber-600 transition duration-500 py-2 text-slate-200 my-2 rounded-md">
              {isRegister ? "Register" : "Login"}
            </button>
            {!isRegister && (
              <button className="border border-gray-300 my-2 py-2 rounded-md">
                Login with google
              </button>
            )}
          </div>
        </form>
        <p className="text-center font-semibold mt-6 text-gray-600">
          {isRegister ? "Have an account?" : "Don't have an account?"}{" "}
          <Link
            href={isRegister ? "/login" : "/register"}
            className="text-amber-500"
          >
            {isRegister ? "SignIn" : "SignUp"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
