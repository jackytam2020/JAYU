import React, {useState, useEffect} from 'react';
import {View,Text,Button, TouchableOpacity} from 'react-native';
import newPostStyle from '../../styles/classBoard/newPostStyles';
import Classboard from '../classBoard/classboard';
import CompostPost from '../classBoard/composePost'
import normalize from 'react-native-normalize';


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
    const [colorPass, setColorPass] = useState("");
    const [classSymbol, setClassSymbol] = useState("");
    const [classBg, setClassBg] = useState("");

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
            <Text style={{fontSize:normalize(25), fontFamily:"SFProDisplay-Semibold"}}>New Post</Text>
          </View>

        {/* choose a subject */}

          <View style={{width:'100%', height:'5%', position: "relative", alignItems:'center'}}>  
              <View style={newPostStyle.chooseBar}> 
                
                <View style={{flexDirection:'row', display:"flex", alignItems:"center"}}>
                    <View style={newPostStyle.iconview}>
                    <Text style={newPostStyle.EP}>􀕫</Text>
                    </View>
                    <Text style={newPostStyle.subjectname}>Choose a subject for your post</Text>
                </View>  
               
              </View>
          </View>

          <View style={newPostStyle.line}></View>

        {/* subject list */}  
          <View style={{width:'100%', height:'55%', position: "relative", top:'3%', alignItems:'center'}}>
           
            <View style={newPostStyle.subjectList}>

                <TouchableOpacity style={newPostStyle.each}
                    onPress={()=> {
                        setColor("#FF9500")
                        setCourse("Accounting for the Manager");

                        if(color == "#FF9500"){
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
                            setClassSymbol("􀘝")
                            setClassBg("#FFEBD4")
                        }
                    }}
                >
                    <View style={newPostStyle.iconview}>
                        <Text style={newPostStyle.AC}>􀘝</Text>
                    </View>
                    <Text style={{fontSize:15, color:color}}>Accounting for the Manager</Text>
                </TouchableOpacity>  
                <View style={newPostStyle.lineview}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <TouchableOpacity style={newPostStyle.each}
                    onPress={()=> {
                        setCourse("Advanced Photoshop");
                        setColor1("#00AEEF");

                        if( color1 == "#00AEEF"){
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
                            setClassSymbol("􀀣")
                            setClassBg("#D6F0FC")
                        }
                    }}
                >
                    <View style={newPostStyle.iconview}>
                        <Text style={newPostStyle.PS}>􀀣</Text>
                    </View>
                    <Text style={{fontSize:15, color:color1}}>Advanced Photoshop </Text>
                </TouchableOpacity>  
                <View style={newPostStyle.lineview}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <TouchableOpacity style={newPostStyle.each}
                     onPress={()=> {
                        setCourse("Assets Design and Integration")
                        setColor2("#FFCF00");

                        if( color2 == "#FFCF00"){
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
                            setClassSymbol("􀏀")
                            setClassBg("#FFF5D7")
                        }
                    }}
                >
                    <View style={newPostStyle.iconview}>
                        <Text style={newPostStyle.ADI}>􀏀</Text>
                    </View>
                    <Text style={{fontSize:15, color:color2}}>Assets Design and Integration </Text>
                </TouchableOpacity>  
                <View style={newPostStyle.lineview}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <TouchableOpacity style={newPostStyle.each}
                     onPress={()=> {
                        setCourse("Business Communication")
                        setColor3("#4CD964");

                        if( color3 == "#4CD964"){
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
                            setClassSymbol("􀒡")
                            setClassBg("#DEF7E1")
                        }
                    }}
                >
                    <View style={newPostStyle.iconview}>
                        <Text style={newPostStyle.BC}>􀒡</Text>
                    </View>
                    <Text style={{fontSize:15, color:color3}}>Business Communication </Text>
                </TouchableOpacity>  
                <View style={newPostStyle.lineview}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <TouchableOpacity style={newPostStyle.each}
                     onPress={()=> {
                        setCourse("Design 2");
                        setColor4("#FF3B30");

                        if( color4 == "#FF3B30"){
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
                            setClassSymbol("􀈌")
                            setClassBg("#FFDBD8")
                        }
                        
                    }}
                >
                    <View style={newPostStyle.iconview}>
                        <Text style={newPostStyle.DS}>􀈌</Text>
                    </View>
                    <Text style={{fontSize:15, color:color4}}>Design 2</Text>
                </TouchableOpacity>  
                <View style={newPostStyle.lineview}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <TouchableOpacity style={newPostStyle.each}
                    onPress={()=> {
                        setCourse("Professional Sales Skills");
                        setColor5("#5856D6");

                        if( color5 == "#5856D6"){
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
                            setClassSymbol("􀋤")
                            setClassBg("#DEDEF7")
                        }
                    }}
                >
                    <View style={newPostStyle.iconview}>
                        <Text style={newPostStyle.SA}>􀋤</Text>
                    </View>
                    <Text style={{fontSize:15, color:color5}}>Professional Sales Skills </Text>
                </TouchableOpacity>  
                <View style={newPostStyle.lineview}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <TouchableOpacity style={newPostStyle.each}
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
                            setClassSymbol("􀉮")
                            setClassBg("#D0E1FF")
                        }
                    }}
                >
                    <View style={newPostStyle.iconview}>
                        <Text style={newPostStyle.PJ}>􀉮</Text>
                    </View>
                    <Text style={{fontSize:15, color:color6}}>Project 2 </Text>
                </TouchableOpacity>  
                <View style={newPostStyle.lineview}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <TouchableOpacity style={newPostStyle.each}
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
                            setClassSymbol("􀁛")
                            setClassBg("#F5EBE2")
                        }
                    }}
                >
                     <View style={newPostStyle.iconview}>
                         <Text style={newPostStyle.WD}>􀁛</Text>
                    </View>
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
                        props.navigation.navigate('ComposePost', {
                            course:course, 
                            setPostBox:setPostBox, 
                            postBox:postBox, 
                            setEmptyPost:setEmptyPost,
                            colorPass:colorPass, 
                            classSymbol:classSymbol,
                            classBg:classBg
                        });
            
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
