"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Foods", link: "/recomendation" },
  { id: 3, title: "Blog", link: "/blog" },
  { id: 4, title: "About", link: "/about" },
  { id: 5, title: "Services", link: "/services" },
];

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data: session, status }: { data: any; status: string } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full p-2 z-50 bg-transparent border border-pink-500 fixed transition-all duration-300 ${
        scrollY > 0 ? "backdrop-blur-md" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between border border-white">
        <div className="flex-shrink-0 border border-red-600">
          <Image
            src="/icons/moodfoods-white.png"
            alt="logo"
            width={500}
            height={500}
            className="w-28 lg:w-40 h-auto"
          />
        </div>
        <div className="hidden flex-grow lg:flex justify-center items-center border border-yellow-400">
          <ul className="flex">
            {navLinks.map((item, id) => (
              <li key={id} className="mx-4">
                <Link
                  href={item.link}
                  className={`transition duration-500 hover:text-amber-500 ${
                    pathname === item.link
                      ? "text-amber-500 font-semibold underline underline-offset-8 decoration-2"
                      : "text-slate-200"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* button for large screen */}
        <div className="hidden flex-shrink-0 lg:flex justify-center items-center border border-green-500">
          {status === "authenticated" ? (
            <button
              className="relative inline-flex items-center justify-center px-8 py-2 overflow-hidden text-sm font-medium tracking-tighter text-white rounded-lg group"
              onClick={() => signOut()}
            >
              <span className="absolute w-0 h-0 transition-all duration-1000 ease-out bg-amber-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
              <span className="relative">Logout</span>
            </button>
          ) : (
            <button
              className="relative inline-flex items-center justify-center px-8 py-2 overflow-hidden text-sm font-medium tracking-tighter text-white rounded-lg group"
              onClick={() => signIn()}
            >
              <span className="absolute w-0 h-0 transition-all duration-1000 ease-out bg-amber-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
              <span className="relative">Login</span>
            </button>
          )}
        </div>
        {/* Button for Mobile Screen */}
        <div className="flex lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="relative group">
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all bg-amber-600 duration-200">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div
                  className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                    isOpen ? "translate-x-10" : ""
                  }`}
                ></div>
                <div
                  className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${
                    isOpen ? "translate-x-10 delay-75" : ""
                  }`}
                ></div>
                <div
                  className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                    isOpen ? "translate-x-10 delay-150" : ""
                  }`}
                ></div>

                {/* Ikon Silang Saat Sidebar Terbuka */}
                <div
                  className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0 ${
                    isOpen ? "translate-x-0 w-12" : ""
                  }`}
                >
                  <div
                    className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 ${
                      isOpen ? "rotate-45 delay-300" : "rotate-0"
                    }`}
                  ></div>
                  <div
                    className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 ${
                      isOpen ? "-rotate-45 delay-300" : "-rotate-0"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </button>
        </div>
        {/* Sidebar menu for mobile */}
        <div
          className={`bg-gray-900 w-64 fixed h-screen z-40 top-0 right-0 transition-transform transform delay-100 duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-center p-2 border border-pink-500">
                <Image
                  src="/images/user.png"
                  alt="logo"
                  width={500}
                  height={500}
                  className="w-10 h-auto rounded-full"
                />
                {status === "authenticated" && (
                  <p className="text-slate-200">{session?.user?.fullname}</p>
                )}
                {/* <p className="text-sm text-slate-200">Kanna Anissa Syifa</p> */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white"
                >
                  <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all bg-amber-600 duration-200">
                    <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                      <div
                        className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                          isOpen ? "translate-x-10" : ""
                        }`}
                      ></div>
                      <div
                        className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${
                          isOpen ? "translate-x-10 delay-75" : ""
                        }`}
                      ></div>
                      <div
                        className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                          isOpen ? "translate-x-10 delay-150" : ""
                        }`}
                      ></div>
                      <div
                        className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0 ${
                          isOpen ? "translate-x-0 w-12" : ""
                        }`}
                      >
                        <div
                          className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 ${
                            isOpen ? "rotate-45 delay-300" : "rotate-0"
                          }`}
                        ></div>
                        <div
                          className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 ${
                            isOpen ? "-rotate-45 delay-300" : "-rotate-0"
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="border border-white">
                <hr className="my-2" />
                <ul className="flex flex-col justify-center items-center">
                  {navLinks.map((item, id) => (
                    <li key={id} className="my-2">
                      <Link
                        onClick={() => setIsOpen(!isOpen)}
                        href={item.link}
                        className={
                          pathname === item.link
                            ? "text-amber-500"
                            : "text-slate-200 transform hover:text-amber-600 duration-300"
                        }
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-2 border border-pink-500 w-full">
              {status === "authenticated" ? (
                <button
                  onClick={() => signOut()}
                  className="text-white bg-amber-500 hover:bg-amber-600 w-full py-2 rounded-lg"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => signIn()}
                  className="text-white bg-amber-500 hover:bg-amber-600  w-full py-2 rounded-lg"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
