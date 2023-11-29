import { getWeatherData } from "./api";
import { render } from "./display";

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const weatherData = await getWeatherData(searchInput.value);
  console.log(weatherData);
  searchInput.value = "";
});

const initialWeather = await getWeatherData("Lippstadt");
render(initialWeather);