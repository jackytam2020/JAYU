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
                    <PostBox />
                    {
                      posts.map((obj,i)=>{
                        return <PostBox 
                        />
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
