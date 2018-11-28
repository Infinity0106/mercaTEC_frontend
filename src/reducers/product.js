export default (
  state = {
    description: "",
    id: "c5aa8d55-5e04-407f-bac7-6a6120d0e14b",
    images: [],
    name: "",
    price: "",
    add_images: null,
    error: false,
    error_msg: "",
    success: false,
    success_msg: ""
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "REQUEST_GET_SINGLE_PRODUCT":
      break;
    case "REQUEST_GET_SINGLE_PRODUCT_FULFILLED":
      newState.description = action.payload.data.description;
      newState.id = action.payload.data.id;
      newState.name = action.payload.data.name;
      newState.price = action.payload.data.price;
      newState.images = action.payload.data.images;
      break;
    case "REQUEST_GET_SINGLE_PRODUCT_REJECTED":
      break;
    case "REQUEST_UPDATE_PRODUCT_FULFILLED":
      newState.success = true;
      newState.success_msg = "Producto actualizado con exito";
      break;
    // case "REQUEST_DELETE_PRODUCT_FULFILLED":
    //   newState.success = true;
    //   newState.success_msg = "Producto eliminado";
    //   break;
    case "REQUEST_UPDATE_PRODUCT_REJECTED":
      newState.error = true;
      newState.error_msg = "No se pudo actualizar el producto";
      break;
    case "REQUEST_DELETE_PRODUCT_IMAGE":
      break;
    case "REQUEST_DELETE_PRODUCT_IMAGE_FULFILLED":
      newState.success = true;
      newState.success_msg = "Imagen eliminada";
      break;
    case "REQUEST_DELETE_PRODUCT_IMAGE_REJECTED":
      newState.success = false;
      newState.error = true;
      newState.error_msg = "Image can't be deleted";
      break;
    case "SET_EDIT_PRODUCT_VALUE":
      newState[action.key] = action.value;
      break;
    case "SET_SINGLE_PRODUCT_ERROR":
      newState.error = action.value;
      break;
    case "SET_SINGLE_PRODUCT_SUCCESS":
      newState.success = action.value;
      break;
    default:
      break;
  }
  return newState;
};
