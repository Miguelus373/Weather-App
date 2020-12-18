const locationUrl = (type, field1, field2) => {
  const BASE = 'http://api.openweathermap.org/data/2.5/weather?';
  const KEY = '&APPID=a0edeea572208c67bc7b570ed1990f65';
  let params;

  if (type === 'current') {
    params = `lat=${field1}&lon=${field2}`;
  } else if (type === 'city') {
    if (field2 === undefined && field1 === undefined) {
      params = '';
    } else if (field2 === undefined) {
      params = `q=${field1}`;
    } else if (field1 === undefined) {
      params = `q=${field2}`;
    } else {
      params = `q=${field1},${field2}`;
    }
  }

  const url = `${BASE}${params}${KEY}`;

  return url;
};

export { locationUrl as default };