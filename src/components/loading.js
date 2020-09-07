import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {WHITE} from '../utils/colors';

export function Loading() {
  return (
    <View style={styles.root}>
      <ActivityIndicator size='large'/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE,
  },
});

