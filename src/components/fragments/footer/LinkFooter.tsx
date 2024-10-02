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
    <div>
      <h3 className="font-bold">{title}</h3>
      <ul>
        {links.map((link, id) => (
          <li
            key={id}
            className="hover:text-amber-600 transition duration-500 transform hover:scale-110"
          >
            <Link href={link.url}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkFooter;
