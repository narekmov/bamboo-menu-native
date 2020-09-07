import { GET_CATEGORIES, SET_SELECTED_CATEGORY } from '../constants/categories';
import { getCategories } from '../service';

export const addCategories = (token, section_id) => dispatch => {
  getCategories(token, section_id).then(categories => {    
    dispatch({
      type: GET_CATEGORIES,
      payload: {
        section_id, categories
      }
    });
  }).catch(err => console.log('Error', err));
};

export const setSelectedCategory = ( section_id, category_id) => dispatch => {
  dispatch({
    type: SET_SELECTED_CATEGORY,
    payload: {[section_id]: category_id},
  });
};
