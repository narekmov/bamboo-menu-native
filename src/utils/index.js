import {RESTAURENT, BAR, HOOKAH} from '../constants/sections';

export const mapIndex2name = (index) => {
  switch (index) {
    case RESTAURENT:
      return 'Restaurant';
    case BAR:
      return 'Bar';
    case HOOKAH:
      return 'Hookah';
    default:
      return 'Restaurant';
  }
};
