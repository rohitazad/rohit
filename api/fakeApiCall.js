import {
  AxiosProvider,
  Request,
  Get,
  Delete,
  Head,
  Post,
  Put,
  Patch,
  withAxios
} from "react-axios";
// api key is Lg6AcEePOsJbldWFXuGo4g
// url is https://fakejson.com/documentation

const myKey = "Lg6AcEePOsJbldWFXuGo4g";

let payload = {
  token: "Lg6AcEePOsJbldWFXuGo4g",
  data: {
    name: "nameFirst",
    email: "internetEmail",
    phone: "phoneHome",
    _repeat: 300
  }
};

axios({
  method: "post",
  url: "https://app.fakejson.com/q",
  data: payload
}).then(function(resp) {
  // Do something with fake data
});
