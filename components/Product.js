import {Text, View, Button } from 'react-native'
import { addToCart } from '../redux/action'
import { useDispatch } from 'react-redux'
const Product = (props) => {
  const item =props.item
  const dispacth =useDispatch();
  const handleAddToCart = (item)=> {
dispacth(addToCart(item))

  }
  return (<>
    <View  style={{ alignItems:'center', borderBottomColor:'pink', borderBottomWidth:2, padding:10 }} key={item.name} >
    <Text style={{fontSize:30 , textAlign:'center'}}>{item.name}</Text>
    <Text style={{fontSize:30, textAlign:'center'}} >{item.price}</Text>
    <Text style={{ fontSize:30, textAlign:'center'}}>{item.color}</Text>
    <Button  title='Add to Cart' onPress={()=>handleAddToCart(item) }/>
  </View>
  </>)
}

export default Product