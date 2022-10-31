const request = require("postman-request");

require("dotenv").config();

const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_STACK_API_KEY}&query=New%20ork`;

const returnWeather = () => {
  return request({ url, json: true }, (error, response, { current }) => {
    if (error) {
      throw new Error(error.message);
    }

    const { temperature, feelslike } = current;

    console.log(
      `It is currently ${temperature} degrees out, but it feels like ${feelslike} degrees`
    );
  });
};

returnWeather();