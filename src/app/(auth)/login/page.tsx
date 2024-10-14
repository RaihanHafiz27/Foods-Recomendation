import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="border-2 flex justify-center items-center border-pink-600 w-full h-screen">
      <div
        className=" flex h-3/5 w-3/5"
        style={{ boxShadow: "10px 10px 7px rgba(0,0,0,0.5)" }}
      >
        <div className="w-1/2 bg-white flex flex-col justify-evenly items-center">
          <h2 className="text-center text-3xl font-semibold">Login</h2>
          <div className=" w-3/5">
            <p>SignIn With Email Address</p>
            <form action="">
              <input
                type="text"
                placeholder="Email"
                className="border w-full border-gray-300 my-2 py-1 pl-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Email"
                className="border w-full border-gray-300 my-2 py-1 pl-2 rounded-md"
              />
              <p className="my-2">or continue with</p>
              <div className="flex flex-col w-full">
                <button className="bg-amber-500 py-1 text-slate-200 my-2 rounded-md">
                  Login
                </button>
                <button className="border border-gray-300 my-2 py-1 rounded-md">
                  Login with google
                </button>
              </div>
            </form>
            <p className="text-center mt-6">Don't have an account? signup</p>
          </div>
        </div>
        <div className="w-1/2 h-full relative">
          <Image
            src={"/images/sushi.jpg"}
            alt="breakfast"
            quality={100}
            layout="fill"
            objectFit="cover"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
