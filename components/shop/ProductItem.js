import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableNativeFeedback,
  Button,
} from "react-native";

import Colors from "../../constants/Colors";

const ProductItem = (props) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={props.onViewDetail} useForeground>
        <View>
          <View style={styles.card}>
            <Image style={styles.image} source={{ uri: props.imageUrl }} />
            <View style={styles.textContainer}>
              <Text style={styles.textTitle}>{props.title}</Text>
              <Text style={styles.textPrice}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.button}>
              <Button
                color={Colors.secondary}
                title="  +  "
                onPress={props.onAddToCart}
              />
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 6,
    backgroundColor: Colors.primaryLight,
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 12,
    elevation: 3,
  },
  card: {
    flexDirection: "row",
    height: 115,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "white",
    overflow: "hidden",
  },
  image: {
    height: 115,
    width: 115,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    padding: 10,
    alignSelf: "stretch",
    justifyContent: "space-evenly",
  },
  textTitle: {
    fontSize: 15,
    color: "#555",
    fontFamily: "roboto-bold",
  },
  textPrice: {
    fontSize: 22,
    fontFamily: "roboto-regular",
    color: Colors.secondaryDark,
  },
  button: {
    padding: 10,
  },
});

export default ProductItem;
