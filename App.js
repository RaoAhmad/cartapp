/* import { StatusBar } from 'expo-status-bar'; */
import { StyleSheet, Text, View ,StatusBar , Platform} from 'react-native';
/* import Flexbox from './components/Flexbox */

/* import Flatlist from './components/Flatlist';
import Showhide from './components/Showhide'; */
export default function App() {
  return (
    <View style={styles.container}>
     {/*  <Text style={{fontSize:30}}>hi expo!</Text> */}
      <StatusBar backgroundColor="purple" />
      <Text>Platform:{Platform.OS}</Text>
    {/*  <Flatlist/> */}
{/*  <Showhide/> */}

{/* <Flexbox/> */}
    </View>
  

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
