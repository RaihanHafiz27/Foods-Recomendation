import Image from "next/image";

const dataFeatures = [
  {
    id: 1,
    title: "Informasi Gizi",
    description:
      "Menampilkan informasi tentang gizi yang sesuai kebutuhanmu dengan tepat dan akurat",
    icon: "/icons/list.png",
  },
  {
    id: 2,
    title: "Waktu",
    description:
      "Menemukan rekomendasi makanan dan minuman yang sesuai dengan waktu yang ada di daerahmu",
    icon: "/icons/time.png",
  },
  {
    id: 3,
    title: "Cuaca",
    description:
      "Menemukan rekomendasi makanan dan minuman yang sesuai dengan cuaca yang ada di daerahmu",
    icon: "/icons/weather.png",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center h-auto py-20 border border-pink-500">
      <h1 className="text-3xl font-semibold text-amber-600 mb-10">
        Fitur Utama
      </h1>
      <div className="w-3/5 border border-red-500 grid grid-cols-3 gap-4">
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
              className="w-20 h-auto"
            />
            <p className="text-center text-xl font-semibold text-amber-600 my-4">
              {data.title}
            </p>
            <p className="text-center leading-loose">{data.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
