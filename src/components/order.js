import React, {useCallback} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {removeOrder, removeAll} from '../actions/order';
import x_icon from '../../assets/images/x_icon.png';

export const Order = () => {
  const {orders = [], language} = useSelector(({order, language}) => ({
    orders: order.orders,
    language: language.language,
  }));
  const dispatchStore = useDispatch();

  const removeHandler = useCallback(
    (index) => {
      dispatchStore(removeOrder(index));
    },
    [dispatchStore],
  );

  const removeAllOrders = useCallback(() => {
    dispatchStore(removeAll());
  }, [dispatchStore]);

  const orderItem = useCallback(
    ({item, index}) => (
      <View style={styles.orderItemWrapper} key={item._id.toString()}>
        <TouchableOpacity
          style={orderGrid.icon}
          onPress={() => removeHandler(index)}>
          <Image source={x_icon} style={styles.xIcon} />
        </TouchableOpacity>
        <View style={orderGrid.name}>
          <Text style={styles.orderItemText}>{item.name[language]}</Text>
        </View>
        <View style={orderGrid.quantity}>
          <Text style={[styles.orderItemText, styles.textCenter]}>
            {item.quantity}
          </Text>
        </View>
        <View style={orderGrid.time}>
          <Text style={[styles.orderItemText, styles.textCenter]}>
            {item.time ? item.time : '-'}
          </Text>
        </View>
        <View style={orderGrid.price}>
          <Text style={[styles.orderItemText, styles.textEnd]}>
            {item.price}
            <Text style={styles.orderCurrency}> AMD</Text>
          </Text>
        </View>
      </View>
    ),
    [language, removeHandler],
  );

  const OrderTitle = useCallback(
    () => (
      <View style={styles.orderItemWrapper}>
        <View style={orderGrid.icon} />
        <View style={orderGrid.name}>
          <Text style={styles.orderTitleText}>Name</Text>
        </View>
        <View style={orderGrid.quantity}>
          <Text style={[styles.orderTitleText, styles.textCenter]}>
            Quantity
          </Text>
        </View>
        <View style={orderGrid.time}>
          <Text style={[styles.orderTitleText, styles.textCenter]}>Time</Text>
        </View>
        <View style={orderGrid.price}>
          <Text style={[styles.orderTitleText, styles.textEnd]}>Price</Text>
        </View>
      </View>
    ),
    [],
  );

  const OrderFooter = useCallback(
    () => (
      <View style={styles.orderFooter}>
        <View style={styles.orderTotalWrapper}>
          <Text style={styles.orderTitleText}>Total price</Text>
          <Text style={styles.orderTotalPrice}>
            {orders.reduce((s, p) => s + p.price, 0)}
            <Text style={styles.orderCurrency}> AMD</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.orderButton}
          onLongPress={removeAllOrders}>
          <Text style={styles.orderButtonTitle}>ORDER</Text>
        </TouchableOpacity>
      </View>
    ),
    [orders, removeAllOrders],
  );

  return (
    <View style={styles.container}>
      <OrderTitle />
      {orders.map((item, index) => orderItem({item, index}))}
      <View style={styles.line} />
      <OrderFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  orderWrapper: {
    width: '37%',
  },
  orderItemWrapper: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginVertical: 5,
  },
  orderItemText: {
    fontSize: 14,
    color: 'white',
  },
  textCenter: {
    textAlign: 'center',
  },
  textEnd: {
    textAlign: 'right',
  },
  orderTitleText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
  line: {
    alignSelf: 'flex-end',
    width: '95%',
    height: 1,
    backgroundColor: '#ffffff',
    marginTop: 5,
  },
  orderFooter: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingTop: 22,
  },
  orderTotalWrapper: {
    flexDirection: 'row',
  },
  orderTotalPrice: {
    width: '30%',
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  orderCurrency: {
    fontSize: 12,
    fontWeight: 'normal',
    color: 'white',
  },
  orderButton: {
    width: 150,
    height: 30,
    backgroundColor: 'black',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  orderButtonTitle: {
    color: 'white',
  },
  xIcon: {
    width: 22,
    height: 22,
  },
});

const orderGrid = StyleSheet.create({
  icon: {
    width: '5%',
  },
  name: {
    width: '26%',
  },
  quantity: {
    width: '23%',
  },
  time: {
    width: '23%',
  },
  price: {
    width: '23%',
  },
});
