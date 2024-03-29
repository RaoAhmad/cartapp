import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home'
import  ProductDetails from '../screens/ProductDetails'
import Medicare from '../screens/Medicare';
import Header from '../screens/Header';
/* 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; */
const Stack = createNativeStackNavigator();
/* const Tab = createBottomTabNavigator(); */
const AppNavigation = () => {

  return (
  
  <Stack.Navigator >


    <Stack.Screen name="Medicare" component={Medicare} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetails" component={ProductDetails}   
        />
    </Stack.Navigator>
  
 
  )
}

export default AppNavigation