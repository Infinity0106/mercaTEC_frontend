import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api/v1";
axios.defaults.headers.common["X-Application"] = "app";

export function userLogin(email, password) {
  return axios({
    method: "POST",
    url: "/login",
    data: {
      user: {
        user_handler: email,
        // "player_id": "8da9dfca-df29-46e6-b98d-b2b6c21e457c",
        password: password
      }
    }
  });
}
