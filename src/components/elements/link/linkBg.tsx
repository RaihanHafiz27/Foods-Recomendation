import Link from "next/link";

interface Props {
  text: string;
}

const LinkPrimary = (text: Props) => {
  return (
    <Link
      data-aos="fade-up"
      data-aos-duration={3000}
      data-aos-delay={500}
      href="/recomendation"
      className="bg-amber-500 hover:bg-amber-600 px-8 py-2 rounded-md text-slate-200"
    >
      {text.text}
    </Link>
  );
};

export default LinkPrimary;
