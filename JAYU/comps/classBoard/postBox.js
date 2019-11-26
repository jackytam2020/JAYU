import React, {useState,useEffect} from 'react';
import {View,Text,Button, ScrollView, TouchableOpacity,AsyncStorage} from 'react-native';
import classBoardStyles from '../../styles/classBoard/classBoardStyles'
import FooterBar from '../../comps/footerBar'
import axios from 'axios';
import { withNavigation } from 'react-navigation';

function PostBox(props){
  
  var time = props.hour+":"+props.minutes+" "+props.am_pm;

  const [user, setUser] = useState({});

  var course = props.course_name;
  var question = props.description;

  const ReadUsers = async()=>{
    var u = await AsyncStorage.getItem("user");
    console.log(u);
    u = JSON.parse(u);
    setUser(u)
}

 // when comp loads, read users
 useEffect(()=>{
    ReadUsers();
},[]);

    return (
      <View style={classBoardStyles.posts}>
      <TouchableOpacity style={{flexDirection:"row", paddingLeft:10}}
        onPress={()=>{
          props.navigation.navigate('Post', {question:question, course:course, time:time, user:user.username})
        }}>
          <View style={{height:20,width:20, backgroundColor:"blue", borderRadius:40}}></View>
          <View style={{paddingLeft:10}}>  
            <Text>{props.course_name}</Text>
            <Text style={{fontSize:10}}>{time} by {user.username || ""}</Text>
          </View>  
      </TouchableOpacity>

      <View style={classBoardStyles.line} ></View>  

      <Text style={{paddingLeft: 10}}>{props.description}</Text>
  </View>
    )
};

export default withNavigation(PostBox);