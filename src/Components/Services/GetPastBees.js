import axios from 'axios';

export const GetPastBees = () => {
    return axios.get('pastBees.json').then((response) => {
        console.log(response.data);
        return response.data;
      }).catch((err) => {
        console.log("GET Error: ", err);
      });
  };