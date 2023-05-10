const mainContainer = document.querySelector("main");
const weatherDisplay = document.querySelector(".weather-display");
const searchInput = document.getElementById("city-search");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", (e) => {
  const searchTerm = searchInput.value;
  if (searchTerm) {
    renderWeatherInfo(searchTerm);
  } else {
    console.log("Please enter a city!");
  }
});

async function getWeatherData(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=3f6e7ee7894f4445b1a90741231005&q=${location}`,
    {
      type: "cors",
    }
  );
  const data = await response.json();
  return data;
}

async function processWeatherData(location) {
  const weatherData = await getWeatherData(location);
  const weatherObject = {
    location,
    temp: weatherData.current.temp_c,
    condition: weatherData.current.condition.text,
  };
  return weatherObject;
}

async function renderWeatherInfo(location) {
  weatherDisplay.innerHTML = "";
  const weather = await processWeatherData(location);
  const weatherDescription = document.createElement("p");
  weatherDescription.textContent = `Current weather in ${location}: ${weather.temp} degrees Celsius, ${weather.condition}`;
  weatherDisplay.appendChild(weatherDescription);
}
