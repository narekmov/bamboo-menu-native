import React, {useCallback, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {setLanguage} from '../actions/language';
import i18next from '../locale';
import {WHITE} from '../utils/colors';

export const Header = ({title, back}) => {
  const language = useSelector(({language}) => language.language);
  const dispatchStore = useDispatch();
  const {goBack} = useNavigation();

  useEffect(() => {
    if (!language) {
      AsyncStorage.getItem('locale').then((locale) => {
        dispatchStore(setLanguage(locale));
      });
    }
  }, [language, dispatchStore]);

  const setLan = useCallback(
    (lan) => {
      i18next.changeLanguage(lan);
      dispatchStore(setLanguage(lan));
    },
    [dispatchStore],
  );

  return (
    <LinearGradient
      colors={['#000000', '#3B3030']}
      style={styles.linearGradient}
      start={{x: 0.0, y: 0.0}}
      end={{x: 1.0, y: 0.0}}>
      <View style={styles.titleContent}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
      {back ? (
        <TouchableOpacity
          style={styles.backButtonWrapper}
          onPress={() => goBack()}>
          <Text style={styles.backButton}>‹</Text>
        </TouchableOpacity>
      ) : (
        <View />
      )}
      <View style={styles.rightContent}>
        {/*ՀԱՅ / РУС / ENG*/}
        <TouchableOpacity onPress={() => setLan('hy')} style={styles.lnButton}>
          <Text
            style={[
              styles.langText,
              styles.languageText,
              language === 'hy' && styles.active,
            ]}>
            {'ՀԱՅ'}
          </Text>
        </TouchableOpacity>
        <Text style={styles.langText}>/</Text>
        <TouchableOpacity onPress={() => setLan('ru')} style={styles.lnButton}>
          <Text
            style={[
              styles.langText,
              styles.languageText,
              language === 'ru' && styles.active,
            ]}>
            {'РУС'}
          </Text>
        </TouchableOpacity>
        <Text style={styles.langText}>/</Text>
        <TouchableOpacity onPress={() => setLan('en')} style={styles.lnButton}>
          <Text
            style={[
              styles.langText,
              styles.languageText,
              language === 'en' && styles.active,
            ]}>
            {'ENG'}
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 36,
    height: 24,
  },
  linearGradient: {
    width: '100%',
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContent: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftContent: {
    width: 100,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    color: WHITE,
    backgroundColor: 'transparent',
  },
  langText: {
    fontSize: 14,
    color: WHITE,
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 200,
    paddingRight: 16,
  },
  active: {
    fontWeight: 'bold',
  },
  languageText: {},
  backButtonWrapper: {
    paddingLeft: 16,
    height: '100%',
    width: 100,
    justifyContent: 'center',
  },
  backButton: {
    fontSize: 50,
    color: 'green',
    lineHeight: 50,
  },
  lnButton: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginVertical: -5,
  },
});
