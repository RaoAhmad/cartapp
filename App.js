import React from 'react';
import { Text, View, Button, StyleSheet, ScrollView } from 'react-native';
import  store  from './redux/store'; 
import Product from './components/Product';
import Header from './components/Header';
import { Provider } from 'react-redux';

const App = () => {
  const product = [
    {
      name: 'oppo',
      color: 'red',
      price: 20,
      
    },
    {
      name: 'vivo',
      color: 'Black',
      price: 30,
      
    },
    {
      name: 'apple',
      color: 'gray',
      price: 40,
      
    },
  ];

  return (
    <>
    <Provider store={store}>
        <View style={styles.container}>
          <Text style={{ paddingTop: 50 }}>This is a UI component</Text>
          <Header />
          <ScrollView>
            {product.map((item,index) => (
              <Product key={index} item={item} />
            ))}
          </ScrollView>
        </View>
   </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
