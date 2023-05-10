import WeatherCard from "./components/WeatherCard";
import "./style.css";

const mainContainer = document.querySelector("main");
const weatherDisplay = document.querySelector(".weather-display");
const searchInput = document.getElementById("city-search");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", handleSearch);

searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
});

function handleSearch() {
  const searchTerm = searchInput.value;
  if (searchTerm) {
    renderWeatherInfo(searchTerm);
  } else {
    console.log("Please enter a city!");
  }
  searchInput.value = "";
}

async function getWeatherData(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=3f6e7ee7894f4445b1a90741231005&q=${location}`,
    {
      type: "cors",
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
}

async function processWeatherData(location) {
  const weatherData = await getWeatherData(location);
  const weatherObject = {
    location,
    temp: weatherData.current.temp_c,
    condition: weatherData.current.condition.text,
    isDay: weatherData.current.is_day,
  };
  return weatherObject;
}

async function renderWeatherInfo(location) {
  const weather = await processWeatherData(location);
  const card = WeatherCard(
    weather.location,
    weather.temp,
    weather.condition,
    weather.isDay
  );
  weatherDisplay.appendChild(card);
}
