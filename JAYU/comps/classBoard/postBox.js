import React, {useState} from 'react';
import {View,Text,Button, ScrollView, TouchableOpacity} from 'react-native';
import classBoardStyles from '../../styles/classBoard/classBoardStyles'
import FooterBar from '../../comps/footerBar'


function PostBox(props){
    return (
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
    )
};

export default PostBox