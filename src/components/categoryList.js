import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WHITE } from '../utils/colors';
import { useSelector } from 'react-redux';
import { API } from '../service';

export const CategoryList = ({ onItemPress, data }) => {
  const language = useSelector(({ language }) => language.language);

  return data.map((item) =>
    (
      <TouchableOpacity
        style={styles.container}
        onPress={() => onItemPress(item)}
        key={item._id}
      >
        <View style={styles.imageWrapper}>
          <Image style={styles.image}
            source={{ uri: `${API}${item.image}` }}
          />
        </View>
        <Text style={styles.categories}>{item.name[language]}</Text>
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
});
