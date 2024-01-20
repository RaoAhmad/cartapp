import {Text, View, Button } from 'react-native'
import { addToCart , removeFromCart } from '../redux/action'
import { useDispatch ,useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
const Product = (props) => {
  const product =props.item

  

  /* console.warn (props.item.name)     */          
  const dispatch =useDispatch();
  const handleAddToCart = (product)=> {
dispatch(addToCart(product))
/* console.warn(product) */
  }
  const handleRemoveFromCart = (product)=> {
  dispatch(removeFromCart(product.name))
}

  cartItems = useSelector((state)=> state.reducer)

const [isAdded, setIsAdded] = useState(false)

  useEffect(()=>{
 if( cartItems && cartItems.length){
  cartItems.forEach((cartItem)=>{
if (cartItem.name === product.name){
setIsAdded(true);
}
  })
 }
  },[cartItems])

  return (<>
    <View  style={{ alignItems:'center', borderBottomColor:'pink', borderBottomWidth:2, padding:10 }} key={product.name} >
    <Text style={{fontSize:30 , textAlign:'center'}}>{product.name}</Text>
    <Text style={{fontSize:30, textAlign:'center'}} >{product.price}</Text>
    <Text style={{ fontSize:30, textAlign:'center'}}>{product.color}</Text>
    {

      isAdded ?  <Button  title='Remove to Cart' onPress={()=>handleRemoveFromCart(product)}/>
      :  <Button  title='Add to Cart' onPress={()=>handleAddToCart(product)}/>
    }
   
  </View>
  </>)
}

export default Product