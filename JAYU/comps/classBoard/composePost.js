import React, {useState, useEffect} from 'react';
import {View,Text, Button,TextInput, TouchableOpacity} from 'react-native';
import composeStyle from '../../styles/classBoard/compostPostStyles'
import PostBox from './postBox';
import Classboard from './classboard';


function CompostPost(props){
    const [value, setValue] = useState("Write your discussion...")


  var courseName = props.navigation.getParam("course");
  var setPostBox = props.navigation.getParam("setPostBox");
  var postBox = props.navigation.getParam("postBox");
  var setEmptyPost = props.navigation.getParam("setEmptyPost");

  var date, dayState, hour, minutes, seconds, fullTime;

  hour = new Date().getHours();
  minutes = new Date().getMinutes(); //Current Minutes
  
  if(hour<= 11){
    dayState= 'AM';
  }
  else {
    dayState= 'PM'
  }

  //convert to 12 hour formate
  if(hour > 12){
    hour = hour -12;
  }
  if(hour == 0){
    hour = 12;
  }
  if(minutes < 10){
    minutes = '0' + minutes.toString();
  }
  var time = hour+":"+minutes+" "+dayState;
  return (
      <View style={composeStyle.container}>
          <View style={composeStyle.navBar}>
            <TouchableOpacity
                  onPress={()=>{
                      props.navigation.goBack() }}>
                    <Text style={{fontSize:20, marginLeft:20, color:'#007AFF',  fontFamily:'SFProDisplay-Regular'}}>􀆉 Back</Text>
              </TouchableOpacity>
                  <View style={{position:'absolute', left:'35%'}}>
                    <Text style={{fontSize:25}}>New Post</Text>
                  </View>
          </View>

          {/* Post Details */}
          <View style={composeStyle.detailContainer}>
              <View style={composeStyle.leftDetail}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                        <View style={{height:25,width:25, marginRight:20, marginLeft:25, backgroundColor:props.navigation.getParam("colorPass"), borderRadius:40}}></View>
                        <Text style={{fontSize:15,color:props.navigation.getParam("colorPass")}}>{props.navigation.getParam("course")}</Text>
                  </View>
                  <View style={{flexDirection:'row', marginLeft:40, marginTop:10, fontFamily:'SFProDisplay-Medium',}}>
                    <Text style = {{ fontFamily:'SFProDisplay-Regular',fontSize:30, marginRight:20,}}>􀌞</Text>
                    <Text style = {{ fontFamily:'SFProDisplay-Regular', fontSize:30,marginRight:20,}}>􀏅</Text>
                    <Text style = {{ fontFamily:'SFProDisplay-Regular',fontSize:30}}>􀉢</Text>
                
                  </View>
                  
              </View>
              <View style={composeStyle.rightDetail}>
                    <TouchableOpacity style={{height:30,width:30, backgroundColor:"#007aff", borderRadius:40}}
                          onPress={()=>{
                            var arr = postBox;
                              arr.push(1);
                              arr = arr.map((o)=>{
                                  return o;
                              })
                              setPostBox(arr)
                              setEmptyPost("none")
                            props.navigation.navigate('Classboard', 
                            {course:courseName, 
                              comments:value,
                              time:time
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
                onChangeText={text => setValue(text)}
                style={{marginLeft:20}}
                multiline={true}
              />
          </View>
      </View>
    )
  }
export default CompostPost;
