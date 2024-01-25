import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button, StyleSheet} from 'react-native';
import AppNavigation from './Navigation/AppNavigation';
import { Provider } from 'react-redux';
import store from'./store/store'

const App = () => {
  

  return (
   <Provider    store={store}>
   
   <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>

    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
