/* /* 
import {Text, View, Button } from 'react-native'
import {useSelector} from 'react-redux'
import React, { useState, useEffect} from 'react'


const Header = () => {
 const cartData = useSelector((state)=>state.reducer)

 const [cartItems, setCartItems] = useState( 0)
console.warn(cartItems)
 useEffect(()=>{
  console.warn('Cart data changed. New length:', cartData.length);
  setCartItems(cartData.length)
 },[cartData])
  return (
<View>
    <Text  style={{textAlign:'right', fontSize:30, backgroundColor:'orange', paddingTop:10 }}>{cartItems}</Text>
</View>
  )
}

export default Header */

import {Text, View, Button } from 'react-native'
import {useSelector} from 'react-redux'
import React, { useState, useEffect} from 'react'
export default  Header = () => {
  const cartData = useSelector((state) => state.reducer);
  const [cartItems, setCartItems] = useState(0);
;

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);

  return (
    <View>
      <Text style={{ textAlign: 'right', fontSize: 30, backgroundColor: 'orange', paddingTop: 10 }}>{cartItems}</Text>

    </View>
  );
};
 