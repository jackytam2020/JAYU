import React, {useState, useEffect} from 'react';
import {View,Text, Button,TextInput, TouchableOpacity} from 'react-native';
import composeStyle from '../../styles/classBoard/compostPostStyles'
import PostBox from './postBox';
import Classboard from './classboard';
import axios from 'axios';

function CompostPost(props){
    const [value, setValue] = useState("Write your discussion...")


  var setPostBox = props.navigation.getParam("setPostBox");
  var postBox = props.navigation.getParam("postBox");
  var setEmptyPost = props.navigation.getParam("setEmptyPost");
  
  var date, am_pm, hour, minutes, seconds, fullTime;

  hour = new Date().getHours();
  minutes = new Date().getMinutes(); //Current Minutes
  
  if(hour<= 11){
    am_pm= 'AM';
  }
  else {
    am_pm= 'PM'
  }

  //convert to 12 hour formate
  if(hour > 12){
    hour = hour -12;
  }
  if(hour == 0){
    hour = 12;
  }
  if(minutes < 10){
    minutes = 0 + minutes.toString();
  }
  var time = hour+":"+minutes+" "+am_pm;

  //add to database

  var course_name = props.navigation.getParam("course");
  var description = "";

  const CreatePosts = async()=>{
    //fetch db to create users
    console.log("Created Post");
    var obj = {
        key: "classboard_create",
        data:{
            course_name:course_name,
            course_color: props.navigation.getParam("colorPass"),
            course_symbol: props.navigation.getParam("classSymbol"),
            course_bg: props.navigation.getParam("classBg"),
            description:description,
            hour:hour,
            minutes:minutes,
            am_pm:am_pm
        }
    }
    var r = await axios.post('https://jayu-d3.herokuapp.com/post', obj);
    console.log("Create", r.data);    
    ReadPosts();
}

const ReadPosts = async()=>{
  var obj = {
      key:"classboard_read",
      data:{}
  }

  var r = await axios.post('https://jayu-d3.herokuapp.com/post', obj);

  var dbusers = JSON.parse(r.data.body);
  console.log("Read", dbusers);
  setPostBox(dbusers.data); 
}
  return (
      <View style={composeStyle.container}>
          <View style={composeStyle.navBar}>
            <TouchableOpacity
                  onPress={()=>{
                      props.navigation.goBack() }}>
                    <Text style={{fontSize:20, marginLeft:20, color:'#007AFF'}}>back</Text>
              </TouchableOpacity>
                  <View style={{position:'absolute', left:'35%'}}>
                    <Text style={{fontSize:25}}>New Post</Text>
                  </View>
          </View>

          {/* Post Details */}
          <View style={composeStyle.detailContainer}>
              <View style={composeStyle.leftDetail}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontSize:25, marginRight:20, marginLeft:25, color:props.navigation.getParam("colorPass")}}>{props.navigation.getParam("classSymbol")}</Text>
                        <Text style={{fontSize:20,color:props.navigation.getParam("colorPass")}}>{props.navigation.getParam("course")}</Text>
                  </View>
                  <View style={{flexDirection:'row', marginLeft:20}}>
                        <Button title={'Camera'}
                          onPress={()=>{
                          }}
                        />
                        <Button title={'Gallery'}/>
                        <Button title={'Attach'}/>
                  </View>
                  
              </View>
              <View style={composeStyle.rightDetail}>
                    <TouchableOpacity style={{height:30,width:30, backgroundColor:"#007aff", borderRadius:40}}
                          onPress={()=>{
                            CreatePosts();
                            setEmptyPost("none")
                            props.navigation.navigate('Classboard', 
                            {course:course_name, 
                              comments:description,
                              hour:hour,
                              minutes:minutes,
                              am_pm:am_pm,
                              colorPass: props.navigation.getParam('colorPass'), 
                              classSymbol: props.navigation.getParam('classSymbol')
                            });
                         }}>
                    </TouchableOpacity>
                    <Text style={{color:'#007aff'}}>Post</Text>
              </View>
          </View>

          <View style={composeStyle.line}></View>

          {/* Text Box*/}
          <View style={composeStyle.textBoxContainer}>
              <TextInput
                placeholder="Write Your Discussion"
                onChangeText={(text) => {description = text}}
                style={{marginLeft:20}}
                multiline={true}
              />
          </View>
      </View>
    )
  }
export default CompostPost;
