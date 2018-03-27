const request = require('request');
const argv = require('yargs').argv;

let apiKey = '06fca7b66b0842d27f5f977c71eb81e3';
let city = argv.c || 'shanghai';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
