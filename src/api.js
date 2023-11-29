const fetchData = async (location) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=56400427bd7789056ad727ca690b793d`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

const getWeatherData = async (location) => {
  const data = await fetchData(location);
  return { name: data.name, temperature: data.main.temp, weather: data.weather[0].description };
}


export { getWeatherData }
