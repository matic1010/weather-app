export default function WeatherCard(location, temperature, condition, isDay) {
  const card = document.createElement("div");
  card.classList.add("weather-card");
  card.classList.add(getClassNameFromCondition(condition, isDay));
  const cityTitle = document.createElement("h2");
  const capitalizedLocation =
    location.charAt(0).toUpperCase() + location.slice(1);
  cityTitle.textContent = capitalizedLocation;
  const temperatureText = document.createElement("p");
  temperatureText.classList.add("temperature");
  temperatureText.textContent = `${temperature} °C`;
  const conditionText = document.createElement("p");
  conditionText.textContent = condition;
  card.appendChild(cityTitle);
  card.appendChild(temperatureText);
  card.appendChild(conditionText);
  return card;
}

function getClassNameFromCondition(condition, isDay) {
  if (isDay === 1) {
    if (
      condition.toLowerCase().includes("cloudy") ||
      condition.toLowerCase().includes("overcast")
    )
      return "cloudy";
    if (condition.toLowerCase().includes("sunny")) return "sunny";
    if (condition.toLowerCase().includes("rain")) return "rainy";
  } else {
    return "night";
  }
}
