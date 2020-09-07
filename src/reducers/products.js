import { GET_PRODUCTS } from '../constants/products';

const initialState = {
  products: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      const sid = action.payload.section_id;
      const cid = action.payload.category_id;
      const { products } = action.payload;
      return { ...state, products: { ...state.products, [sid]: {...(state.products[sid] || {}), [cid]: products.products } } };
    default:
      return { ...state };
  }
};
