import React from 'react'
import {Text, View , StyleSheet} from 'react-native'

const Flexbox = () => {
  return (
   <View  style={styles.main} >
    <Text style={{fontSize:40}}>this flex box</Text> 
    <View style={styles.box1}></View>
    <View style={styles.box2}></View>
    <View style={styles.box3}></View>
</View>
  )
}


const  styles= StyleSheet.create({

main :{
    flex: 1
},
box1 :{
    flex: 1,
    backgroundColor:'blue'
},
box2 :{
    flex: 1,
    backgroundColor:'green'
},
box3 :{
    flex: 1,
    backgroundColor:'red'
}
})
export default Flexbox