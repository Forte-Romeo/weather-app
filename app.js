// ===== WEATHER API CONFIG ===== //
const API_KEY = "cc1e9a6419ac40469eb105338262107";
const BASE_URL = "https://api.weatherapi.com/v1/forecast.json";

// ===== DOM ELEMENTS ===== //
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const rainChance = document.getElementById("rainChance");
const feelsLike = document.getElementById("feelsLike");
const windSpeed = document.getElementById("windSpeed");
const humidity = document.getElementById("humidity");
const uvIndex = document.getElementById("uvIndex");
const mainWeatherIcon = document.getElementById("mainWeatherIcon");
const hourlyForecast = document.getElementById("hourlyForecast");
const weeklyForecast = document.getElementById("weeklyForecast");

// ===== GET WEATHER DATA ===== //
async function getWeather(city) {
    try {
        const response = await fetch (`${BASE_URL}?key=${API_KEY}&q=${city}&days=7&api=yes&alerts=no`);

        if(!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        updateCurrentWeather(data);
        updateHourlyForecast(data);
        updateWeeklyForecast(data);
    }
    catch (error) {
        alert(error.message);
        console.error(error);
    }
}