import { useEffect } from "react"
import {Text, View, StyleSheet, FlatList, Image, ActivityIndicator} from "react-native"
import {useState} from "react";
export const Flatlist = (props) => {
    //getting props from Homescreen component
    console.warn(props.route.params)

    /* const employees=[
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
] */
//api data fetching
const [data, setData] = useState({});
const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const Getdata = async () =>{
    try { const url = "http://192.168.43.137:3000/users"
    let result = await fetch(url)
    const data = await result.json()
 setData(data)
 setLoading
 
} catch (error) {
    setError(error);
    setLoading(false);
}
  };


useEffect(()=>{
    Getdata();
},[])

if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error loading data</Text>
      </View>
    );
  }

  return (
   <View style={{paddingTop:20}}>
<Text>this is flat List</Text>

<FlatList
data={data}
renderItem={({item})=>
<View>
    <Text style={{fontSize:20}}>{item}</Text>
    <Text style={{fontSize:15}}>{}</Text>
   
</View>}

keyExtractor={(item) => item.id.toString()}
/> 
   </View>

  )
}

export default Flatlist;
