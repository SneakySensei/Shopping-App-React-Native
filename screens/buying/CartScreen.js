import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";

const CartScreen = (props) => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        id: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }
    return transformedCartItems;
  });

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.amount}>${totalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          color={Colors.primaryDark}
          title="Order Now"
          disabled={cartItems.length === 0}
        />
      </View>
      <View>
        <Text>Cart Items</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: "stretch",
    flex: 1,
    backgroundColor: "white",
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 5,
  },
  summaryText: {
    fontFamily: "roboto-bold",
    fontSize: 18,
  },
  amount: {
    fontFamily: "roboto-regular",
    fontSize: 18,
    color: Colors.secondaryDark,
  },
});
export default CartScreen;
