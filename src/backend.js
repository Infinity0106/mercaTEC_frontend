import axios from "axios";

// axios.defaults.baseURL = " https://radiant-taiga-43847.herokuapp.com/api/v1";
axios.defaults.baseURL = " http://localhost:3000/api/v1";
axios.defaults.headers.common["X-Application"] = "app";
axios.defaults.headers.common["Authorization"] = sessionStorage.getItem("JWT");

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

export function getProducts(page = 1) {
  return axios({
    method: "GET",
    url: `/products?page=${page}`
  });
}

export function createProduct(data) {
  let formData = new FormData();
  Array.from(data.images).forEach(ele => formData.append("images[]", ele));
  formData.set("description", data.description);
  formData.set("name", data.name);
  formData.set("price", data.price);

  return axios({
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    url: "/products",
    data: formData
  });
}

export function getProduct(id) {
  return axios({
    method: "GET",
    url: `/products/${id}`
  });
}

export function updateProduct(body) {
  let formData = new FormData();
  if (body.add_images) {
    Array.from(body.add_images).forEach(ele =>
      formData.append("images[]", ele)
    );
  } else {
    formData.append("images[]", null);
  }
  formData.append("description", body.description);
  formData.append("name", body.name);
  formData.append("price", body.price);

  return axios({
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    url: `/products/${body.id}`,
    data: formData
  });
}

export function deleteProduct(id) {
  return axios({
    method: "DELETE",
    url: `/products/${id}`
  });
}

export function deleteImage(id) {
  return axios({
    method: "DELETE",
    url: `/images/${id}`
  });
}

export function userSignUp(data) {
  return axios({
    method: "POST",
    url: "/signup",
    data: {
      user: data
    }
  }).then(res => {
    axios.defaults.headers.common["Authorization"] = res.data.token;
    return res;
  });
}

export function userForgot(user_handler) {
  return axios({
    method: "POST",
    url: "/forgot",
    data: {
      user: { user_handler }
    }
  });
}

export function userChangePass(data, id) {
  return axios({
    method: "PUT",
    url: `/forgot/${data.value || id}`,
    data: {
      user: {
        password: data.password,
        password_confirmation: data.password_confirmation
      }
    }
  });
}

export function getProductQr(id) {
  return axios({
    method: "GET",
    url: `/products/${id}/qr`,
    responseType: "blob"
  });
}

export function updateAccount(data) {
  return axios({
    method: "PUT",
    url: `/users/${data.id}`,
    data
  });
}
