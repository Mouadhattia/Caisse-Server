import {
  createTable,
  deleteTable,
  getTable,
  updateTable,
} from "../../services/TableService";
import swal from "sweetalert";
export const GET_ALL_TABLE = "GET_ALL_TABLE";

export function tableAction() {
  return (dispatch) => {
    getTable()
      .then((response) => {
        dispatch(getAllTable(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function createTableAction(table) {
  return (dispatch) => {
    createTable(table)
      .then((response) => {
        swal("succès!", " Table a éte ajouter ", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function deleteTableAction(id) {
  return (dispatch) => {
    deleteTable(id)
      .then((response) => {
        swal("succès!", " Table a éte supprimer", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function updateTableAction(table) {
  return (dispatch) => {
    updateTable(table)
      .then((response) => {
        swal("succès!", " Table a éte modifier", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getAllTable(payload) {
  return {
    type: GET_ALL_TABLE,
    payload,
  };
}
