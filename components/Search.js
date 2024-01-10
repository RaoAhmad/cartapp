import {Text, View, TextInput} from 'react-native'


const Search = () => {
const Searchuser=(text)=>{
  const url =""
}
  return (
    <View style={{flex:1, justifyContent:"top", marginTop:20}}>

        <TextInput     
         placeholder=' search...'
          style={{ borderColor:"skyblue", borderWidth:2 }} 
        onChange={(text)=>Searchuser(text)}
        />
        <Text style={{textAlign:"center"}}>Search</Text>
    </View>
  )
}

export default Search