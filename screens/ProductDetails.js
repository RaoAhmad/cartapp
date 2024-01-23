import { Text, View, StyleSheet ,Image, ScrollView} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';
import { suggestProduct } from '../Data/suggestProduct';
const ProductDetails = () => {
  const {params} = useRoute();
  /* here we are getting data from params and params have data in data array */
  return (
    <View   style={styles.container}>
<ScrollView>
      <View style={styles.backgound}>
<SafeAreaView/>
    
      <Animated.Image     sharedTransitionTag={`T${params.data.id}`}   source={params.data.image}   style={styles.image}/>
   </View>
   <View style={styles.bodyContainer}>
    <View style={styles.box}>

<Animated.Text entering={FadeInLeft.delay(200).duration(400)}   style={styles.title}>{params.data.name}</Animated.Text>
<View  style={styles.inerBox}>
< Animated.Text entering={FadeInRight.delay(200).duration(400)} style={styles.price}>
  <Text style={styles.currency}>$</Text>
{params.data.price}
</Animated.Text>
<Animated.Text entering={FadeInRight.delay(200).duration(400)} style={styles.rating}>⭐{params.data.rating}</Animated.Text>
</View>

</View>
{/* Description */}
<Text style={styles.description}>{params.data.description}</Text>
<TouchableOpacity style={styles.btn}>
<Text style={styles.btnTitle}>Shop Now</Text>
</TouchableOpacity>
{/* suggested products */}

<Text style={styles.suggestTitle}>suggested Products</Text>
<View style={styles.suggestProduct} >
{
  suggestProduct.map((value, index) =>{

    return(
      <View key={value.id}>
        <Image style={styles.suggustImage}   source={value.image}/>
        <Text style={styles.suggestProductTitle}>{value.name}</Text>
      </View>
      
    )
  })
  
}
</View>
</View>
</ScrollView>
    </View>
  )
}

export default ProductDetails ;

const styles = StyleSheet.create({

  container: {
    flex: 1,

  },
  backgound:{
    height: 250,
    borderBottomRightRadius:50,
    borderBottomLeftRadius:50,
    backgroundColor: 'lightgray',


  },
  image: {
height: 200,
width: 200,
paddingTop: 10,
resizeMode: 'contain',
alignSelf: 'center',
  },

bodyContainer: {paddingHorizontal:20,
flex: 1,
paddingTop: 20,


},
box: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},
title: {
  fontSize: 24,
  color: '#000',
  fontWeight: 'bold',
},
 price: {
  fontSize: 24,
  color: '#000',
  fontWeight: 'bold',
 },
currency: {
  color: '#24a8af',
},
inerBox: {
  alignItems: 'center',
},
rating: {
  
  fontSize: 18,
  color: '#000',
},
description: {
  fontSize: 16,
  color: '#000',
  marginVertical:20,
},
btn:{
  backgroundColor:'#24a8af',
   width:'30%',
  padding:10,
  alignItems: 'center',
  borderRadius:10,
},
btnTitle: {
     fontSize: 15,
     color:'#fff',

},
suggestProduct:{
  flexDirection: 'row',
  justifyContent:'center',
  justifyContent:'space-between',
marginBottom:20,
marginTop:20,
},
suggestTitle:{
  fontSize: 24,
  color:'#000',
  marginTop:20,
  fontWeight:'bold',
  
},
suggustImage:{
  width:100,
  height:100,
  resizeMode:'contain'
},
suggestProductTitle:{
  fontSize: 16,
  color:'#000',
  fontWeight:'bold',
  textAlign:'center',
}

})