const displayWeather = async (weatherData) => {
  weatherData.then(data => {
    document.querySelector('.weather-box').innerHTML = `
    <p>${data.weather[0].description[0].toUpperCase()}${data.weather[0].description.slice(1)}</p>
    <p>${data.name}, ${data.sys.country[0]}${data.sys.country[1].toLowerCase()}</p>
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
    <p>${data.main.temp}° | feels like: ${data.main.feels_like}°</p>
    `;
  });
};

export { displayWeather as default };