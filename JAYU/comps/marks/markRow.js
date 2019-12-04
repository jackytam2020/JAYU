import React,{useState,useEffect} from 'react';
import { View,Text,Button, ScrollView, TouchableOpacity} from 'react-native';
import markStyles from '../../styles/marks/markStyles';
import { withNavigation } from 'react-navigation';
import axios from 'axios';

function MarksRow(props){

  var courseDeleteKey = props.courseDeleteKey;
  var courseUpdateKey = props.courseUpdateKey;
  var ReadMarks = props.ReadMarks;
  var classname = props.classname;

  const DeleteMark = async()=> {
    var obj = {
        key: courseDeleteKey,
        data:{
            id:props.id
        }
    };
    var r = await axios.post('https://jayu-d3.herokuapp.com/post', obj);
    ReadMarks();
}


  return (
    <View style={markStyles.inputRow}>
          <View style={{flexDirection:'row'}}>
              <TouchableOpacity 
              style={props.cancel} 
              onPress={()=>{
                DeleteMark() 
                }}></TouchableOpacity>
              <Text style={markStyles.markName}
              onPress={()=>{
                  props.navigation.navigate("EditMark", 
                  {id:props.id, markName:props.mark_name, score:props.score, outof:props.outof, weight:props.weight, courseUpdateKey:courseUpdateKey, ReadMarks:ReadMarks, classname:classname})
              }}
              >{props.mark_name}</Text>
          </View>
          <Text style={markStyles.markName}>{props.score}/{props.outof}</Text>
      </View> 
  );
};
export default withNavigation(MarksRow);
