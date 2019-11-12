import React, {useState, useEffect} from 'react';
import {View,Text,Button, TouchableOpacity} from 'react-native';
import newPostStyle from '../../styles/classBoard/newPostStyles';
import Classboard from '../classBoard/classboard';
import CompostPost from '../classBoard/composePost'


function Newpost(props){
    const [course, setCourse] =  useState(""); 
    const [ color, setColor] = useState("black")

    //when comp loads, course needs to be empty
    useEffect(()=>{
        setCourse("");
    },[]);

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
                    <Text>{course}</Text>
                </View>  
               
              </View>
          </View>

          <View style={newPostStyle.line}></View>

        {/* subject list */}  
          <View style={{width:'100%', height:'55%', position: "relative", top:'3%', alignItems:'center'}}>
           
            <View style={newPostStyle.subjectList}>
                
                <TouchableOpacity style={{flexDirection:'row'}}
                    onPress={()=> {
                        setColor("red")
                        setCourse("Accounting for the Manager");
                    }}
                >
                    <View style={{height:25,width:25, marginRight:20, backgroundColor:"grey", borderRadius:40}}></View>
                    <Text style={{fontSize:15, color:color}}>Accounting for the Manager</Text>
                </TouchableOpacity>  
                <View style={{width:200, paddingTop:10, left:45}}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <TouchableOpacity style={{flexDirection:'row'}}
                    onPress={()=> {
                        setCourse("Advanced Photoshop")
                    }}
                >
                    <View style={{height:25,width:25, marginRight:20, backgroundColor:"grey", borderRadius:40}}></View>
                    <Text style={{fontSize:15}}>Advanced Photoshop </Text>
                </TouchableOpacity>  
                <View style={{width:200, paddingTop:10, left:45}}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <TouchableOpacity style={{flexDirection:'row'}}
                     onPress={()=> {
                        setCourse("Assets Design and Integration")
                    }}
                >
                    <View style={{height:25,width:25, marginRight:20, backgroundColor:"grey", borderRadius:40}}></View>
                    <Text style={{fontSize:15}}>Assets Design and Integration </Text>
                </TouchableOpacity>  
                <View style={{width:200, paddingTop:10, left:45}}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <TouchableOpacity style={{flexDirection:'row'}}
                     onPress={()=> {
                        setCourse("Business Communication")
                    }}
                >
                    <View style={{height:25,width:25, marginRight:20, backgroundColor:"grey", borderRadius:40}}></View>
                    <Text style={{fontSize:15}}>Business Communication </Text>
                </TouchableOpacity>  
                <View style={{width:200, paddingTop:10, left:45}}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <TouchableOpacity style={{flexDirection:'row'}}
                     onPress={()=> {
                        setCourse("Design 2")
                    }}
                >
                    <View style={{height:25,width:25, marginRight:20, backgroundColor:"grey", borderRadius:40}}></View>
                    <Text style={{fontSize:15}}>Design 2</Text>
                </TouchableOpacity>  
                <View style={{width:200, paddingTop:10, left:45}}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <TouchableOpacity style={{flexDirection:'row'}}
                    onPress={()=> {
                        setCourse("Professional Sales Skills")
                    }}
                >
                    <View style={{height:25,width:25, marginRight:20, backgroundColor:"grey", borderRadius:40}}></View>
                    <Text style={{fontSize:15}}>Professional Sales Skills </Text>
                </TouchableOpacity>  
                <View style={{width:200, paddingTop:10, left:45}}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <TouchableOpacity style={{flexDirection:'row'}}
                    onPress={()=> {
                        setCourse("Project 2")
                    }}
                >
                    <View style={{height:25,width:25, marginRight:20, backgroundColor:"grey", borderRadius:40}}></View>
                    <Text style={{fontSize:15}}>Project 2 </Text>
                </TouchableOpacity>  
                <View style={{width:200, paddingTop:10, left:45}}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <TouchableOpacity style={{flexDirection:'row'}}
                     onPress={()=> {
                        setCourse("Web Development 3")
                    }}
                >
                    <View style={{height:25,width:25, marginRight:20, backgroundColor:"grey", borderRadius:40}}></View>
                    <Text style={{fontSize:15}}>Web Development 3 </Text>
                </TouchableOpacity>  
        
            </View>

          </View> 

          {/* Cancel and Done buttons */}
            <View style={newPostStyle.CancelNextContainer}>
                <View style={newPostStyle.CancelNext}> 
                    <TouchableOpacity style={newPostStyle.cancel}
                        onPress={()=>{
                            props.navigation.goBack()
                        }}>
                        <Text style={{fontSize:20}}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={newPostStyle.next}
                    onPress={()=>{
                        props.navigation.navigate('ComposePost');
                        <CompostPost  course={course}/>
                    }}
                    >
                        <Text style={{fontSize:20}}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View> 

      </View>
    )
  }
  export default Newpost;
