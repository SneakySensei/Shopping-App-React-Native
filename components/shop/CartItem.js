import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CartItem = (props) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity} </Text>
        <Text style={styles.mainText}>{props.title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>{props.amount.toFixed(2)}</Text>
        <TouchableNativeFeedback onPress={props.onRemove}>
          <Ionicons
            style={styles.deleteButton}
            name="md-trash"
            size={23}
            color="red"
          />
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontFamily: "roboto-regular",
    color: "#888",
    fontSize: 16,
  },
  mainText: {
    fontFamily: "roboto-bold",
    fontSize: 16,
  },
  deleteButton: {
    marginLeft: 20,
  },
});
export default CartItem;
