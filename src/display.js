import toggleUnit from './toggle_unit';

const displayWeather = async (weatherData) => {
  const weatherBox = document.querySelector('.weather-box');
  weatherBox.innerHTML = `
  <img class="loading" 
  src="https://motiongraphicsphoebe.files.wordpress.com/2018/10/8ee212dac057d412972e0c8cc164deee.gif?w=545&h=409" />
  `;

  const data = await weatherData;
  if (data && data.cod < 400) {
    const {
      name: city, sys: { country },
      weather: [{ description, icon }],
      main: {
        temp: temperature, humidity, pressure, feels_like: feelsLike,
      },
      wind: { speed },
    } = data;

    weatherBox.innerHTML = `
    <h1>${city}, <span class="country">${country}</span></h1>
    <div class="weather-header">
    <img src="http://openweathermap.org/img/wn/${icon}@2x.png"/>
    <h2>${description[0].toUpperCase()}${description.slice(1)}</h2>
    <p class="temp">${temperature}°</p>
    <p class="toggle"><a href="#" id="toggle">Change to Fahrenheit</a></p>
      <div class="weather-info">
      <p class="info-item">Wind <br/> ${speed} m/s</p>
        <p class="info-item">Feels like <br/> <span id="feels-like">${feelsLike}°</span></p>
        <p class="info-item">Humidity <br/> ${humidity}%</p>
        <p class="info-item">Pressure <br/> ${pressure} hPa</p>
        </div>
        </div>
        `;
    toggleUnit();
  } else {
    weatherBox.innerHTML = `
    <h4 class="error">Couldn't get the weather for that location. Please try again later.</h4>
    `;
  }
};

export { displayWeather as default };