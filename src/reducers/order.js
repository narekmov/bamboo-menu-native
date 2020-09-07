import { ADD_ORDER, REMOVE_ORDER, RESET } from '../constants/order';

const initialState = {
  orders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state, orders: [
          ...state.orders
            .filter(e => e._id !== action.payload._id),
          action.payload,
        ]
      };
    case REMOVE_ORDER:
      return {
        ...state,
        orders: state.orders.filter((e, index) => index !== action.payload)
      };
    case RESET:
      return { ...initialState };
    default:
      return { ...state };
  }
}