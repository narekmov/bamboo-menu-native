import React, {memo} from 'react';
import {withTranslation} from 'react-i18next';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigation';

const AppNavigation = () => {
  return (
    <NavigationContainer key="navigation">
      <RootNavigator />
    </NavigationContainer>
  );
};

export default memo(withTranslation()(AppNavigation));
