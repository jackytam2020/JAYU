import React, {useState} from 'react';
import {View,Text,Button, ScrollView, TouchableOpacity} from 'react-native';
import classBoardStyles from '../../styles/classBoard/classBoardStyles'
import FooterBar from '../../comps/footerBar'
import PostBox from './postBox';
import CompostPost from './composePost';


function Classboard(props){
  const [posts, setPost] = useState([]);

  return (
      <View style={classBoardStyles.container}>
          <View style={classBoardStyles.navBar}>
              <TouchableOpacity
                onPress={()=>{
                    props.navigation.navigate("HomeScreen")
                 }}>
                    <Text style={{fontSize:20, color:'#007AFF'}}>back</Text>
               </TouchableOpacity>
            <Text style={{fontSize:20}}>ClassBoard</Text>
            <TouchableOpacity
                onPress={()=>{
                    props.navigation.navigate('NewPost')
                 }}>
                    <Text style={{fontSize:20, color:'#007AFF'}}>Post</Text>
               </TouchableOpacity>
          </View>

          {/* Posts */}
          <View style={{flex:1, width:'100%', flexDirection:'row', justifyContent:'center'}}>
              <View style={classBoardStyles.postBox}>
                <ScrollView>
                <View style={classBoardStyles.posts}>
                      <TouchableOpacity style={{flexDirection:"row", paddingLeft:10}}
                        onPress={()=>{
                          props.navigation.navigate('Post')
                      }}>
                            <View style={{height:20,width:20, backgroundColor:"blue", borderRadius:40}}></View>
                            <View style={{paddingLeft:10}}>  
                              <Text>{props.course}</Text>
                              <Text style={{fontSize:10}}>9:15pm by Doris</Text>
                            </View>  
                      </TouchableOpacity>

                      <View style={classBoardStyles.line}></View>  

                      <Text style={{paddingLeft:10}}>{props.textinput}</Text>
            </View>
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
