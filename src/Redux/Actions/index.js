import { types } from "./types";
import axios from "axios";
// https://appdividend.com/2018/06/15/react-redux-axios-tutorial-example/
const myKey = "Lg6AcEePOsJbldWFXuGo4g";
const apiUrl = "https://app.fakejson.com/q";

let payload = {
  token: "Lg6AcEePOsJbldWFXuGo4g",
  data: {
    name: "nameFirst",
    email: "internetEmail",
    gender: "personGender",
    phone: "phoneHome",
    _repeat: 30
  }
};

export const fetchAllPosts = () => {
  console.log("fetch");

  //debugger;
  return dispatch => {
    console.log("dispatch");

    return axios
      .post(`${apiUrl}`, {
        token: "Lg6AcEePOsJbldWFXuGo4g",
        data: {
          name: "nameFirst",
          email: "internetEmail",
          phone: "phoneHome",
          gender: "personGender",
          _repeat: 30
        }
      })
      .then(response => {
        dispatch(fetchPosts(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

const fetchPosts = posts => {
  console.log("fetched", posts);

  //debugger;
  return {
    type: types.FETCH_POST,
    posts
  };
};
