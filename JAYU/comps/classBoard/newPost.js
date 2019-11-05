import React from 'react';
import {View,Text,Button, TouchableOpacity} from 'react-native';
import newPostStyle from '../../styles/classBoard/newPostStyles'

function Newpost(){
  return (
      <View style={newPostStyle.container}>
          <View style={newPostStyle.navBar}>
            <Text style={{fontSize:20}}>New Post</Text>
          </View>

        {/* choose a subject */}

          <View style={{width:'100%', height:'5%', position: "relative", alignItems:'center'}}>  
              <View style={newPostStyle.chooseBar}> 
                
                <View style={{flexDirection:'row'}}>
                    <View style={{height:25,width:25, marginRight:20, backgroundColor:"grey", borderRadius:40}}></View>
                    <Text style={{fontSize:15}}>choose a subject for your post</Text>
                </View>  
               
              </View>
          </View>

          <View style={newPostStyle.line}></View>

        {/* subject list */}  
          <View style={{width:'100%', height:'55%', position: "relative", top:'3%', alignItems:'center'}}>
           
            <View style={newPostStyle.subjectList}>
                
                <View style={{flexDirection:'row'}}>
                    <View style={{height:25,width:25, marginRight:20, backgroundColor:"grey", borderRadius:40}}></View>
                    <Text style={{fontSize:15}}>Accounting for the Manager</Text>
                </View>  
                <View style={{width:200, paddingTop:10, left:45}}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <View style={{flexDirection:'row'}}>
                    <View style={{height:25,width:25, marginRight:20, backgroundColor:"grey", borderRadius:40}}></View>
                    <Text style={{fontSize:15}}>Advanced Photoshop </Text>
                </View>  
                <View style={{width:200, paddingTop:10, left:45}}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <View style={{flexDirection:'row'}}>
                    <View style={{height:25,width:25, marginRight:20, backgroundColor:"grey", borderRadius:40}}></View>
                    <Text style={{fontSize:15}}>Assets Design and Integration </Text>
                </View>  
                <View style={{width:200, paddingTop:10, left:45}}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <View style={{flexDirection:'row'}}>
                    <View style={{height:25,width:25, marginRight:20, backgroundColor:"grey", borderRadius:40}}></View>
                    <Text style={{fontSize:15}}>Business Communication </Text>
                </View>  
                <View style={{width:200, paddingTop:10, left:45}}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <View style={{flexDirection:'row'}}>
                    <View style={{height:25,width:25, marginRight:20, backgroundColor:"grey", borderRadius:40}}></View>
                    <Text style={{fontSize:15}}>Design 2</Text>
                </View>  
                <View style={{width:200, paddingTop:10, left:45}}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <View style={{flexDirection:'row'}}>
                    <View style={{height:25,width:25, marginRight:20, backgroundColor:"grey", borderRadius:40}}></View>
                    <Text style={{fontSize:15}}>Professional Sales Skills </Text>
                </View>  
                <View style={{width:200, paddingTop:10, left:45}}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <View style={{flexDirection:'row'}}>
                    <View style={{height:25,width:25, marginRight:20, backgroundColor:"grey", borderRadius:40}}></View>
                    <Text style={{fontSize:15}}>Project 2 </Text>
                </View>  
                <View style={{width:200, paddingTop:10, left:45}}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <View style={{flexDirection:'row'}}>
                    <View style={{height:25,width:25, marginRight:20, backgroundColor:"grey", borderRadius:40}}></View>
                    <Text style={{fontSize:15}}>Web Development 3 </Text>
                </View>  
        
            </View>

          </View> 

          {/* Cancel and Done buttons */}
            <View style={newPostStyle.CancelNextContainer}>
                <View style={newPostStyle.CancelNext}> 
                    <TouchableOpacity style={newPostStyle.cancel}>
                        <Text style={{fontSize:20}}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={newPostStyle.next}>
                        <Text style={{fontSize:20}}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View> 

      </View>
    )
  }
  export default Newpost;
