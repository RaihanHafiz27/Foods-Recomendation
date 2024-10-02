import Image from "next/image";

const dataFlow = [
  {
    id: 1,
    title: "Step 1",
    description: "Login with your registered account and click try now.",
    icon: "/icons/login.png",
  },
  {
    id: 2,
    title: "Step 2",
    description:
      "Choose Time and Weather or let the Website determine automatically.",
    icon: "/icons/choose.png",
  },
  {
    id: 3,
    title: "Step 3",
    description:
      "Get the best food recommendations along with nutritional information.",
    icon: "/icons/star.png",
  },
];

const HowSection = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center border border-red-500">
      <div className="flex flex-col justify-evenly items-center w-3/5 h-full border border-green-500">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-amber-600">How It Works</h2>
          <p className="leading-loose mt-4 w-4/5 text-center">
            Find the perfect meal based on the weather and time of day! Our
            recommendation engine uses Real-time weather data and the current
            time of day to suggest meals that suit your environment and daily
            routine.
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
