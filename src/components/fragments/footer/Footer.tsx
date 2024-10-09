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
    text: "Terms of Service",
    url: "/terms",
  },
  {
    id: 2,
    text: "Privacy Policy",
    url: "/privacy",
  },
  {
    id: 3,
    text: "FAQ",
    url: "/faq",
  },
];

const Footer = () => {
  return (
    <footer
      className="w-full h-auto flex flex-col justify-center items-center border border-red-500 "
      style={{ backgroundColor: "#5F3B22" }}
    >
      <div className=" w-11/12 lg:w-3/5 border border-pink-400 flex flex-col justify-center items-center my-5">
        <div className="w-full border border-yellow-500 flex flex-col md:flex-row ">
          <div className="flex flex-col text-center border border-white w-full lg:w-1/2">
            <div className="w-full flex justify-center items-center">
              <Image
                src="/icons/moodfoods-white.png"
                alt="logo"
                width={500}
                height={500}
                className="w-1/2 h-auto"
              />
            </div>
            <p className="text-sm 2xl:text-base my-4 text-slate-200">
              Moods of Food is the best personalized food recommendation service
              site based on weather and time of day.
            </p>
            <p className="text-sm 2xl:text-base font-semibold text-slate-200">
              muhammadraihan86185@gmail.com | github : RaihanHafiz27
            </p>
          </div>
          <div className="border flex justify-center lg:justify-end items-center border-green-400 w-full my-4 lg:my-0 lg:w-1/2">
            <div className="flex flex-col justify-between h-full border border-black w-full lg:w-11/12">
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
                          className="w-12 2xl:w-14 h-auto"
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
        <p className="text-slate-200 text-sm 2xl:text-base text-center">
          © 2024 Moods of Food. Unauthorized duplication is a violation of
          applicable laws.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
