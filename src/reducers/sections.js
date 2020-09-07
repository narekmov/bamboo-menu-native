import { GET_CATEGORYS } from '../constants/categories';

const initialState = {
  categories: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORYS:
      const sid = action.payload.section_id;
      const { categories } = action.payload;
      return { ...state, categories: { ...state.categories, [sid]: categories } };
    default:
      return { ...state };
  }
};
