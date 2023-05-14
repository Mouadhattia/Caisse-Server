import { GET_ALL_ORDERS, GET_ALL_TABLE_BY_ID } from "../actions/OrderActions";

const initialState = {
  orders: [],
  table: {},
};

export function OrderReducer(state = initialState, action) {
  if (action.type === GET_ALL_ORDERS) {
    return {
      ...state,
      orders: action.payload,
    };
  }
  if (action.type === GET_ALL_TABLE_BY_ID) {
    return {
      ...state,
      table: action.payload,
    };
  }

  return state;
}
