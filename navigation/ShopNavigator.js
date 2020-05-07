import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import ProductsOverviewScreen from "../screens/buying/ProductOverviewScreen";
import ProductDetailScreen from "../screens/buying/ProductDetailScreen";
import Colors from "../constants/Colors";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
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
      headerTintColor: "black",
      headerTitle: "Amazon.in",
      headerTitleStyle: {
        fontFamily: "roboto-bold",
      },
      headerBackTitleStyle: {
        fontFamily: "roboto",
      },
    },
  }
);

export default createAppContainer(ProductsNavigator);
