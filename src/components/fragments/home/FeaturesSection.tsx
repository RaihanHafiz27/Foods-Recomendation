import Image from "next/image";

const dataFeatures = [
  {
    id: 1,
    title: "Nutrition information",
    description:
      "Display information about nutrition that suits your needs precisely and accurately",
    icon: "/icons/list.png",
  },
  {
    id: 2,
    title: "Times",
    description:
      "Find a variety of food and beverages that are suitable as recommendations with the time in your area.",
    icon: "/icons/time.png",
  },
  {
    id: 3,
    title: "Weather",
    description:
      "Find a variety of food and beverages that are suitable as recommendations for the weather in your area.",
    icon: "/icons/weather.png",
  },
];

const FeaturesSection = () => {
  return (
    <section
      className="w-full flex flex-col justify-center items-center h-auto py-20 border border-pink-500"
      style={{ backgroundColor: "#5F3B22" }}
    >
      <h1 className="text-3xl font-semibold text-amber-500 mb-10">Features</h1>
      <div className="w-full lg:w-3/5 place-items-center border border-red-500 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {dataFeatures.map((data, id) => (
          <div
            className="max-w-xs flex justify-center items-center flex-col"
            key={id}
          >
            <Image
              src={data.icon}
              alt={data.title}
              width={500}
              height={500}
              className="w-16 2xl:w-20 h-auto"
            />
            <p className="text-center text-lg 2xl:text-xl font-semibold text-amber-500 my-4">
              {data.title}
            </p>
            <p className="text-xs 2xl:text-base text-center leading-loose text-slate-200">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
