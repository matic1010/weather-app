const renderWeatherCard = weather => {
  const weatherCard = document.createElement("div");
  weatherCard.className = "weather-card"
  const name = document.createElement("h2");
  name.className = "name";
  name.textContent = weather.name;
  weatherCard.appendChild(name);
  const temperature = document.createElement("p");
  temperature.className = "temperature";
  temperature.textContent = `${weather.temperature}°C`;
  weatherCard.appendChild(temperature);
  return weatherCard;
};

const render = weatherData => {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.appendChild(renderWeatherCard(weatherData));
}

export { render };