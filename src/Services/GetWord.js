import axios from 'axios';

export const getWord = (inputWord) => {
  return axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/".concat(inputWord)).then((result) => result.data).catch((err) => {
      console.log("Error: ", err);
      return null;
    });
};