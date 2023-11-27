const getWeatherInfo = async (location) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=56400427bd7789056ad727ca690b793d`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

const processWeatherData = async (location) => {
  const data = await getWeatherInfo(location);
  return { name: data.name, temperature: data.main.temp, weather: data.weather[0].description };
}

const printWeatherData = async (location) => {
  const weather = await processWeatherData(location);
  console.log(weather);
}

const locationInput = document.getElementById("location");
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  printWeatherData(locationInput.value);
  locationInput.value = "";
})