const locationUrl = (city, country) => {
  const BASE = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const KEY = '&APPID=a0edeea572208c67bc7b570ed1990f65';
  const params = country === undefined ? city : [city, country].join(',');
  const url = [BASE, params, KEY].join('');

  return url;
};

export { locationUrl as default };