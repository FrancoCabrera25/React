import axios from "axios";

// const baseURL = "https://www.omdapi.com/?apikey=279457d9";
const baseURL = "https://imdb-api.com/API/";
//const baseURL = "https://imdb-api.com/API/Search/k_Y4gF9316/";
export const apiCall = (url, data, headers, method) =>
  // console.log("url",url);
  // console.log("url-completa",baseURL+url)
  axios({
    method,
    url: baseURL + url,
    data,
    headers,
  });
