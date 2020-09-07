import { GET_PRODUCTS } from '../constants/products';
import { getProducts } from '../service';

export const addProducts = (token, section_id, category_id) => dispatch => {
  getProducts(token, section_id, category_id).then(products => {
    dispatch({
      type: GET_PRODUCTS,
      payload: { section_id, category_id, products },
    });
  }).catch(err => console.log(err));
};
