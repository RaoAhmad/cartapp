import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ProductCart = (props) => {
  const {item } = props;

  return (
    <View style={styles.box}>
     
      <Image style={styles.image} source={require("../images/acefyl.png")} />
      <Text style={styles.currency}>${item.price}</Text>
      <Text style={styles.title}> Acefyl</Text>
    </View>
  );
}

export default ProductCart;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    padding:20,
    margin: 5,
  },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 24,
  fontWeight: 'bold',
  },
  currency: {
    fontSize: 18,
  },
});
