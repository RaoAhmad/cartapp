import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import  Animated from 'react-native-reanimated';
const ProductCart = (props) => {
  const {item } = props;

  return (
    <View style={styles.box}>
     
      <Animated.Image  sharedTransitionTag={`T${item.id}`} style={styles.image} source={item.image} />
      <Text style={styles.currency}>${item.price}</Text>
      <Text style={styles.title}> {item.name}</Text>
    </View>
  );
}

export default ProductCart;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
  /*   padding:20, */
     margin: 5,
  },
  image: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 14,
  fontWeight: 'bold',
  },
  currency: {
    fontSize: 18,
  },
});
