import Image from "next/image";

const dataTestimonial = [
  {
    id: 1,
    name: "Kanna Anissa Syifa",
    image: "/images/profile.jpg",
    jobs: "Influencer",
    description:
      "I love how Mood Foods always suggests the perfect meal for every weather! On a cold and rainy day, the recommendation of a cozy soup made my afternoon so much better. It's a mood changer!",
  },
  {
    id: 2,
    name: "Olivia Martinez",
    image: "/images/profile-2.jpg",
    jobs: "Human Resource",
    description:
      "The idea of breakfast based on the time and weather is spot on! I never knew that I needed a service like this until I tried it. The app suggested a delicious bowl of oatmeal on a cold morning, and it was perfect.",
  },
  {
    id: 3,
    name: "Han So Hee",
    image: "/images/profile-3.jpg",
    jobs: "Software Developer",
    description:
      "Mood Foods understands me better than I understand myself! I wasn't sure what to eat for dinner, but they recommended a light salad for a warm evening, and that's exactly what I needed.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center border border-red-500">
      <div className="w-11/12 lg:w-3/5 border border-red-500 flex-1 flex flex-col justify-evenly items-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-amber-500">Testimonials</h2>
          <p className="text-sm 2xl:text-base leading-loose mt-4 w-4/5 text-center text-gray-800">
            At Moods of Food, we help you find the perfect meal, whether it's a
            rainy morning or a sunny afternoon. Our users love the way we
            customize food recommendations based on the weather and time of day.
            Here's what they have to say about their experience!
          </p>
        </div>
        <div className="border border-green-500 grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 lg:mt-0 2xl:gap-4">
          {dataTestimonial.map((data, id) => (
            <div
              className="bg-white p-4 my-6 lg:my-0  max-w-xs relative rounded-lg"
              key={id}
            >
              <Image
                src={data.image}
                alt={data.name}
                width={500}
                height={500}
                quality={100}
                className="w-16 h-16 2xl:w-20 2xl:h-20 absolute -top-10 left-1/2 -translate-x-1/2 rounded-full object-cover"
              />
              <div className="p-2 mt-8 text-center">
                <p className="text-amber-600 font-semibold text-sm 2xl:text-base">
                  {data.name}
                </p>
                <p className="text-amber-500 text-sm 2xl:text-base">
                  {data.jobs}
                </p>
                <hr className="my-2 2xl:my-4" />
                <blockquote className="lg:text-xs 2xl:text-base relative my-2 text-gray-600 italic leading-relaxed">
                  <span className="text-4xl text-amber-600">“</span>
                  {data.description}
                  <span className="text-4xl text-amber-600 absolute -bottom-4 2xl:-bottom-2">
                    ”
                  </span>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
