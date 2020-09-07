import React, {useEffect, useCallback} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import {openSlideProduct} from '../actions/slides';
import {TRANSPARENT, WHITE, BLACK_0x40} from '../utils/colors';
import {OPENSANCE_BOLD} from '../utils/fonts';
import {Sales, Loading} from '../components';
import {addSlides} from '../actions/slides';
import {API} from '../service';
import {mapIndex2name} from '../utils';

function HomeScreen() {
  const {navigate} = useNavigation();
  const dispatchStore = useDispatch();
  const {slides, language, token} = useSelector(
    ({slides, language, login}) => ({
      slides: slides.slides,
      language: language.language,
      token: login.token,
    }),
  );

  useEffect(() => {
    dispatchStore(addSlides(token));
  }, [token, dispatchStore]);

  const open = useCallback(
    (slide) => {
      dispatchStore(openSlideProduct(slide.product));
      navigate(mapIndex2name(slide.product.category.section));
    },
    [navigate, dispatchStore],
  );

  return (
    <View style={styles.wrapper}>
      {slides && slides.length ? (
        <Swiper
          showsButtons={true}
          dotColor={BLACK_0x40}
          activeDotColor={WHITE}
          nextButton={
            <View style={styles.nextButton}>
              <Text style={[styles.swiperButtons, styles.nextButtonText]}>
                ›
              </Text>
            </View>
          }
          prevButton={
            <View style={styles.prevButton}>
              <Text style={[styles.swiperButtons, styles.prevButtonText]}>
                ‹
              </Text>
            </View>
          }>
          {slides.map((slide) => (
            <View style={styles.slide} key={slide.number.toString()}>
              <Image
                style={styles.image}
                source={{
                  uri: `${API}/${
                    slide.image ? slide.image : slide.product.image
                  }`,
                }}
              />
              <View style={styles.sliderContent}>
                <Sales
                  slide={slide}
                  language={language}
                  onPress={() => open(slide)}
                />
              </View>
            </View>
          ))}
        </Swiper>
      ) : (
        <Loading />
      )}
      {!!slides.length && <Text style={styles.text}>Sales For Today</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: TRANSPARENT,
    flexDirection: 'column',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: WHITE,
    fontSize: 40,
    position: 'absolute',
    top: 28,
    fontFamily: OPENSANCE_BOLD,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  swiperButtons: {
    fontSize: 70,
    fontWeight: '200',
    color: WHITE,
  },
  prevButton: {
    width: 88,
    height: 88,
    backgroundColor: '#1F1F1F40',
    borderRadius: 100,
    position: 'relative',
    left: -54,
  },
  nextButton: {
    width: 88,
    height: 88,
    backgroundColor: '#1F1F1F40',
    borderRadius: 100,
    position: 'relative',
    right: -54,
  },
  prevButtonText: {
    position: 'absolute',
    right: 15,
  },
  nextButtonText: {
    position: 'absolute',
    left: 15,
  },
});

export default HomeScreen;
