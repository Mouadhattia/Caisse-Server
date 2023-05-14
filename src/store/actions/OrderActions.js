import { getOrders, getTable, updateOrder } from "../../services/OrderService";
import swal from "sweetalert";

export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
export const GET_ALL_TABLE_BY_ID = "GET_ALL_TABLE_BY_ID";

export function fetchOrderAction() {
  return (dispatch) => {
    getOrders()
      .then((response) => {
        dispatch(getAllOrders(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function fetchTableByIdAction(id) {
  return (dispatch) => {
    getTable(id)
      .then((response) => {
        dispatch(getOneTable(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function updateOrderAction(order) {
  return (dispatch) => {
    updateOrder(order)
      .then((response) => {
        if (response.data.data.status === "cancled") {
          swal("succès!", " Commande annulé", "success");
        } else {
          swal("succès!", " Commande acceptée", "success");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function getAllOrders(payload) {
  return {
    type: GET_ALL_ORDERS,
    payload,
  };
}
export function getOneTable(payload) {
  return {
    type: GET_ALL_TABLE_BY_ID,
    payload,
  };
}
