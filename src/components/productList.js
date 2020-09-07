import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WHITE } from '../utils/colors';
import { useSelector } from 'react-redux';
import { REGULAR_MONTSERRAT } from '../utils/fonts';
import { API } from '../service';

export const ProductList = ({ onItemPress, data }) => {
  const language = useSelector(({ language }) => language.language);

  return !!data && data.length && data.map((item) =>
    (
      <TouchableOpacity
        style={styles.container}
        onPress={() => onItemPress(item)}
        key={item._id}
      >
        <View style={styles.imageWrapper}>
          <Image style={[styles.image]}
            source={{ uri: `${API}${item.image}` }}
          />
        </View>
        <View style={styles.productContainer}>
          <View style={styles.nameContainer}>
            <Text style={[styles.text, styles.productName]}>{item.name[language]}</Text>
            <Text style={[styles.text, styles.smallText]}>{item.weight}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={[styles.productPrice, styles.text]}>{item.discount ? item.discount : item.price}</Text>
            <Text style={[styles.smallText, styles.text]}>AMD</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  )
};

const styles = StyleSheet.create({
  container: {
    width: '23.8%',
    margin: '0.6%',
  },
  imageWrapper: {
    paddingTop: '80%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  text: {
    color: WHITE,
  },
  categories: {
    position: 'absolute',
    color: WHITE,
    fontSize: 25,
    fontWeight: 'bold',
    bottom: 15,
    left: 20,
  },
  productContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: 15,
    width: '100%',
    justifyContent: 'space-between'
  },
  nameContainer: {
    paddingTop: 4,
    justifyContent: 'center'
  },
  priceContainer: {
    alignItems: 'flex-end'
  },
  productName: {
    fontSize: 16,
    fontFamily: REGULAR_MONTSERRAT,
    fontWeight: '600'
  },
  smallText: {
    fontSize: 12,
    fontFamily: REGULAR_MONTSERRAT,
    fontWeight: '600'
  },
  productPrice: {
    fontSize: 28,
    fontFamily: REGULAR_MONTSERRAT,
    fontWeight: '900'
  },
});
