
import React, {useState, useEffect} from 'react';
import {View,Text,Button, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import classBoardStyles from '../../styles/classBoard/classBoardStyles'
import FooterBar from '../../comps/footerBar';
import normalize from 'react-native-normalize';
import PostBox from './postBox';
import CompostPost from './composePost';
import axios from 'axios';


function Classboard(props){
  const [postBox, setPostBox] = useState([]);
  const [emptyPost, setEmptyPost] = useState("flex");

  var description = props.navigation.getParam("comments");
  var course_name = props.navigation.getParam("course");
  var am_pm =  props.navigation.getParam("am_pm");
  var hour =  props.navigation.getParam("hour");
  var minutes =  props.navigation.getParam("minutes");



  const ReadPosts = async()=>{
    var obj = {
        key:"classboard_read",
        data:{}
    }

    var r = await axios.post('http://localhost:3001/post', obj);
  
    var dbusers = JSON.parse(r.data.body);
    console.log("Read", dbusers);
    setPostBox(dbusers.data); 
  }

  useEffect(()=>{
    ReadPosts();
    },[]);

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
                      return <PostBox 
                        key={i}
                        id={obj.id}
                        course_name={obj.course_name}
                        description={obj.description}
                        hour={obj.hour}
                        minutes={obj.minutes}
                        am_pm={obj.am_pm}
                      />
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
