import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import {
  HomeScreen,
  MyOrders,
  RestaurantCategories,
  RestaurantProducts,
  BarCategories,
  BarProducts,
  HookahCategories,
  HookahProducts,
} from '../../screens';
import {Header} from '../../components';

import homeActive from '../../../assets/images/home_active.png';
import homePassive from '../../../assets/images/home_passive.png';
import restaurantActive from '../../../assets/images/restaurant_active.png';
import restaurantPassive from '../../../assets/images/restaurant_passive.png';
import hookahActive from '../../../assets/images/hookah_active.png';
import hookahPassive from '../../../assets/images/hookah_passive.png';
import cartActive from '../../../assets/images/cart_active.png';
import cartPassive from '../../../assets/images/cart_passive.png';
import barActive from '../../../assets/images/bar_active.png';
import barPassive from '../../../assets/images/bar_passive.png';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <Header title="BAMBOO" />,
        }}
      />
    </Stack.Navigator>
  );
};

const RestaurantStack = () => {
  const {t} = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Restaurant"
        component={RestaurantCategories}
        options={{
          header: () => <Header title={t('CATEGORIES')} />,
        }}
      />
      <Stack.Screen
        name="Menu"
        component={RestaurantProducts}
        options={{
          header: () => <Header title={t('CATEGORIES')} back />,
        }}
      />
    </Stack.Navigator>
  );
};

const BarStack = () => {
  const {t} = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bar"
        component={BarCategories}
        options={{
          header: () => <Header title={t('CATEGORIES')} />,
        }}
      />
      <Stack.Screen
        name="Menu"
        component={BarProducts}
        options={{
          header: () => <Header title={t('CATEGORIES')} back />,
        }}
      />
    </Stack.Navigator>
  );
};

const HookahStack = () => {
  const {t} = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Hookah"
        component={HookahCategories}
        options={{
          header: () => <Header title={t('CATEGORIES')} />,
        }}
      />
      <Stack.Screen
        name="Menu"
        component={HookahProducts}
        options={{
          header: () => <Header title={t('CATEGORIES')} back />,
        }}
      />
    </Stack.Navigator>
  );
};

const MyOrdersStack = () => {
  const {t} = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyOrders"
        component={MyOrders}
        options={{
          header: () => <Header title={t('MY ORDERS')} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#000000',
        inactiveTintColor: '#00000066',
        showLabel: false,
        style: {
          backgroundColor: '#FFFFFF',
          paddingVertical: 8,
          height: 58,
          borderTopWidth: 0,
        },
      }}
      lazy={false}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconWrapper}>
              <Image
                source={focused ? homeActive : homePassive}
                style={styles.image}
              />
              <Text style={focused ? styles.activeText : styles.passiveText}>
                {t('HOME')}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Restaurant"
        component={RestaurantStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconWrapper}>
              <Image
                source={focused ? restaurantActive : restaurantPassive}
                style={styles.image}
              />
              <Text style={focused ? styles.activeText : styles.passiveText}>
                {t('RESTAURANT')}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Bar"
        component={BarStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconWrapper}>
              <Image
                source={focused ? barActive : barPassive}
                style={styles.image}
              />
              <Text style={focused ? styles.activeText : styles.passiveText}>
                {t('BAR')}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Hookah"
        component={HookahStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconWrapper}>
              <Image
                source={focused ? hookahActive : hookahPassive}
                style={styles.image}
              />
              <Text style={focused ? styles.activeText : styles.passiveText}>
                {t('HOOKAH')}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MyOrders"
        component={MyOrdersStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconWrapper}>
              <Image
                source={focused ? cartActive : cartPassive}
                style={styles.image}
              />
              <Text style={focused ? styles.activeText : styles.passiveText}>
                {t('MY_ORDER')}
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  image: {
    width: 30,
    height: 30,
  },
  activeText: {
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    color: '#000000',
  },
  passiveText: {
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    color: '#00000066',
  },
});
