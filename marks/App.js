import React from 'react';
import { View,Text,StatusBar} from 'react-native';
import Marks from './comps/marks';
import markStyles from './styles/markStyles'

function App(){
  return (
    <View style={{flex:1}}>
      <Marks />
    </View>
  );
};
export default App;
