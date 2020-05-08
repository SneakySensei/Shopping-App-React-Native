import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import * as cartActions from "../../store/actions/cartAction";

const ProductDetailScreen = (props) => {
  const productId = props.navigation.getParam("productId");
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );
  const dispatch = useDispatch();
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Text style={styles.title}>{selectedProduct.title}</Text>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: selectedProduct.imageUrl }}
      />
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <View style={styles.actions}>
        <Button
          style={{ fontFamily: "roboto-regular" }}
          title="Add to Cart"
          onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct));
          }}
        />
      </View>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    color: "#777",
    paddingHorizontal: 15,
    fontFamily: "roboto-regular",
  },
  image: {
    marginTop: 10,
    width: "100%",
    height: 200,
  },
  price: {
    paddingHorizontal: 15,
    fontSize: 34,
    color: "#333",
    paddingVertical: 10,
    fontFamily: "roboto-bold",
  },
  description: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    textAlign: "center",
    fontFamily: "roboto-regular",
  },
  actions: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
export default ProductDetailScreen;
