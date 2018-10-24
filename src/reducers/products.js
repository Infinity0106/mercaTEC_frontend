function setterDotNotation(obj, str, value) {
  if (typeof str === "string") {
    return setterDotNotation(obj, str.split("."), value);
  } else if (str.length === 1 && value !== undefined) {
    return (obj[str[0]] = value);
  } else if (str.length === 0) {
    return obj;
  } else {
    return setterDotNotation(obj[str[0]], str.slice(1), value);
  }
}

export default (
  state = {
    loading: true,
    error: false,
    success: false,
    success_msg: "",
    products: [],
    error_msg: "",
    pagination: {
      current_page: 1,
      total_pages: 1,
      total_products: 1
    },
    form_product: {
      name: "",
      price: "",
      description: "",
      images: []
    }
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "REQUEST_GET_PRODUCTS":
      newState.loading = true;
      break;
    case "REQUEST_GET_PRODUCTS_FULFILLED":
      newState.products = action.payload.data.products;
      newState.pagination = action.payload.data.meta;
      newState.loading = false;
      break;
    case "REQUEST_GET_PRODUCTS_REJECTED":
      newState.error = true;
      newState.error_msg = "No se pudieron extraer tus productos";
      newState.loading = false;
      break;
    case "REQUEST_CREATE_PRODUCT_FULFILLED":
      newState.form_product.name = "";
      newState.form_product.price = "";
      newState.form_product.description = "";
      newState.form_product.images = [];
      newState.success = true;
      newState.success_msg = "Producto creado con exito";
      break;
    case "SET_PRODUCT_HIDE_ERROR":
      newState.error = false;
      break;
    case "SET_PRODUCT_ERROR":
      newState.error = true;
      newState.error_msg = action.value;
      break;
    case "SET_PRODUCT_VALUE":
      setterDotNotation(newState, action.key, action.value);
      break;
    default:
      break;
  }
  return newState;
};
