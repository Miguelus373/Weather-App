const getWeather = async (url) => {
  try {
    const currentWeather = await fetch(url);
    const data = await currentWeather.json();
    return data;
  } catch (e) {
    return false;
  }
};

export { getWeather as default };