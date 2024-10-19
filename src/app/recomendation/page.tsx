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
  { label: "Cloud", value: "cloud" },
  { label: "rainy", value: "rainy" },
  { label: "Cold", value: "cold" },
];

const RecomendationFoodPage = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [cloud, setCloud] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    // meminta izin lokasi
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=yes`;

        // mengambil data cuaca berdasarkan kordinat
        fetch(url)
          .then((response) => {
            console.log(response);
            if (!response.ok) {
              throw new Error("Gagal meminta data cuaca");
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            console.log(data.location.name);
            if (data.current.temp_c >= 25) {
              setCloud("/icons/sunny.png");
              setStatus(
                "The sun is out today, and your body needs some refreshment! Try fresh foods that keep you cool and energized."
              );
            } else if (data.current.temp_c >= 20 && data.current.temp_c < 25) {
              setCloud("/icons/cloudy.png");
              setStatus(
                "Clouds are appearing in the sky, but not to worry, savory and filling food is ready to accompany your day."
              );
            } else if (data.current.temp_c >= 15 && data.current.temp_c < 20) {
              setCloud("/icons/rainy.png");
              setStatus(
                "The raindrops bring a cozy atmosphere. It's time to indulge in warm and soupy food, like a hug in a bowl of soup."
              );
            } else {
              setCloud("/icons/snow.png");
              setStatus(
                "Brrrr! The cold air is calling us to eat warm soupy dishes that can chase the cold away from our bodies."
              );
            }
            console.log(data.location.region);
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

  return (
    <section className="w-full h-auto flex justify-center items-center border border-red-500">
      <div className="w-full h-screen flex flex-col justify-center items-center border border-green-400">
        <div
          className="w-full flex flex-col justify-end items-center h-3/5 bg-center bg-no-repeat bg-cover border border-blue-500"
          style={{ backgroundImage: 'url("/images/bg-food.jpg")' }}
        >
          <div className="border border-white w-1/2 flex flex-col justify-center items-center h-3/4">
            <h1 className="text-4xl font-semibold text-slate-200">
              Good Evening Kanna Anissa 🤗
            </h1>
            {weather && (
              <>
                <div className="text-slate-200 font-semibold text-3xl flex justify-center items-center my-4">
                  <p className="">{weather.location.name}</p>
                  <Image
                    src={cloud}
                    alt="cloudy"
                    width={500}
                    height={500}
                    className="w-20 h-20 mx-4"
                  />
                  <p>{weather.current.temp_c}°C</p>
                </div>
                <p className="w-3/5 text-slate-200 text-2xl text-center">
                  {status}
                </p>
              </>
            )}
          </div>
        </div>
        <div className="flex-grow w-4/5 border border-yellow-500 p-2">
          <div className="flex justify-between border border-red-500">
            <button className="bg-amber-500 hover:bg-amber-600 px-8 py-2 rounded-md">
              automatically
            </button>
            <div className="flex justify-between items-center">
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
            <Searchbar />
          </div>
          <div>world</div>
        </div>
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
