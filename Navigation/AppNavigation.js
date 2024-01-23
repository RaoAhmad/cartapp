import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home'
import  ProductDetails from '../screens/ProductDetails'
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
  
  <Stack.Navigator >


    <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetails" component={ProductDetails}   
      />
    </Stack.Navigator>
  
 
  )
}

export default AppNavigation