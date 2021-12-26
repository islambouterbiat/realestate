import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "8fd5bfbe88mshec5e4f428311a04p12888ejsnf6b1a93afc80",
    },
  });
  return data;
};
