import {
  createProduct,
  createSupp,
  deleteProduct,
  deleteSupp,
  fetchSupplements,
  getOneProducts,
  getProduct,
  getProducts,
  updateProduct,
  updateSupp,
} from "../../services/ProductService.";
import swal from "sweetalert";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCTS_BY_CAT = "GET_PRODUCTS_BY_CAT";
export const GET_PRODUCTS_BY_ID = "GET_PRODUCTS_BY_ID";
export const GET_SUPPLEMENTS = "GET_SUPPLEMENTS";

export function ProductByCatAction(catId) {
  return (dispatch) => {
    getProduct(catId)
      .then((response) => {
        dispatch(getProductsByCat(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function ProductAction() {
  return (dispatch) => {
    getProducts()
      .then((response) => {
        dispatch(getAllProducts(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function ProductByIdAction(id) {
  return (dispatch) => {
    getOneProducts(id)
      .then((response) => {
        dispatch(getProductById(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function createProductAction(product) {
  return (dispatch) => {
    createProduct(product)
      .then(() => {
        swal("succès!", " Produit a éte ajouter", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function deleteProductAction(id) {
  return (dispatch) => {
    deleteProduct(id)
      .then(() => {
        swal("succès!", " Produit a éte supprimer", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function updateProductAction(product) {
  return (dispatch) => {
    updateProduct(product)
      .then(() => {
        swal("succès!", " Produit a éte modefier", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function updateSuppAction(supp) {
  return (dispatch) => {
    updateSupp(supp)
      .then(() => {
        swal("succès!", " Supplement a éte modefier", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function deleteSuppAction(id) {
  return (dispatch) => {
    deleteSupp(id)
      .then(() => {
        swal("succès!", " Supplement a éte supprimer", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function createSuppAction(supp) {
  return (dispatch) => {
    createSupp(supp)
      .then(() => {
        swal("succès!", " Supplement a éte ajouter", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function SupplmentsAction(id) {
  return (dispatch) => {
    fetchSupplements(id)
      .then((response) => {
        dispatch(getSupplements(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getProductsByCat(payload) {
  return {
    type: GET_PRODUCTS_BY_CAT,
    payload,
  };
}
export function getAllProducts(payload) {
  return {
    type: GET_ALL_PRODUCTS,
    payload,
  };
}
export function getProductById(payload) {
  return {
    type: GET_PRODUCTS_BY_ID,
    payload,
  };
}
export function getSupplements(payload) {
  return {
    type: GET_SUPPLEMENTS,
    payload,
  };
}
