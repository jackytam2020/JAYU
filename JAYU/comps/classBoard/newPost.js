import React, {useState, useEffect} from 'react';
import {View,Text,Button, TouchableOpacity} from 'react-native';
import newPostStyle from '../../styles/classBoard/newPostStyles';
import Classboard from '../classBoard/classboard';
import CompostPost from '../classBoard/composePost'


function Newpost(props){
    const [course, setCourse] =  useState(""); 
    const [color, setColor] = useState("black");
    const [color1, setColor1] = useState("black");
    const [color2, setColor2] = useState("black");
    const [color3, setColor3] = useState("black");
    const [color4, setColor4] = useState("black");
    const [color5, setColor5] = useState("black");
    const [color6, setColor6] = useState("black");
    const [color7, setColor7] = useState("black");
    const [colorPass, setColorPass] = useState ("");
    //when comp loads, course needs to be empty
    useEffect(()=>{
        setCourse("");
    },[]);

    var setPostBox = props.navigation.getParam("setPostBox");
    var postBox = props.navigation.getParam("postBox");
    var setEmptyPost = props.navigation.getParam("setEmptyPost");
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
                
                <TouchableOpacity style={{flexDirection:'row'}}
                    onPress={()=> {
                        setColor("#FF9500")
                        setCourse("Accounting for the Manager");

                        if(color == "#007AFF"){
                            setColor("black")
                            setCourse("");
                        }
                        if(color7 || color1 || color2 || color3 || color4 || color5 || color6 == "#007AFF"){
                            setColor7("black")
                            setColor1("black")
                            setColor2("black")
                            setColor3("black")
                            setColor4("black")
                            setColor5("black")
                            setColor6("black")
                            setColorPass("#FF9500")
                        }
                    }}
                >
                   <Text style={[{color:color}, newPostStyle.icon]} >􀘝</Text>
                    <Text style={{fontSize:15, color:color}}>Accounting for the Manager</Text>
                </TouchableOpacity>  
                <View style={{width:200, paddingTop:10, left:45}}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <TouchableOpacity style={{flexDirection:'row'}}
                    onPress={()=> {
                        setCourse("Advanced Photoshop");
                        setColor1("#00AEEF");

                        if( color1 == "#007AFF"){
                            setColor1("black");
                            setCourse("");
                        }
                        if(color7 || color || color2 || color3 || color4 || color5 || color6 == "#007AFF"){
                            setColor7("black")
                            setColor("black")
                            setColor2("black")
                            setColor3("black")
                            setColor4("black")
                            setColor5("black")
                            setColor6("black")
                            setColorPass("#00AEEF")
                        }
                    }}
                >
                    <Text style={[{color:color1}, newPostStyle.icon]} >􀀣</Text>
                    <Text style={{fontSize:15, color:color1}}>Advanced Photoshop </Text>
                </TouchableOpacity>  
                <View style={{width:200, paddingTop:10, left:45}}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <TouchableOpacity style={{flexDirection:'row'}}
                     onPress={()=> {
                        setCourse("Assets Design and Integration")
                        setColor2("#FFCF00");

                        if( color2 == "#007AFF"){
                            setColor2("black");
                            setCourse("");
                        }
                        if(color7 || color1 || color || color3 || color4 || color5 || color6 == "#007AFF"){
                            setColor7("black")
                            setColor1("black")
                            setColor("black")
                            setColor3("black")
                            setColor4("black")
                            setColor5("black")
                            setColor6("black")
                            setColorPass("#FFCF00")
                        }
                    }}
                >
                    <Text style={[{color:color2}, newPostStyle.icon]} >􀏀</Text>
                    <Text style={{fontSize:15, color:color2}}>Assets Design and Integration </Text>
                </TouchableOpacity>  
                <View style={{width:200, paddingTop:10, left:45}}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <TouchableOpacity style={{flexDirection:'row'}}
                     onPress={()=> {
                        setCourse("Business Communication")
                        setColor3("#4CD964");

                        if( color3 == "#007AFF"){
                            setColor3("black");
                            setCourse("");
                        }
                        if(color7 || color1 || color2 || color || color4 || color5 || color6 == "#007AFF"){
                            setColor7("black")
                            setColor1("black")
                            setColor2("black")
                            setColor("black")
                            setColor4("black")
                            setColor5("black")
                            setColor6("black")
                            setColorPass("#4CD964")
                        }
                    }}
                >
                  <Text style={[{color:color3}, newPostStyle.icon]} >􀒡</Text>
                    <Text style={{fontSize:15, color:color3}}>Business Communication </Text>
                </TouchableOpacity>  
                <View style={{width:200, paddingTop:10, left:45}}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <TouchableOpacity style={{flexDirection:'row'}}
                     onPress={()=> {
                        setCourse("Design 2");
                        setColor4("#FF3B30");

                        if( color4 == "#007AFF"){
                            setColor4("black");
                            setCourse("");
                        }
                        if(color7 || color1 || color2 || color3 || color || color5 || color6 == "#007AFF"){
                            setColor7("black")
                            setColor1("black")
                            setColor2("black")
                            setColor3("black")
                            setColor("black")
                            setColor5("black")
                            setColor6("black")
                            setColorPass("#FF3B30")
                        }
                        
                    }}
                >
                    <Text style={[{color:color4}, newPostStyle.icon]} >􀈌</Text>
                    <Text style={{fontSize:15, color:color4}}>Design 2</Text>
                </TouchableOpacity>  
                <View style={{width:200, paddingTop:10, left:45}}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <TouchableOpacity style={{flexDirection:'row'}}
                    onPress={()=> {
                        setCourse("Professional Sales Skills");
                        setColor5("#5856D6");

                        if( color5 == "#007AFF"){
                            setColor5("black");
                            setCourse("");
                        }
                        if(color7 || color1 || color2 || color3 || color4 || color || color6 == "#007AFF"){
                            setColor7("black")
                            setColor1("black")
                            setColor2("black")
                            setColor3("black")
                            setColor4("black")
                            setColor("black")
                            setColor6("black")
                            setColorPass("#5856D6")
                        }
                    }}
                >
                 <Text style={[{color:color5}, newPostStyle.icon]} >􀋤</Text>
                    <Text style={{fontSize:15, color:color5}}>Professional Sales Skills </Text>
                </TouchableOpacity>  
                <View style={{width:200, paddingTop:10, left:45}}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <TouchableOpacity style={{flexDirection:'row'}}
                    onPress={()=> {
                        setCourse("Project 2")
                        setColor6("#007AFF");

                        if( color6 == "#007AFF"){
                            setColor6("black");
                            setCourse("");
                        }
                        if(color7 || color1 || color2 || color3 || color4 || color5 || color == "#007AFF"){
                            setColor7("black")
                            setColor1("black")
                            setColor2("black")
                            setColor3("black")
                            setColor4("black")
                            setColor5("black")
                            setColor("black")
                            setColorPass("#007AFF")
                        }
                    }}
                >
                    <Text style={[{color:color6}, newPostStyle.icon]} >􀓤</Text>
                    <Text style={{fontSize:15, color:color6}}>Project 2 </Text>
                </TouchableOpacity>  
                <View style={{width:200, paddingTop:10, left:45}}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <TouchableOpacity style={{flexDirection:'row'}}
                     onPress={()=> {
                        setCourse("Web Development 3")
                        setColor7("#C69C6D");

                        if( color7 == "#007AFF"){
                            setColor7("black");
                            setCourse("");
                        }
                        if(color || color1 || color2 || color3 || color4 || color5 || color6 == "#007AFF"){
                            setColor("black")
                            setColor1("black")
                            setColor2("black")
                            setColor3("black")
                            setColor4("black")
                            setColor5("black")
                            setColor6("black")
                            setColorPass("#C69C6D")
                        }
                    }}
                >
                        <Text style={[{color:color7}, newPostStyle.icon]} >􀁛</Text>
                    <Text style={{fontSize:15, color:color7}}>Web Development 3 </Text>
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
                        props.navigation.navigate('ComposePost', {course:course, setPostBox:setPostBox, postBox:postBox, setEmptyPost:setEmptyPost,colorPass:colorPass});
            
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
