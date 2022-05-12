const Api_key = "rRKAHmsjH1qgSc0SUfBItcBaut4L7DUQ";
const URL = "api.giphy.com/v1/gifs/search";

const data = fetch(
  "http://api.giphy.com/v1/gifs/random?api_key=rRKAHmsjH1qgSc0SUfBItcBaut4L7DUQ"
);

data
  .then((resp) => console.log(resp))
  .catch((err) => console.warn("Error Api"));
