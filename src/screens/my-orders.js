import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Order} from '../components';
import {BLACK_43} from '../utils/colors';
import background from '../../assets/images/orderBackground.png';

const MyOrders = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={background}
        blurRadius={25}
        resizeMode="cover"
      />
      <View style={styles.background}>
        <View style={styles.orderContainer}>
          <Order />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: BLACK_43,
    zIndex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderContainer: {
    minWidth: 420,
    minHeight: 270,
    width: '37%',
    height: '34%',
    zIndex: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default MyOrders;
