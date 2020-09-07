import React, {useEffect, useState, useCallback} from 'react';
import {ScrollView, StyleSheet, View, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {HOOKAH} from '../../constants/sections';
import {ProductList} from '../../components';
import {addProducts} from '../../actions/products';
import {OrderModal} from '../../components';
import {openSlideProduct} from '../../actions/slides';

const HookahProduct = () => {
  const [loading, setLoading] = useState(true);
  const [orderModalIsVisible, setOrderModalVisibility] = useState(false);
  const [product, setProduct] = useState(null);

  const dispatchStore = useDispatch();
  const {selectedCategory, products, token, openSlide} = useSelector(
    ({categories, products, login, slides}) => ({
      selectedCategory: categories.selectedCategory,
      products: products.products,
      token: login.token,
      openSlide: slides.openSlide,
    }),
  );

  useEffect(() => {
    if (
      !products[HOOKAH] ||
      !products[HOOKAH][selectedCategory[HOOKAH]] ||
      !products[HOOKAH][selectedCategory[HOOKAH]].length
    ) {
      setLoading(true);
      dispatchStore(addProducts(token, HOOKAH, selectedCategory[HOOKAH]));
    } else {
      setLoading(false);
    }
  }, [selectedCategory, products, dispatchStore, token]);

  useEffect(() => {
    if (openSlide && openSlide.category._id === selectedCategory[HOOKAH]) {
      setProduct(openSlide);
      setOrderModalVisibility(true);
      dispatchStore(openSlideProduct(null));
    }
  }, [openSlide, selectedCategory, dispatchStore]);

  const openProduct = useCallback((product) => {
    setProduct(product);
    setOrderModalVisibility(true);
  }, []);

  return (
    <View>
      {!loading ? (
        <ScrollView style={styles.wrapper}>
          <View style={styles.container}>
            <ProductList
              data={products[HOOKAH][selectedCategory[HOOKAH]]}
              onItemPress={openProduct}
            />
          </View>
        </ScrollView>
      ) : (
        <View style={styles.loaderWrapper}>
          <ActivityIndicator size="large" />
        </View>
      )}
      <OrderModal
        isVisible={orderModalIsVisible}
        close={() => setOrderModalVisibility(false)}
        data={product}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    padding: '1.5%',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  backButton: {
    position: 'absolute',
    bottom: 50,
    left: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HookahProduct;
