import {ADD_ORDER, REMOVE_ORDER, RESET} from '../constants/order';

export const addOrder = (_id, name, quantity, time, price) => dispatch => {
  dispatch({type: ADD_ORDER, payload: {_id, name, quantity, time, price}});
};

export const removeOrder = (index) => dispatch => {
  dispatch({type: REMOVE_ORDER, payload: index});
};

export const removeAll = () => dispatch => {
  dispatch({type: RESET, payload: ''});
}
