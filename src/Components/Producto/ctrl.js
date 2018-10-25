import * as Backend from "./../../backend";

export default {
  goTo: function(num) {
    this.props.history.go(num);
  },
  getProductById: function(id) {
    this.props.dispatch({
      type: "REQUEST_GET_SINGLE_PRODUCT",
      payload: Backend.getProduct(id)
    });
  },
  changeEditProduct: function(e, { data_key, type }) {
    this.props.dispatch({
      type: "SET_EDIT_PRODUCT_VALUE",
      value: type !== "file" ? e.target.value : e.target.files,
      key: data_key
    });
  },
  updateProduct: function() {
    let self = this;
    this.props
      .dispatch({
        type: "REQUEST_UPDATE_PRODUCT",
        payload: Backend.updateProduct(this.props.data)
      })
      .then(() => {
        self.props.dispatch({
          type: "REQUEST_GET_SINGLE_PRODUCT",
          payload: Backend.getProduct(self.props.data.id)
        });
      });
  },
  deleteProduct: function() {
    let self = this;
    this.setState({ show_confirm: false });
    this.props
      .dispatch({
        type: "REQUEST_DELETE_PRODUCT",
        payload: Backend.deleteProduct(this.props.data.id)
      })
      .then(() => {
        self.props.history.go(-1);
      });
  },
  deleteImage: function() {
    let self = this;
    this.setState({ show_confirm: false });
    this.props
      .dispatch({
        type: "REQUEST_DELETE_PRODUCT_IMAGE",
        payload: Backend.deleteImage(this.props.data.id)
      })
      .then(() => {
        self.props.dispatch({
          type: "REQUEST_GET_SINGLE_PRODUCT",
          payload: Backend.getProduct(this.props.product.id)
        });
      });
  },
  hideError: function() {
    let self = this;
    setTimeout(() => {
      self.props.dispatch({
        type: "SET_SINGLE_PRODUCT_ERROR",
        value: false
      });
    }, 3000);
  },
  hideSuccess: function() {
    let self = this;
    setTimeout(() => {
      self.props.dispatch({
        type: "SET_SINGLE_PRODUCT_SUCCESS",
        value: false
      });
    }, 3000);
  },
  getProductQr: function() {
    this.props
      .dispatch({
        type: "REQUEST_GET_PRODUCT_QR",
        payload: Backend.getProductQr(this.props.data)
      })
      .then(res => {
        //HACK: done for downloading the file
        const url = window.URL.createObjectURL(res.value.data);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${this.props.data}_qr.png`);
        link.click();
        link.remove();
      });
  }
};
