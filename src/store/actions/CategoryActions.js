import {
  createCategory,
  deleteCategory,
  getCategory,
  updateCategory,
  uploadPicture,
} from "../../services/CategoryService";
import swal from "sweetalert";

export const GET_ALL_GATEGORIES = "GET_ALL_GATEGORIES";

export function categoryAction() {
  return (dispatch) => {
    getCategory()
      .then((response) => {
        dispatch(getAllCategories(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function createCategoryAction(menu) {
  return (dispatch) => {
    createCategory(menu)
      .then((response) => {
        swal("succès!", " Menu a éte ajouter ", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function deleteCategoryAction(id) {
  return (dispatch) => {
    deleteCategory(id)
      .then((response) => {
        swal("succès!", " Menu a éte supprimer", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function updateCategoryAction(menu) {
  return (dispatch) => {
    updateCategory(menu)
      .then((response) => {
        swal("succès!", " Menu a éte modifier", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function uploadImageAction(formData) {
  return uploadPicture(formData);
}

export function getAllCategories(payload) {
  return {
    type: GET_ALL_GATEGORIES,
    payload,
  };
}
