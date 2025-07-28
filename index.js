module.exports = async function (input, tools) {
  const city = input.city || "London";
  const apiKey = process.env.apiKey;

  const axios = require("axios");
  const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);

  return {
    location: response.data.location.name,
    temperature: response.data.current.temp_c + " °C",
    condition: response.data.current.condition.text,
  };
};
