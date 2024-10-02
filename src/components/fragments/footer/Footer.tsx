import Image from "next/image";
import Link from "next/link";
import LinkFooter from "./LinkFooter";

const dataContact = [
  {
    id: 1,
    title: "Linkedin",
    icon: "/icons/linkedin.png",
    link: "https://www.linkedin.com/in/raihan-hafiz-8b668a1b3/",
  },
  {
    id: 2,
    title: "Github",
    icon: "/icons/github.png",
    link: "https://github.com/RaihanHafiz27",
  },
  {
    id: 3,
    title: "Instagram",
    icon: "/icons/instagram.png",
    link: "https://www.instagram.com/raihan_hafiz/",
  },
  {
    id: 4,
    title: "Facebook",
    icon: "/icons/facebook.png",
    link: "https://www.facebook.com/RaihanHafiz27",
  },
  {
    id: 5,
    title: "Tiktok",
    icon: "/icons/tiktok.png",
    link: "https://www.tiktok.com/RaihanHafiz27",
  },
];

const dataCompany = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "Foods",
    url: "/recomendation",
  },
  {
    id: 3,
    text: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    text: "About us",
    url: "/about",
  },
];

const dataServices = [
  {
    id: 1,
    text: "FAQ",
    url: "/faq",
  },
  {
    id: 2,
    text: "Privacy Policy",
    url: "/privacy",
  },
  {
    id: 3,
    text: "Terms of Service",
    url: "/terms",
  },
];

const Footer = () => {
  return (
    <footer
      className="w-full h-auto flex flex-col justify-center items-center border border-red-500 "
      style={{ backgroundColor: "#d9b382" }}
    >
      <div className=" w-3/5 flex flex-col justify-center items-center my-5">
        <div className="w-full border border-black flex mt-10">
          <div className="flex flex-col  border border-white w-1/2">
            <div className="w-full flex justify-center items-center">
              <Image
                src="/icons/logo-black.png"
                alt="logo"
                width={500}
                height={500}
                className="w-1/2 h-auto"
              />
            </div>
            <p className="my-4">
              Moods of Food is the best personalized food recommendation service
              site based on weather and time of day.
            </p>
            <p className="font-semibold">
              muhammadraihan86185@gmail.com | github : RaihanHafiz27
            </p>
          </div>
          <div className="border flex justify-end items-center border-green-400 w-1/2">
            <div className="flex flex-col justify-between h-full border border-black w-11/12">
              <div className="flex justify-evenly">
                <LinkFooter title="Company" links={dataCompany} />
                <LinkFooter title="Services" links={dataServices} />
              </div>
              <div className="border border-blue-500">
                <ul className="flex justify-center">
                  {dataContact.map((data, id) => (
                    <li
                      key={id}
                      className="mx-2 filter grayscale hover:grayscale-0 transition duration-500 ease-in-out hover:-translate-x-2 hover:-translate-y-2"
                    >
                      <Link href={data.link}>
                        <Image
                          src={data.icon}
                          alt={data.title}
                          width={100}
                          height={100}
                          className="w-14 h-auto"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full border-t border-slate-200 my-4" />
        <p className="">
          © 2024 Moods of Food. Unauthorized duplication is a violation of
          applicable laws.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
