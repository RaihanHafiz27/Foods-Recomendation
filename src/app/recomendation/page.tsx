import Searchbar from "@/components/elements/search/Search";
import Select from "@/components/elements/select/Select";

const timeOptions = [
  { label: "Morning", value: "morning" },
  { label: "Noon", value: "noon" },
  { label: "Afternoon", value: "afternoon" },
  { label: "Evening", value: "evening" },
];

const weatherOptions = [
  { label: "Hot", value: "hot" },
  { label: "Clear", value: "clear" },
  { label: "rainy", value: "rainy" },
  { label: "Cold", value: "cold" },
];

const RecomendationFoodPage = () => {
  return (
    <section className="w-full h-auto flex justify-center items-center border border-red-500">
      <div className="w-full h-screen flex flex-col border border-green-400">
        <div
          className="flex flex-col justify-evenly items-center h-3/5 bg-center bg-no-repeat bg-cover border border-blue-500"
          style={{ backgroundImage: 'url("/images/bg-food.jpg")' }}
        >
          <h1 className="text-5xl font-bold text-slate-200">
            Recomendation Foods
          </h1>
          <div className="border border-pink-500 w-1/2 flex flex-col justify-center items-center">
            <Searchbar />
            <div className="flex justify-between w-2/5 items-center my-5">
              <Select
                htmlFor="weather"
                description="Select Weather"
                options={weatherOptions}
              />
              <Select
                htmlFor="time"
                description="Select Time"
                options={timeOptions}
              />
            </div>
          </div>
        </div>
        <div className="flex-grow border border-yellow-500">world</div>
      </div>
    </section>
  );
};

export default RecomendationFoodPage;
