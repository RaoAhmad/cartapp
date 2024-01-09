import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Text, View, Button, StyleSheet  } from 'react-native'
import Homescreen from './components/Homescreen';
import Flatlist from './components/Flatlist';

const Tab = createMaterialTopTabNavigator()
   const  App = () =>{
  
  
  return (<>
    <NavigationContainer>
    <Tab.Navigator  >
    <Tab.Screen name="Homescreen" component={Homescreen} />
    <Tab.Screen name="Flatlist" component={Flatlist}   />
    </Tab.Navigator>
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

export default App;
