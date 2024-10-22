import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative border-2 flex flex-col justify-center items-center border-pink-600 w-full h-screen">
      {/* logo for mobile */}
      <div className="lg:hidden absolute top-0 left-0 p-2">
        <Image
          src="/icons/moodfoods.png"
          alt="logo"
          width={500}
          height={500}
          className="w-28 lg:w-40 h-auto"
        />
      </div>
      <div
        className=" flex w-11/12 h-3/4 md:w-3/4 md:h-3/5 lg:h-3/4 2xl:h-3/5 2xl:w-3/5 rounded-l-lg rounded-r-xl bg-white"
        style={{ boxShadow: "10px 13px 7px rgba(0,0,0,0.5)" }}
      >
        {children}
        {/* <AuthForm isRegister={true} /> */}
        <div className="w-1/2 h-full relative hidden lg:block">
          <Image
            src={"/images/sushi.jpg"}
            alt="breakfast"
            quality={100}
            fill
            priority
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

export default AuthLayout;
