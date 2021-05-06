const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (body) {
      const data = JSON.parse(body);
      if (!data.length) {
        let errorMsg = "Could not Find your Breed!, Try a different one.";
        callback(errorMsg, null);
      } else {
        let desc = data[0].description;
        callback(null, desc);
      }
    }
  });
};

module.exports = { fetchBreedDescription };