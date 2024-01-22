import { Text, View, StyleSheet } from 'react-native';
import Menu from '../svg/Menu'
import { SafeAreaView } from 'react-native-safe-area-context';
const Home = () => {
  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.Header}>
        
        <Menu/>
        </SafeAreaView>
        </View>
  )
}

export default Home


styles = StyleSheet.create({

container: {
flex: 1,

},
Header: {

    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal: 30,
},


})