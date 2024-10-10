import LinkPrimary from "@/components/elements/link/linkBg";
import ButtonPrimary from "../../elements/button/ButtonPrimary";

const HeroSection = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center bg-no-repeat border border-pink-600 "
      style={{
        backgroundImage: "url('images/bg-family.jpg')",
      }}
    >
      <div className="w-full h-full flex justify-center items-center border border-green-400">
        <div className="w-full lg:w-3/5 h-full flex justify-center items-center border border-red-500">
          <div className="w-full flex flex-col justify-center items-center">
            <h1
              style={{
                textShadow: "4px 8px 2px rgba(0, 0, 0, 0.5)",
              }}
              className=" flex flex-col text-center text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold text-slate-200 tracking-widest"
            >
              <span
                data-aos="zoom-in-up"
                data-aos-duration={1000}
                data-aos-delay={100}
                data-aos-once="true"
                data-aos-disable="mobile"
              >
                Welcome{" "}
              </span>{" "}
              <span
                data-aos="zoom-in-up"
                data-aos-duration={1500}
                data-aos-delay={200}
                data-aos-once="true"
              >
                to
              </span>
              <span
                className="text-amber-500"
                data-aos="zoom-in-up"
                data-aos-duration={2000}
                data-aos-delay={300}
                data-aos-once="true"
              >
                Mood Foods
              </span>
            </h1>
            <p
              className=" text-slate-200 my-4 2xl:my-8 text-sm md:text-base text-center w-4/5"
              data-aos="fade-up"
              data-aos-duration={2500}
              data-aos-delay={400}
              data-aos-once="true"
            >
              Find the perfect dish to suit your mood today. Whether you're
              feeling adventurous, nostalgic or just plain hungry, we've got
              delicious and nutritious food and drink recommendations just right
              for you!
            </p>
            <LinkPrimary text="Get Started" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
