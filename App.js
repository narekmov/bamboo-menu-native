import React, {useEffect, useState} from 'react';
import {StyleSheet, StatusBar, ActivityIndicator, View} from 'react-native';
import {Provider} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {useTranslation} from 'react-i18next';
import AppNavigator from './src/navigation/appNavigator';
import store from './src/store';
import {login} from './src/actions/login';
import {setLanguage} from './src/actions/language';
import './src/locale';

console.disableYellowBox = true;

const App = () => {
  const {i18n} = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('locale').then((res) => {
      if (res) {
        store.dispatch(setLanguage(res));
        i18n.changeLanguage(res);
      }
    });
    store.dispatch(
      login(() => {
        setLoading(false);
      }),
    );
  }, [i18n]);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <Provider store={store}>
      <StatusBar hidden />
      <AppNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
