
import React, {useState} from 'react';
import {View,Text,Button, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import classBoardStyles from '../../styles/classBoard/classBoardStyles'
import FooterBar from '../../comps/footerBar';
import normalize from 'react-native-normalize';
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
            <SafeAreaView style={classBoardStyles.safecontainer}>
          <View style={classBoardStyles.navBar}>
              <TouchableOpacity style={classBoardStyles.backholder}
                onPress={()=>{
                    props.navigation.navigate("HomeScreen")
                 }}>
                    <Text style={{fontSize:normalize(20), color:'#007AFF', fontFamily:"SFProDisplay-Medium"}}>􀆉Back</Text>
               </TouchableOpacity>
            <Text style={{fontSize:normalize(20), fontFamily:"SFProDisplay-Medium", marginLeft:normalize(70)}}>ClassBoard</Text>
            <TouchableOpacity
                onPress={()=>{
                    props.navigation.navigate('NewPost', {setPostBox:setPostBox, postBox:postBox, setEmptyPost:setEmptyPost})
                 }}>
                    <Text style={{fontSize:normalize(20), color:'#007AFF', fontFamily:"SFProDisplay-Medium", marginLeft:normalize(100)}}>􀈐</Text>
               </TouchableOpacity>
          </View>

          {/* Posts */}
          <View style={{flex:1, width:'100%', flexDirection:'row', justifyContent:'center', backgroundColor:"#F2F2F2", paddingTop:normalize(10)}}>
              <View style={classBoardStyles.postBox}>

                <View style={{display:emptyPost, width:'100%', height:'30%', justifyContent:'center', alignItems:'center'}}>
                      <Text style={{color:'grey', fontSize:30, opacity:0.5}}>No Posts...</Text>
                </View>
                <ScrollView style={classBoardStyles.scrollview}>
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
          </SafeAreaView>
      </View>
      
    )
  }
  export default Classboard;
