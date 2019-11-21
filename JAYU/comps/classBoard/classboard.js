import React, {useState, useEffect} from 'react';
import {View,Text,Button, ScrollView, TouchableOpacity} from 'react-native';
import classBoardStyles from '../../styles/classBoard/classBoardStyles'
import FooterBar from '../../comps/footerBar'
import PostBox from './postBox';
import CompostPost from './composePost';

function Classboard(props){
  const [postBox, setPostBox] = useState([]);
  const [emptyPost, setEmptyPost] = useState("flex");

  var question = props.navigation.getParam("comments");
  var course = props.navigation.getParam("course");
  var time =  props.navigation.getParam("time");
  return (
      <View style={classBoardStyles.container}>
          <View style={classBoardStyles.navBar}>
              <TouchableOpacity
                onPress={()=>{
                    props.navigation.navigate("HomeScreen")
                 }}>
                    <Text style={{fontSize:20, marginLeft:20, color:'#007AFF',  fontFamily:'SFProDisplay-Regular'}}>􀆉 Back</Text>
               </TouchableOpacity>
            <Text style={{fontSize:20}}>ClassBoard</Text>
            <TouchableOpacity
                onPress={()=>{
                    props.navigation.navigate('NewPost', {setPostBox:setPostBox, postBox:postBox, setEmptyPost:setEmptyPost})
                 }}>
                    <Text style={{fontSize:20, color:'#007AFF'}}>Post</Text>
               </TouchableOpacity>
          </View>

          {/* Posts */}
          <View style={{flex:1, width:'100%', flexDirection:'row', justifyContent:'center'}}>
              <View style={classBoardStyles.postBox}>
              <View style={{display:emptyPost, width:'100%', height:'30%', justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'grey', fontSize:30}}>Nothing Posted yet...</Text>
              </View>
                <ScrollView>
                  { 
                    postBox.map((obj,i)=>{
                      return <View style={classBoardStyles.posts}>
                                  <TouchableOpacity style={{flexDirection:"row", paddingLeft:10}}
                                    onPress={()=>{
                                      props.navigation.navigate('Post', {question:question, course:course})
                                    }}>
                                      <View style={{height:20,width:20, backgroundColor:"blue", borderRadius:40}}></View>
                                      <View style={{paddingLeft:10}}>  
                                        <Text>{props.navigation.getParam("course")}</Text>
                                        <Text style={{fontSize:10}}>{time}</Text>
                                      </View>  
                                  </TouchableOpacity>

                                  <View style={classBoardStyles.line}></View>  

                                  <Text style={{paddingLeft: 10}}>{props.navigation.getParam("comments")}</Text>
                              </View>
                    })
                            
                    }    
                </ScrollView>  
              </View>

          </View>

          <View style={{height:'10%', width:'100%', position:'absolute', bottom:0}}>
            <FooterBar/>
          </View>
        
      </View>
    )
  }
  export default Classboard;
