import Link from "next/link";
import React from "react";

// definisi tipe untuk props
type LinkItem = {
  text: string;
  url: string;
};

type LinkFooterProps = {
  title: string;
  links: LinkItem[];
};

const LinkFooter: React.FC<LinkFooterProps> = ({ title, links }) => {
  return (
    <div className="text-slate-200 text-sm 2xl:text-base ">
      <h3 className="font-bold">{title}</h3>
      <ul>
        {links.map((link, id) => (
          <li
            key={id}
            className="my-2 hover:text-amber-500 transition duration-500 transform hover:scale-110"
          >
            <Link href={link.url}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkFooter;
