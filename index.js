const getWeatherInfo = async () => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Osaka&units=metric&appid=56400427bd7789056ad727ca690b793d`);
  const data = await response.json();
  
  console.log(`The weather in ${data.name}: It is currently ${data.main.temp}°C.`);
}

getWeatherInfo();