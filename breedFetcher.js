const request = require("request");
const userRequest = process.argv[2];


request(`https://api.thecatapi.com/v1/breeds/search?q=${userRequest}`, (error, response, body) => {
  const data = JSON.parse(body);
  // breed name is not found
  if (Object.keys(data).length === 0) {
    console.log(`Ooops, we did not find ${userRequest} type of cat.`);
  }
  // request failed (error: null, body: message:"404")
  if (Object.keys(data).includes("message")) {
    console.log(`this is the message: ${body}`);
  }
  // found the result
  console.log(data[0].description);
});

