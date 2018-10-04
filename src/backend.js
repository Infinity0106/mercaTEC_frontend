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
        password: password
      }
    }
  }).then(res => {
    axios.defaults.headers.common["Authorization"] = res.data.token;
    return res;
  });
}

export function userLogout(token) {
  return axios({
    method: "DELETE",
    url: "/logout"
  });
}
