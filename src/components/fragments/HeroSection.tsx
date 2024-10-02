import ButtonPrimary from "../elements/button/ButtonPrimary";

const HeroSection = () => {
  return (
    <section
      className=" w-full h-screen bg-cover bg-center bg-no-repeat border border-pink-600"
      style={{ backgroundImage: "url('images/bg-food.jpg')" }}
    >
      <div className="w-full h-full flex justify-center items-center border border-green-400">
        <div className="w-3/5 h-full flex  justify-center items-center border border-red-500">
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className=" flex flex-col text-center text-8xl font-bold text-slate-200 tracking-widest">
              <span>Welcome </span> <span>to</span>
              <span className="text-amber-500">Moods of Food</span>
            </h1>
            <p className=" text-slate-200 my-4 text-center w-4/5">
              Find the perfect dish to suit your mood today. Whether you're
              feeling adventurous, nostalgic or just plain hungry, we've got
              delicious and nutritious food and drink recommendations just right
              for you!
            </p>
            <ButtonPrimary text="Try now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
