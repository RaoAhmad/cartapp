import { useEffect } from "react"
import {Text, View, StyleSheet, FlatList, Image} from "react-native"
import {useState} from "react";
export const Flatlist = (props) => {
    //getting props from Homescreen component
    console.warn(props.route.params)

    const employees=[
        {
           id:1,
           name: 'Ashraf',
},
{
    id:2,
    name: 'Asif',


},
{
    id:3,
    name: 'Umer',


}
]
//api data fetching
const [data, setData] = useState('');
const Getdata = async () =>{
    const url ='https://fakestoreapi.com/products'
    const result = await fetch(url)
    const data = await result.json(result)
 setData(data)
}
useEffect(()=>{
    Getdata();
},[])
  return (
   <View style={{paddingTop:20}}>
<Text>this is flat List</Text>

<FlatList
data={data}
renderItem={({item})=>
<View>
    <Text style={{fontSize:20}}>{item.title}</Text>
    <Text style={{fontSize:15}}>{item.description}</Text>
  {/*   <Image style={{fontSize:10}}>Price:${item.image}</Image> */}
    <Text style={{fontSize:10}}>Price:${item.price}</Text>
</View>}

keyExtractor={(item) => item.id.toString()}
/> 
   </View>

  )
}

export default Flatlist;
