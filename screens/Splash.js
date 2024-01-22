import { Text, View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
const Splash = () => {
const {navigate} = useNavigation()
setTimeout(() => {
navigate("Home");
}, 3000)
  return (
  <View style={{flex:1 , alignItems:'center', justifyContent:'center'}}>
     {/*  <Text>this is splash screen</Text> */}
      <LottieView style={{ width: 200, height: 200 }} source={require('../animation/medical.json')} autoPlay loop />
    </View>
  );
};

export default Splash;
  