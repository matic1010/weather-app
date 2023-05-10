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
