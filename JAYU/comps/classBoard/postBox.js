import React, {useState,useEffect} from 'react';
import {View,Text,Button, ScrollView, TouchableOpacity,AsyncStorage} from 'react-native';
import classBoardStyles from '../../styles/classBoard/classBoardStyles'
import FooterBar from '../../comps/footerBar'
import axios from 'axios';
import { withNavigation } from 'react-navigation';

function PostBox(props){
  
  var time = props.hour+":"+props.minutes+" "+props.am_pm;

  const [user, setUser] = useState({});
  const [color, setColor] = useState("");

  var course = props.course_name;
  var question = props.description;
  var c = props.course_color;
  var s = props.course_symbol;
  var id = props.id;

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
      <View style={[classBoardStyles.posts, {backgroundColor:props.course_bg}]}>
      <TouchableOpacity style={{flexDirection:"row", paddingLeft:10}}
        onPress={()=>{
          props.navigation.navigate('Post',{
            question:question, 
            course:course, 
            time:time, 
            user:user.username, 
            id:id, 
            course_color:props.course_color,
            course_symbol:props.course_symbol,
            course_bg: props.course_bg
          })
        }}>
          <Text style={{fontSize:25,   fontFamily:"SFProDisplay-Medium",color:props.course_color}}>{props.course_symbol}</Text>
          <View style={{paddingLeft:10}}>  
            <Text style={{color:props.course_color}}>{props.course_name}</Text>
            <Text style={{fontSize:10}}>{time} by {user.username || ""}</Text>
          </View>  
      </TouchableOpacity>

      <View style={classBoardStyles.line} ></View>  

      <Text style={{paddingLeft: 10}}>{props.description}</Text>
  </View>
    )
};

export default withNavigation(PostBox);