import { GET_SLIDES, OPEN_SLIDE_PRODUCT } from '../constants/slides';

const initialState = {
  slides: [],
  openSlide: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SLIDES:
      return { 
        ...state,
        slides: [...action.payload]
      };
    case OPEN_SLIDE_PRODUCT:
      console.log(2, action.payload);
      return {
        ...state,
        openSlide: action.payload,
      };
    default:
      return { ...state };
  }
};
