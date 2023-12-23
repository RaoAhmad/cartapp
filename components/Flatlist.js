import {Text, View, StyleSheet, FlatList} from "react-native"

export const Flatlist = () => {

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
   <View>
<Text>this is flat List</Text>

<FlatList
data={employees}
renderItem={(item)=><Text></Text>}
/>
   </View>

  )
}
