import * as Backend from "./../../backend";

export default {
  changeAddProduct: function(e, { data_key, type }) {
    this.props.dispatch({
      type: "SET_PRODUCT_VALUE",
      value: type !== "file" ? e.target.value : e.target.files,
      key: data_key
    });
  },
  goTo: function(num) {
    this.props.history.go(num);
  },
  publishProduct: function() {
    if (!this.props.data.form_product.name) {
      this.props.dispatch({
        type: "SET_PRODUCT_ERROR",
        value: "Nombre no puede ser vacio"
      });
      return;
    }
    if (!this.props.data.form_product.price) {
      this.props.dispatch({
        type: "SET_PRODUCT_ERROR",
        value: "Precio no puede ser vacio"
      });
      return;
    }
    if (!this.props.data.form_product.description) {
      this.props.dispatch({
        type: "SET_PRODUCT_ERROR",
        value: "Descripcion no puede ser vacio"
      });
      return;
    }
    if (!this.props.data.form_product.images.length) {
      this.props.dispatch({
        type: "SET_PRODUCT_ERROR",
        value: "Al menos sube una imagen"
      });
      return;
    }
    if (this.props.data.form_product.images.length > 9) {
      this.props.dispatch({
        type: "SET_PRODUCT_ERROR",
        value: "Maximo de 9 fotos"
      });
      return;
    }
    let self = this;
    this.props
      .dispatch({
        type: "REQUEST_CREATE_PRODUCT",
        payload: Backend.createProduct(this.props.data.form_product)
      })
      .then(() => {
        self.props.dispatch({
          type: "REQUEST_GET_PRODUCTS",
          payload: Backend.getProducts()
        });
      });
  },
  hideError: function() {
    let self = this;
    setTimeout(() => {
      self.props.dispatch({
        type: "SET_PRODUCT_HIDE_ERROR",
        value: false
      });
    }, 3000);
  },
  hideSuccess: function() {
    let self = this;
    setTimeout(() => {
      self.props.dispatch({
        type: "SET_PRODUCT_VALUE",
        key: "success",
        value: false
      });
    }, 3000);
  },
  productItemClicked: function(e) {
    this.props.history.push(`/products/${this.props.data.id}`);
  },
  getInitialValues: function() {
    this.props.dispatch({
      type: "REQUEST_GET_PRODUCTS",
      payload: Backend.getProducts()
    });
  },
  changePage: function(e, data) {
    this.props.dispatch({
      type: "SET_PRODUCT_VALUE",
      key: "pagination.current_page",
      value: data.activePage
    });
    this.props.dispatch({
      type: "REQUEST_GET_PRODUCTS",
      payload: Backend.getProducts(data.activePage)
    });
  }
};
