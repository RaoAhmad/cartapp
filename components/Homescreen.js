import {useState} from 'react'
import {Text, View, Button, TextInput} from "react-native"

const Homescreen=({ navigation })=> {
    const [name, setName ] = useState('')
    console.warn(name)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TextInput
        onChangeText ={(text)=>setName(text)}
        placeholder="Enter your text"
        />
        <Button
          title="Go to Flatlist"
          onPress={() => navigation.navigate("Flatlist",{name})}
        />
      </View>
    );
  }
  
  export default Homescreen ;