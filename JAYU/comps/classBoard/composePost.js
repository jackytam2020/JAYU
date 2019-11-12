import React, {useState, useEffect} from 'react';
import {View,Text, Button,TextInput, TouchableOpacity} from 'react-native';
import composeStyle from '../../styles/classBoard/compostPostStyles'
import PostBox from './postBox';
import Classboard from './classboard';

function CompostPost(props){
    const [value, setValue] = useState("Write your discussion...")

    useEffect(()=>{
      console.log(props.course)
  },[]);
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
                        <View style={{height:25,width:25, marginRight:20, marginLeft:25, backgroundColor:"grey", borderRadius:40}}></View>
                        <Text style={{fontSize:15}}>{props.course}</Text>
                  </View>
                  <View style={{flexDirection:'row', marginLeft:20}}>
                        <Button title={'Camera'}/>
                        <Button title={'Gallery'}/>
                        <Button title={'Attach'}/>
                  </View>
                  
              </View>
              <View style={composeStyle.rightDetail}>
                    <TouchableOpacity style={{height:30,width:30, backgroundColor:"#007aff", borderRadius:40}}
                          onPress={()=>{
                            props.navigation.navigate('Classboard');
                            <PostBox textinput={value} />
                         }}>
                    </TouchableOpacity>
                    <Text style={{color:'#007aff'}}>Post</Text>
              </View>
          </View>

          <View style={composeStyle.line}></View>

          {/* Text Box*/}
          <View style={composeStyle.textBoxContainer}>
              <TextInput
                value={value}
                onChangeText={text => setValue(text)}
                style={{marginLeft:20}}
                multiline={true}
              />
          </View>
      </View>
    )
  }
export default CompostPost;
