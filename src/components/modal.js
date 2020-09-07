import React, {useEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {addOrder} from '../actions/order';
import {useDispatch, useSelector} from 'react-redux';
import {API} from '../service';
import x_icon from '../../assets/images/x_icon.png';

export const OrderModal = ({isVisible, close, data}) => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const dispatchStore = useDispatch();
  const language = useSelector(({language}) => language.language);
  const {orders = []} = useSelector(({order}) => ({orders: order.orders}));

  useEffect(() => {
    if (data) {
      const index = orders.findIndex((e) => e._id === data._id);
      setQuantity(index === -1 ? 1 : orders[index].quantity);
      setPrice(data.discount ? data.discount : data.price);
    }
  }, [data, orders]);

  const addHandler = useCallback(
    (id, name, quantity, time, price) => {
      dispatchStore(addOrder(id, name, quantity, time, price));
      close();
    },
    [close, dispatchStore],
  );

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        // Alert.alert('Modal has been closed.');
      }}>
      {!!data && (
        <View style={[styles.wrapper]}>
          <View style={styles.container}>
            <View style={styles.imageWrapper}>
              <Image
                source={{uri: `${API}${data.image}`}}
                style={styles.image}
              />
            </View>
            <View style={styles.rightContent}>
              <View style={styles.topContent}>
                <View>
                  <Text style={styles.topContentTitleText}>
                    {data.name[language]}
                  </Text>
                  <Text style={styles.topContentWeightText}>{data.weight}</Text>
                </View>
                <TouchableOpacity onPress={close}>
                  <Image source={x_icon} style={styles.xIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.middleContent}>
                <Text style={styles.middleContentTitleText}>Ingredients</Text>
                <Text style={styles.middleContentText}>
                  {data.description[language]}
                </Text>
              </View>
              <View style={styles.bottomContent}>
                <View style={styles.bottomContentLeft}>
                  <Text>Quantity</Text>
                  <View style={styles.bottomContentQuantity}>
                    <TouchableOpacity
                      onPress={() => {
                        quantity > 1 && setQuantity(quantity - 1);
                      }}>
                      <Text>-</Text>
                    </TouchableOpacity>
                    <Text>{quantity}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        setQuantity(quantity + 1);
                      }}>
                      <Text>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.bottomContentRight}>
                  <Text style={styles.price}>
                    {price * quantity}
                    <Text style={styles.priceText}>AMD</Text>
                  </Text>
                  <TouchableOpacity
                    style={styles.bottomContentRightAdd}
                    onPress={() =>
                      addHandler(
                        data._id,
                        data.name,
                        quantity,
                        data.duration,
                        price * quantity,
                      )
                    }>
                    <Text style={styles.bottomContentAddTitle}>Add</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00000080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: '30%',
    height: '100%',
  },
  container: {
    width: '68.5%',
    height: '41.5%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  image: {
    height: '100%',
    maxWidth: '100%',
    flexGrow: 1,
    resizeMode: 'cover',
  },
  rightContent: {
    height: '100%',
    flexGrow: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  topContentTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  topContentWeightText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#8D8D8D',
    fontWeight: '500',
  },
  middleContent: {
    flexDirection: 'column',
    flexGrow: 1,
    paddingHorizontal: 24,
  },
  middleContentTitleText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    marginTop: 22,
  },
  middleContentText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#8D8D8D',
    fontWeight: 'normal',
    marginTop: 10,
  },
  bottomContent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: 30,
    paddingHorizontal: 24,
  },
  bottomContentLeft: {},
  bottomContentLeftTitle: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
  },
  bottomContentQuantity: {
    width: 88,
    height: 34,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 44,
    borderWidth: 2,
    paddingHorizontal: 11,
    marginTop: 10,
  },
  bottomContentRight: {},
  bottomContentRightAdd: {
    width: 143,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  bottomContentAddTitle: {
    color: 'white',
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  priceText: {
    fontSize: 12,
    fontWeight: '500',
  },
  xIcon: {
    width: 24,
    height: 24,
  },
});
