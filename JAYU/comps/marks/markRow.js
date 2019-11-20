import React,{useState} from 'react';
import { View,Text,Button, ScrollView, TouchableOpacity} from 'react-native';
import markStyles from '../../styles/marks/markStyles';

function MarksRow({value}){
  return (
           <View style={markStyles.inputRow}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity></TouchableOpacity>
                    <Text style={markStyles.markName}
                    onPress={()=>{
                                                
                    }}
                    >{value}</Text>
                </View>
                <Text style={markStyles.markName}>100/100</Text>
            </View>
  );
};
export default MarksRow;
