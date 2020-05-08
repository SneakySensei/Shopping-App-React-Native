import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import ProductsOverviewScreen from "../screens/buying/ProductOverviewScreen";
import ProductDetailScreen from "../screens/buying/ProductDetailScreen";
import Colors from "../constants/Colors";
import CartScreen from "../screens/buying/CartScreen";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
  },
  {
    defaultNavigationOptions: {
      headerBackground: () => (
        <LinearGradient
          colors={[Colors.primary, "#b9f6ca"]}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      ),
      headerTintColor: "#222",
      headerTitle: "Amazon.in",
      headerTitleStyle: {
        fontFamily: "roboto-bold",
      },
      headerBackTitleStyle: {
        fontFamily: "roboto-regular",
      },
    },
  }
);

export default createAppContainer(ProductsNavigator);
