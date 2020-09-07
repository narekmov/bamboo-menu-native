import {SET_LANGUAGE, LANGUAGE} from '../constants/language';
import AsyncStorage from '@react-native-community/async-storage';

export const setLanguage = (language) => dispatch => {
  AsyncStorage.setItem(LANGUAGE, language);
  return dispatch({type: SET_LANGUAGE, payload: language});
};