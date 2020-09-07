import { GET_CATEGORIES, SET_SELECTED_CATEGORY } from '../constants/categories';

const initialState = {
  categories: {},
  selectedCategory: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      const sid = action.payload.section_id;
      const { categories } = action.payload;
      return { ...state, categories: { ...state.categories, [sid]: categories.categories } };
    case SET_SELECTED_CATEGORY:
      return {
        ...state, selectedCategory: {
          ...state.selectedCategory,
          ...action.payload,
        }
      };
    default:
      return { ...state };
  }
};
