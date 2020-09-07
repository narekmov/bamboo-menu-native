import { GET_SLIDES, OPEN_SLIDE_PRODUCT } from '../constants/slides';
import { getSlides } from '../service';

export const addSlides = (token) => dispatch => {
  getSlides(token).then(res =>
    dispatch({
      type: GET_SLIDES,
      payload: res.slides
    })).catch(err => console.log(err));
};

export const openSlideProduct = (product) => dispatch => {
  dispatch({
    type: OPEN_SLIDE_PRODUCT,
    payload: product,
  });
};
