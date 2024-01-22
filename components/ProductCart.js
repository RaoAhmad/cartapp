import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ProductCart = () => {
  return (
    <View style={styles.box}>
      <Text>this product detail</Text>
      <Image style={styles.image} source={require("../images/acefyl.png")} />
      <Text>this is text</Text>
    </View>
  );
}

export default ProductCart;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  }
});
