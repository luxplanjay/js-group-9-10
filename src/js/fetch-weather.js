const PROXY = 'https://cors-anywhere.herokuapp.com';

const fetchWeather = async ({ latitude, longitude }) => {
  try {
    const response = await fetch(
      `${PROXY}/https://api.darksky.net/forecast/769d98f8296ca9e8bbd3af36d8d98b73/${latitude},${longitude}?units=si`
    );
    const weather = await response.json();

    return weather;
  } catch (error) {
    throw error;
  }
};

export default fetchWeather;
