import {Text, View, StyleSheet, FlatList} from "react-native"

export const Flatlist = (props) => {
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

  return (
   <View style={{paddingTop:20}}>
<Text>this is flat List</Text>

<FlatList
data={employees}
renderItem={({item})=><Text>{item.name}</Text>}
keyExtractor={(item) => item.id.toString()}
/> 
   </View>

  )
}

export default Flatlist;
