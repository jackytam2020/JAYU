import React,{useState} from 'react';
import { View,Text,Button, ScrollView, TouchableOpacity} from 'react-native';
import markStyles from '../../styles/marks/markStyles';

function MarksRow({mark_name, score,outof}){
  return (
    <View style={markStyles.inputRow}>
          <View style={{flexDirection:'row'}}>
              <Text style={markStyles.markName}
              onPress={()=>{
                  // setSlideup(true)
                  //props.navigation.navigate("EditMark", {markName:markName, score:score, outof:outof})
              }}
              >{mark_name}</Text>
          </View>
          <Text style={markStyles.markName}>{score}/{outof}</Text>
      </View> 
  );
};
export default MarksRow;
