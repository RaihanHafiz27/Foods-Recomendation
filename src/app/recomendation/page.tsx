"use client";

import Searchbar from "@/components/elements/search/Search";
import Select from "@/components/elements/select/Select";
import { WeatherData } from "@/types/weatherTypes";
import { data } from "autoprefixer";
import { log } from "console";
import Image from "next/image";
import { useEffect, useState } from "react";

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
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // meminta izin lokasi
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const apiKey = "2b0b30b7b7694948ab671942241010";
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=yes`;

        // mengambil data cuaca berdasarkan kordinat
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Gagal meminta data cuaca");
            }
            return response.json();
          })
          .then((data) => {
            setWeather(data);
          })
          .catch((error) => {
            setError(error.message);
            console.log(error);
          });
      },
      (error) => {
        console.log("Error getting geolocation:", error);
        setError("Tidak dapat mengambil lokasi.");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);

  console.log(weather);

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
          {weather && (
            <>
              <p className="text-slate-200">{weather.location.region}</p>
              <p className="text-slate-200">
                Sepertinya hari ini{" "}
                {weather.current.condition.text.toLowerCase()} di{" "}
                {weather.location.name}. Suhu saat ini adalah{" "}
                {weather.current.temp_c}°C.
              </p>
            </>
          )}
        </div>
        <div className="flex-grow border border-yellow-500">world</div>
      </div>
    </section>
  );
};

export default RecomendationFoodPage;

// <div className="border border-pink-500 w-1/2 flex flex-col justify-center items-center">
// <Searchbar />
// <div className="flex justify-between w-2/5 items-center my-5">
//   <Select
//     htmlFor="weather"
//     description="Select Weather"
//     options={weatherOptions}
//   />
//   <Select
//     htmlFor="time"
//     description="Select Time"
//     options={timeOptions}
//   />
// </div>
// </div>
