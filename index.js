const {fetchBreedDescription } = require('./breedFetcher');

const args = process.argv.slice(2);
const breed = args[0];

fetchBreedDescription(breed, (error, description)=> {
  if (error) {
    console.log('Error Fetching Details: ', error);
  } else {
    console.log(description);
  }
});
