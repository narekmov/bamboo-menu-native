import { GET_SECTIONS } from '../constants/sections';
import { getSections } from '../service';

export const addSections = () => dispatch => {
  getSections().then(sections =>
    dispatch({
      type: GET_SECTIONS,
      payload: {
        sections,
      }
    })).catch(console.error);
};
