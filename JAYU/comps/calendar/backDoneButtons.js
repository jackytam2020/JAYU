import React,{useState} from 'react';
import { View,Text,Button, TextInput, TouchableOpacity, DatePickerIOS} from 'react-native';
import backDoneStyles from '../../styles/calendar/backDoneStyles';

function BackDone(){
   
  return (
    <View style={backDoneStyles.container}>
        <View style={backDoneStyles.back}>
            <Text style={{fontSize:20}}>Cancel</Text>
        </View>
        <View style={backDoneStyles.done}>
            <Text style={{fontSize:20}}>Done</Text>
        </View> 
    </View>
  );
};
export default BackDone;
