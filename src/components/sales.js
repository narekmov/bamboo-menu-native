import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { WHITE } from '../utils/colors';

export const Sales = ({ slide, language, onPress }) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <View style={styles.container}>
        <Text style={[styles.title, styles.textWhite]}>{slide.product.name[language]}</Text>
        <View style={styles.containerPrices}>
          <Text style={[styles.textWhite, styles.price]}>{slide.product.discount}</Text>
          <Text style={[styles.textGray, styles.currency]}>AMD</Text>
        </View>
      </View>
      <View style={[styles.container, { justifyContent: 'space-between' }]}>
        <View style={styles.containerSave}>
          <Text style={[styles.textGray, styles.saveText]}>Save</Text>
          <Text style={[styles.textWhite, styles.savedPrice]}>{slide.product.price - slide.product.discount}</Text>
          <Text style={[styles.textGray, styles.currency]}>AMD</Text>
        </View>
        <View style={styles.containerSavedPrice}>
          <View style={styles.containerPrices}>
            <View style={styles.line} />
            <Text style={[styles.textGray, styles.previousPrice]}>{slide.product.price}</Text>
            <Text style={[styles.textGray, styles.currency]}>AMD</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: '10%',
    marginLeft: 50,
    width: 290,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textWhite: {
    color: WHITE,
  },
  textGray: {
    color: '#ABABAB'
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  containerPrices: {
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  currency: {
    fontSize: 12,
    fontWeight: '500'
  },
  containerSave: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  containerSavedPrice: {
    flexDirection: 'row',
  },
  saveText: {
    fontSize: 15,
  },
  savedPrice: {
    fontSize: 18,
    fontWeight: '800',
    paddingHorizontal: 4
  },
  previousPrice: {
    fontSize: 20,
  },
  line: {
    position: 'absolute',
    width: '100%',
    height: 1,
    backgroundColor: WHITE,
    top: 15
  }
});
