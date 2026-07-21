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

// ===== CURRENT WEATHER DATA ===== //
function updateCurrentWeather(data) {
    cityName.textContent = data.location.name;
    temperature.textContent = `${Math.round(data.current.temp_c)}°`;
    rainChance.textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;
    feelsLike.textContent = `${Math.round(data.current.feelslike_c)}°`;
    windSpeed.textContent = `${data.current.wind_kph} km/h`;
    humidity.textContent = `${data.current.humidity}%`;
    uvIndex.textContent = data.current.uv;
    mainWeatherIcon.src = `https:${data.current.condition.icon}`;
}

// ===== HOURLY FORECAST DATA ===== //
function updateHourlyForecast(data) {
    hourlyForecast.innerHTML = "";
    const currentHour = new Date().getHours();
    const todayHours = data.forecast.forecastday[0].hour;
    const nextHours = todayHours.slice(
        currentHour,
        currentHour + 6
    );

    nextHours.forEach(hour => {
        const time = new Date(hour.time);
        const formattedTime = time.toLocaleTimeString(
            [],
            {
                hour: "numeric",
                minute: "2-digit"
            }
        );

        const card = document.createElement("div");
        card.classList.add("hour-card");
        card.innerHTML = `
        <p>${formattedTime}</p>
        
        <img
        src="https:${hour.condition.icon}"
        alt="${hour.condition.text}"
        >
        
        <h4>${Math.round(
            hour.temp_c
        )}°</h4>
        `;

        hourlyForecast.appendChild(card);
    });
}

// ===== WEEKLY FORECAST ===== //
function updateWeeklyForecast(data) {
    weeklyForecast.innerHTML = "";

    const days = data.forecast.forecastday;

    days.forEach(day => {
        const date = new Date(`${day.data}T00:00:00`);
        const dayName = new Intl.DateTimeFormat("en-US",
            {
                weekday: "short"
            }
        ).format(
            new Date(day.date_epoch * 1000)
        );
        const card = document.createElement("div");
        card.classList.add("day-card");

        card.innerHTML = `
            <p>${dayName}</p>

            <div class="day-weather">

                <img
                src="https:${day.day.condition.icon}"
                alt="${day.day.condition.text}"
                >

                <span>
                    ${day.day.condition.text}
                </span>

            </div>

            <p>
                ${Math.round(day.day.maxtemp_c)}°
                /
                ${Math.round(day.day.mintemp_c)}°
            </p>
        `;

    weeklyForecast.appendChild(card);
  });
}

// ===== SEARCH BUTTON ===== //
searchBtn.addEventListener(
    "click",
    () => {
        const city =
            searchInput.value.trim();

        if (city !== "") {
            getWeather(city);
        }
  }
);

// ===== ENTER KEY SUPPORT ===== //
searchInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            const city =
                searchInput.value.trim();

            if (city !== "") {
                getWeather(city);
            }
        }
    }
);

// ===== DEFAULT CITY ===== //
getWeather("Accra");