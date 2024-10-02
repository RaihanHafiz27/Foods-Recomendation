import Image from "next/image";

const dataTestimonial = [
  {
    id: 1,
    name: "Kanna Anissa Syifa",
    image: "/images/profile.jpg",
    jobs: "Influencer",
    description:
      "I love how Moods of Food always suggests the perfect meal for every weather! On a cold and rainy day, the recommendation of a cozy soup made my afternoon so much better. It's a mood changer!",
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
      "Moods of Food understands me better than I understand myself! I wasn't sure what to eat for dinner, but they recommended a light salad for a warm evening, and that's exactly what I needed.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center border border-red-500">
      <div className="w-3/5 border border-red-500 h-full flex flex-col justify-evenly items-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-amber-600">Testimonials</h2>
          <p className="leading-loose mt-4 w-4/5 text-center">
            At Moods of Food, we help you find the perfect meal, whether it's a
            rainy morning or a sunny afternoon. Our users love the way we
            customize food recommendations based on the weather and time of day.
            Here's what they have to say about their experience!
          </p>
        </div>
        <div className="border border-green-500 grid grid-cols-3 gap-4">
          {dataTestimonial.map((data, id) => (
            <div
              className="bg-white p-4 max-w-sm relative rounded-lg"
              style={{
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.6), 0 4px 6px -1px rgba(0, 0, 0, 0.6)",
              }}
              key={id}
            >
              <Image
                src={data.image}
                alt={data.name}
                width={500}
                height={500}
                quality={100}
                className="w-20 h-20 absolute -top-10 left-1/2 -translate-x-1/2 rounded-full object-cover"
              />
              <div className="p-2 mt-8 text-center">
                <p className="text-amber-600 font-semibold">{data.name}</p>
                <p className="text-amber-600">{data.jobs}</p>
                <hr className="my-4" />
                <blockquote className="relative my-2 text-gray-600 italic leading-relaxed">
                  <span className="text-4xl text-amber-600">“</span>
                  {data.description}
                  <span className="text-4xl text-amber-600 absolute -bottom-2">
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
