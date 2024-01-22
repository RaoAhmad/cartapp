import React from 'react'
import { Text, View, StyleSheet,Image } from 'react-native';
const ProductCart = () => {
  return (
    <View>
        <Text style={StyleSheet.box}>ProductCart</Text>
     <Image style={styles.image} source={require("../images/acefyl.png")}  /> 
    
    </View>
  )
}

export default ProductCart


const styles = StyleSheet.create({

box: {
    flex: 1,
alignItems: "center",
},
image: {

    width:150,
    height:150,
    resizeMode: 'contain',
},


})