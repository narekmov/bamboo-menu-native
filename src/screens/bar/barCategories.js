import React, {useEffect, useCallback} from 'react';
import {View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {BAR} from '../../constants/sections';
import {CategoryList} from '../../components/categoryList';
import {Header} from '../../components/header';
import {useTranslation} from 'react-i18next';
import {addCategories} from '../../actions/categories';
import {setSelectedCategory} from '../../actions/categories';
import {useNavigation} from '@react-navigation/native';

const BarCategories = () => {
  const {t} = useTranslation();
  const {token, categories, openSlide} = useSelector(
    ({categories, login, slides}) => ({
      categories: categories.categories,
      token: login.token,
      openSlide: slides.openSlide,
    }),
  );
  const dispatchStore = useDispatch();
  const {navigate} = useNavigation();

  useEffect(() => {
    dispatchStore(addCategories(token, BAR));
  }, [dispatchStore]);

  useEffect(() => {
    if (openSlide && openSlide.category.section === BAR) {
      openProducts(openSlide.category);
    }
  }, [openSlide]);

  const openProducts = useCallback(
    (category) => {
      dispatchStore(setSelectedCategory(BAR, category._id));
      navigate('Menu');
    },
    [navigate, dispatchStore],
  );

  return (
    <View style={styles.content}>
      {categories && categories[BAR] && categories[BAR].length ? (
        <ScrollView style={styles.wrapper}>
          <View style={styles.container}>
            <CategoryList data={categories[BAR]} onItemPress={openProducts} />
          </View>
        </ScrollView>
      ) : (
        <View style={styles.loaderWrapper}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    flexGrow: 1,
    paddingHorizontal: '1.5%',
    paddingTop: '1.5%',
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
});

export default BarCategories;
