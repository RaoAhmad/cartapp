import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

const Search = () => {
  const [data, setData] = useState([]);

  const searchUser = async (text) => {
    const url = `https://fakestoreapi.com/users?q=${text}`;
    let result = await fetch(url);
    let dat = await result.json();
  
    if (dat) {
      setData(dat);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'top', marginTop: 20 }}>
      <TextInput
        placeholder="Search..."
        style={{ borderColor: 'skyblue', borderWidth: 2 }}
        onChangeText={(text) => searchUser(text)}
      />
      <Text style={{ textAlign: 'center' }}>Search</Text>

      {data.length
        ? data.map((item, index) => (
            <View key={index}>
              <Text>{item.name.firstname}</Text>
            </View>
          ))
        : null}
    </View>
  );
};

export default Search;
