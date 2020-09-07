import {combineReducers} from 'redux';
import order from './order';
import language from './language';
import sections from './sections';
import categories from './categories';
import products from './products';
import slides from './slides';
import login from './login';

export default combineReducers({
  order,
  language,
  sections,
  categories,
  products,
  login,
  slides,
});
