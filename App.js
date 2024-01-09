
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Flatlist from './components/Flatlist';





const Stack = createNativeStackNavigator();
export default function App() {
  const app=()=>{
    console.warn('hello app');
  }
  
  return (<>
    {/* <View style={styles.container}>
     <Text style={{fontSize:30}}>hi expo!</Text> 
      <StatusBar backgroundColor="purple" />
      <Text>Platform:{Platform.OS}</Text>
   
    </View> */}
    <NavigationContainer>
    <Stack.Navigator  
     screenOptions={{
        headerStyle:{
          backgroundColor: 'green',
             /* for all screen header design chage */
        }
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Flatlist" component={Flatlist}   
       options={{
        headerTitle:()=><Button   onPress={app} title="left"/>,
        headerStyle:{
          backgroundColor: 'green',
          /* for signle screen header design chage */
        }
      }}/>
    </Stack.Navigator>
  </NavigationContainer>
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
    colour: '#fff',
    paddingTop:60,
    
    },
 
});

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Flatlist"
        onPress={() => navigation.navigate("Flatlist",{name: "Ahmad"})}
      />
    </View>
  );
}
