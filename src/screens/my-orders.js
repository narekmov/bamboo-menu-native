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
    flex: 1,
    width: '100%',
    height: '100%',
  },
  background: {
    position: 'absolute',
    top: 45,
    bottom: 0,
    left: 0,
    right: 0,
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
