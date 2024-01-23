import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Menu from '../svg/Menu'
import Dot from '../svg/Dot';
import ProductCart from '../components/ProductCart';
import { FlatList } from 'react-native';
import { medicanData } from '../Data/Data';
import { TouchableOpacity } from 'react-native';
import Animated, { FadeIn, FadeInDown, FadeInLeft, FadeInRight } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
const {navigate} = useNavigation()
     const renderItem = ({item, index}) =>{
        return(<>
        <Animated.View  entering={FadeInDown.delay(index*100).duration(600).springify().damping(15)}>
<TouchableOpacity  onPress={()=>navigate("ProductDetails", { data: item})}>
<ProductCart  item={item}/> 
</TouchableOpacity>
</Animated.View>

</>
        )
     }


return (<>
    <View style={styles.container}>
        <SafeAreaView >
        <View style={styles.Header}>
        {/* header */}
        <Animated.View  entering={FadeInLeft.delay(100).duration(400)}>
      <Menu/>
       </Animated.View>
        <Animated.View  entering={FadeInRight.delay(100).duration(400)}>
        <Dot/>
        </Animated.View>
        </View>
        </SafeAreaView>
        <View  style={styles.bodyContainer}>
 <Animated.Text  style={styles.title}   entering={FadeInRight.delay(200).duration(500)}>Medicanes</Animated.Text>
    <Animated.Text style={styles.subTitle} entering={FadeInRight.delay(200).duration(500)}>Here You Will Find all Kind Medicanes</Animated.Text>
 
 </View>
{/*  <ProductCart/>  */}
<FlatList   
data={medicanData}
keyExtractor={(item) =>`${item.id}`}
renderItem={renderItem}
numColumns={2}
contentContainerStyle={styles.contentContainerStyle}
showsVerticalScrollIndicator={false}
/>

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
    contentContainerStyle:{
alignItems: "center",
    }
    })

