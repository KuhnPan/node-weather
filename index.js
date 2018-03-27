let request = require('request');

let apiKey = '06fca7b66b0842d27f5f977c71eb81e3';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});
