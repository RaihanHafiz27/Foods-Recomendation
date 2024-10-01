import { data } from "autoprefixer";
import Image from "next/image";

const dataFlow = [
  {
    id: 1,
    title: "Step 1",
    description:
      "Melakukan Login dengan Akunmu yang sudah terdaftar lalu click coba sekarang.",
    icon: "/icons/login.png",
  },
  {
    id: 2,
    title: "Step 2",
    description:
      "Memilih Waktu dan Cuaca atau biarkan Website menentukan otomatis.",
    icon: "/icons/choose.png",
  },
  {
    id: 3,
    title: "Step 3",
    description:
      "Mendapatkan rekomendasi makanan terbaik beserta informasi gizinya.",
    icon: "/icons/star.png",
  },
];

const HowSection = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center border border-red-500">
      <div className="flex flex-col justify-evenly items-center w-3/5 h-full border border-green-500">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-600">How It Works</h2>
          <p className="mt-4">
            Temukan makanan yang sempurna berdasarkan cuaca dan waktu! Mesin
            rekomendasi kami menggunakan data cuaca secara Real-time dan waktu
            saat ini untuk menyarankan makanan yang sesuai dengan lingkungan dan
            rutinitas harian Anda.
          </p>
        </div>
        <div className="flex w-full border border-blue-500">
          <div className="w-1/2 flex flex-col justify-evenly border border-yellow-500">
            {dataFlow.map((data, id) => (
              <div
                className="w-11/12 flex justify-center items-center"
                key={id}
              >
                <Image
                  src={data.icon}
                  alt={data.title}
                  width={500}
                  height={500}
                  className="w-20 h-auto"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-amber-600">
                    {data.title}
                  </h4>
                  <p>{data.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/2">
            <Image
              src="/images/how.png"
              alt="how"
              width={500}
              height={500}
              quality={100}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
