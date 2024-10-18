import AuthForm from "@/components/fragments/auth/AuthForm";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="border-2 flex justify-center items-center border-pink-600 w-full h-screen">
      <div
        className=" flex h-3/5 w-3/5 rounded-l-lg rounded-r-xl bg-white"
        style={{ boxShadow: "10px 13px 7px rgba(0,0,0,0.5)" }}
      >
        <AuthForm isRegister={true} />
        <div className="w-1/2 h-full relative">
          <Image
            src={"/images/sushi.jpg"}
            alt="breakfast"
            quality={100}
            layout="fill"
            objectFit="cover"
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

export default RegisterPage;
