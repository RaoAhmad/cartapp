import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Menu from '../svg/Menu'
import Dot from '../svg/Dot';
import ProductCart from '../components/ProductCart';
const Home = () => {
  return (<>
    <View style={styles.container}>
        <SafeAreaView >
            <View style={styles.Header}>
        {/* header */}
        <Menu/>
        <Dot/>
        </View>
        </SafeAreaView>
        <View  style={styles.bodyContainer}>
 <Text style={styles.title}>Medicanes</Text>
    <Text style={styles.subTitle}>Here You Will Find all Kind Medicanes</Text>
 
 </View>
 <ProductCart/> 
        </View>



 </>
  )
}

export default Home
const styles = StyleSheet.create({

    container: {
    flex: 1,
    
    },
    Header: {
    
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingHorizontal: 30,
    },
    title: {
    fontSize:30,
    color: '#000',
    fontWeight:'bold',
    
    
    },
    subTitle: {
        fontSize:15,
    
    },
    bodyContainer:{
    
        paddingHorizontal: 30,
        marginTop:20,
    },
    })

