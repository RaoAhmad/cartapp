import React, { useState } from 'react'
import {Text, View, Button} from 'react-native'
const Showhide = () => {
    const [show, setShow] = useState(true)
  return (
    <View>
<Text style= {{fontSize:30}}>
Showhide
</Text>
<Button  title='Hide Component' onPress={()=> setShow(!show)} />
 {
show  ? <User /> : null
}
 
    </View>
  )
}

export default Showhide

export  const User=()=>{
return(
    <View>
<Text style={{fontSize:30 , color:"red"}}>this is a User</Text>

    </View>
)

}