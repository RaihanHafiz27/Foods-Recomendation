import AuthForm from "@/components/fragments/auth/AuthForm";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="border-2 flex justify-center items-center border-pink-600 w-full h-screen">
      <div
        className=" flex h-3/5 w-3/5 rounded-l-lg rounded-r-xl bg-white"
        style={{ boxShadow: "10px 13px 7px rgba(0,0,0,0.5)" }}
      >
        <AuthForm isRegister={false} />
        {/* <div className="w-1/2  flex flex-col justify-evenly items-center ">
          <h2 className="text-center text-3xl font-semibold text-gray-600">
            Login
          </h2>
          <div className=" w-3/5">
            <p className="text-gray-600">Login With Email Address</p>
            <form action="">
              <input
                type="text"
                placeholder="Email"
                className="border w-full border-gray-300 my-2 py-2 pl-2 rounded-md outline-none"
              />
              <input
                type="text"
                placeholder="Email"
                className="border w-full border-gray-300 my-2 py-2 pl-2 rounded-md outline-none"
              />
              <div className="my-2 flex justify-center items-center w-full">
                <hr className="w-1/4 border border-gray-400" />
                <p className=" text-gray-600 mx-5">or continue with</p>
                <hr className="w-1/4 border border-gray-400" />
              </div>
              <div className="flex flex-col w-full">
                <button className="bg-amber-500 hover:bg-amber-600 transition duration-500 py-2 text-slate-200 my-2 rounded-md">
                  Login
                </button>
                <button className="border border-gray-300 my-2 py-2 rounded-md">
                  Login with google
                </button>
              </div>
            </form>
            <p className="text-center font-semibold mt-6 text-gray-600">
              Don't have an account?{" "}
              <Link href={"/register"} className="text-amber-500">
                signup
              </Link>
            </p>
          </div>
        </div> */}
        <div className="w-1/2 h-full relative">
          <Image
            src={"/images/sushi.jpg"}
            alt="breakfast"
            quality={100}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // layout="fill"
            // objectFit="cover"
            style={{ objectFit: "cover" }}
            className="w-full rounded-lg"
          />
          <div className="absolute border border-black bottom-0 right-1">
            <Image
              src="/icons/moodfoods-white.png"
              alt="logo"
              width={500}
              height={500}
              className="w-28 lg:w-40 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
