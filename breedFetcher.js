const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
// moving the main request logic into a function named fetchBreedDescription.
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, desc) => {
    // error = `we did not find ${breedName}`; 

  if (Object.keys(JSON.parse(desc.body)).length === 0) {
    callback(JSON.parse(error), null);
  } else {
  callback(null,JSON.parse(desc.body)[0]["description"])};
  
})};

module.exports = {fetchBreedDescription}; 