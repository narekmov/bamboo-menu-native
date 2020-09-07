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
      <View style={styles.leftContent}>
        {back && (
          <TouchableOpacity
            style={styles.backButtonWrapper}
            onPress={() => goBack()}>
            <Text style={styles.backButton}>‹</Text>
          </TouchableOpacity>
        )}
        <Image
          style={styles.image}
          source={require('../../assets/images/bamboo_logo.png')}
        />
      </View>
      <View style={styles.titleContent}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
      <View style={styles.rightContent}>
        {/*ՀԱՅ / РУС / ENG*/}
        <TouchableOpacity onPress={() => setLan('hy')}>
          <Text
            style={[
              styles.langText,
              styles.languageText,
              language === 'hy' && styles.active,
            ]}>
            ՀԱՅ
          </Text>
        </TouchableOpacity>
        <Text style={styles.langText}>/</Text>
        <TouchableOpacity onPress={() => setLan('ru')}>
          <Text
            style={[
              styles.langText,
              styles.languageText,
              language === 'ru' && styles.active,
            ]}>
            РУС
          </Text>
        </TouchableOpacity>
        <Text style={styles.langText}>/</Text>
        <TouchableOpacity onPress={() => setLan('en')}>
          <Text
            style={[
              styles.langText,
              styles.languageText,
              language === 'en' && styles.active,
            ]}>
            ENG
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
    height: 46,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  titleContent: {
    ...StyleSheet.absoluteFillObject,
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
    textAlign: 'center',
    margin: 10,
    color: WHITE,
    backgroundColor: 'transparent',
  },
  langText: {
    fontSize: 14,
    color: WHITE,
    marginHorizontal: 1,
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 200,
  },
  active: {
    fontWeight: 'bold',
  },
  languageText: {
    width: 30,
  },
  backButtonWrapper: {
    height: 50,
    width: 30,
  },
  backButton: {
    fontSize: 50,
    color: 'green',
    lineHeight: 50,
  },
});
