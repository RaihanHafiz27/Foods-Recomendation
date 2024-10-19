"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface AuthFormProps {
  isRegister: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isRegister }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    if (isRegister) {
      try {
        const response = await fetch("api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fullname: fullName, email, password }),
        });

        if (response.status === 200) {
          e.target.reset();
          setIsLoading(false);
          setSuccess(true);
          push("/login");
        } else {
          setError("Email already exists");
          setIsLoading(false);
        }
      } catch (err) {
        setError("An unexpected error occurred. Please try again.");
      }
    } else {
      try {
        const res = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });
        if (res?.error) {
          setError("Invalid email or password");
          setIsLoading(false);
        } else {
          e.target.reset();
          setIsLoading(false);
          setError("");
          setSuccess(true);
          push("/");
        }
      } catch (err) {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  const displaytext = () => {
    if (isLoading) {
      return "Loading...";
    }
    return isRegister ? "Register" : "Login";
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
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <input
              id="fullname"
              name="fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Fullname"
              required
              className="border w-full border-gray-300 my-2 py-2 pl-2 rounded-md outline-none"
            />
          )}
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="border w-full border-gray-300 my-2 py-2 pl-2 rounded-md outline-none"
          />
          <div className="relative">
            <input
              id="password"
              name="password"
              value={password}
              type={isPasswordVisible ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
              required
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
            <button
              disabled={isLoading}
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 transition duration-500 py-2 text-slate-200 my-2 rounded-md"
            >
              {displaytext()}
              {/* {isRegister ? "Register" : "Login"} */}
            </button>
            {!isRegister && (
              <button className="border border-gray-300 my-2 py-2 rounded-md">
                Login with google
              </button>
            )}
          </div>
        </form>
        {error && <p className="text-center mt-4 text-red-500">{error}</p>}
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
