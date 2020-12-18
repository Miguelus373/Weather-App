const getWeather = async (url) => {
  const currentWeather = await fetch(url);
  const data = await currentWeather.json();

  return data;
};

export { getWeather as default };