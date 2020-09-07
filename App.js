import React, {useEffect, useState} from 'react';
import {StyleSheet, StatusBar, ActivityIndicator, View} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigation/appNavigator';
import store from './src/store';
import {login} from './src/actions/login';
import {setLanguage} from './src/actions/language';
import './src/locale';
import AsyncStorage from '@react-native-community/async-storage';

console.disableYellowBox = true;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('locale').then((res) => {
      store.dispatch(setLanguage(res));
    });
    store.dispatch(
      login(() => {
        setLoading(false);
      }),
    );
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
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
