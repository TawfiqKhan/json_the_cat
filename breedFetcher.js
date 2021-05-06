const request = require('request');
const args = process.argv.slice(2);
const breed = args[0];
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log("Please check your Address and try again");
  } else if (body) {
    const data = JSON.parse(body);
    if (!data.length) {
      console.log("Could not find your breed, try a different one!");
    } else {
      console.log(data[0].description);
    }
  }
});