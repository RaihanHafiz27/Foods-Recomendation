import Image from "next/image";

const dataTestimonial = [
  {
    id: 1,
    name: "Kanna Anissa Syifa",
    image: "/images/profile.jpg",
    jobs: "Influencer",
    description:
      "Saya suka bagaimana Moods of Food selalu menyarankan makanan yang sempurna untuk setiap cuaca! Di hari yang dingin dan hujan, rekomendasi sup yang nyaman membuat sore saya jauh lebih baik. Ini adalah pengubah suasana!",
  },
  {
    id: 2,
    name: "Olivia Martinez",
    image: "/images/profile-2.jpg",
    jobs: "Human Resource",
    description:
      "Ide sarapan berdasarkan waktu dan cuaca sangat tepat! Saya tidak pernah tahu bahwa saya membutuhkan layanan seperti ini sampai saya mencobanya. Aplikasi ini menyarankan semangkuk oatmeal yang lezat di pagi hari yang dingin, dan itu sempurna.",
  },
  {
    id: 3,
    name: "Han So Hee",
    image: "/images/profile-3.jpg",
    jobs: "Software Developer",
    description:
      "Moods of Food memahami saya lebih baik daripada saya sendiri! Saya tidak yakin harus makan apa untuk makan malam, tapi mereka merekomendasikan salad ringan untuk malam yang hangat, dan itulah yang saya butuhkan.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center border border-red-500">
      <div className="w-3/5 border border-red-500 h-full flex flex-col justify-evenly items-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-600">Testimonials</h2>
          <p className="leading-loose">
            Di Moods of Food, kami membantu Anda menemukan makanan yang
            sempurna, baik di pagi hari yang hujan atau sore hari yang cerah.
            Pengguna kami menyukai cara kami menyesuaikan rekomendasi makanan
            berdasarkan cuaca dan waktu. Inilah yang mereka katakan tentang
            pengalaman mereka!
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
                <blockquote className="relative mt-2 text-gray-600 italic leading-relaxed">
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
