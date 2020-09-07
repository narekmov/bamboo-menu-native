import { LOGIN } from '../constants/login';

const initialState = {
  token: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.payload.token };
    default:
      return { ...state };
  }
};
