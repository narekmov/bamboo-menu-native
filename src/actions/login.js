import { LOGIN } from '../constants/login';
import { loginRequest } from '../service';

export const login = (cb) => dispatch => {
  loginRequest().then((res) => {
    console.log(res);
    
    dispatch({
      type: LOGIN,
      payload: {
        token: res.access_token,
      }
    })
    cb();
  }).catch(err => console.log('Error', err));
};
