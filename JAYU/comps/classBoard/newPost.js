import React from 'react';
import {View,Text,Button, TouchableOpacity} from 'react-native';
import newPostStyle from '../../styles/classBoard/newPostStyles';
import normalize from 'react-native-normalize';


function Newpost(props){
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
                
                <View style={newPostStyle.each}>
                    <View style={newPostStyle.iconview}>
                        <Text style={newPostStyle.AC}>􀘝</Text>
                    </View>
                    <Text style={newPostStyle.subjectname}>Accounting for the Manager</Text>
                </View>  
                <View style={newPostStyle.lineview}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <View style={newPostStyle.each}>
                    <View style={newPostStyle.iconview}>
                    <Text style={newPostStyle.PS}>􀀣</Text>
                    </View>
                    <Text style={newPostStyle.subjectname}>Advanced Photoshop </Text>
                </View>  
                <View style={newPostStyle.lineview}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <View style={newPostStyle.each}>
                    <View style={newPostStyle.iconview}>
                    <Text style={newPostStyle.ADI}>􀏀</Text>
                    </View>
                    <Text style={newPostStyle.subjectname}>Assets Design and Integration </Text>
                </View>  
                <View style={newPostStyle.lineview}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <View style={newPostStyle.each}>
                    <View style={newPostStyle.iconview}>
                    <Text style={newPostStyle.BC}>􀒡</Text>
                    </View>
                    <Text style={newPostStyle.subjectname}>Business Communication </Text>
                </View>  
                <View style={newPostStyle.lineview}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <View style={newPostStyle.each}>
                    <View style={newPostStyle.iconview}>
                    <Text style={newPostStyle.DS}>􀈌</Text>
                    </View>
                    <Text style={newPostStyle.subjectname}>Design 2</Text>
                </View>  
                <View style={newPostStyle.lineview}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <View style={newPostStyle.each}>
                    <View style={newPostStyle.iconview}>
                    <Text style={newPostStyle.SA}>􀋤</Text>
                    </View>
                    <Text style={newPostStyle.subjectname}>Professional Sales Skills </Text>
                </View>  
                <View style={newPostStyle.lineview}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <View style={newPostStyle.each}>
                    <View style={newPostStyle.iconview}>
                    <Text style={newPostStyle.PJ}>􀉮</Text>
                    </View>
                    <Text style={newPostStyle.subjectname}>Project 2 </Text>
                </View>  
                <View style={newPostStyle.lineview}>
                    <View style={newPostStyle.line}></View>
                </View>  

                <View style={newPostStyle.each}>
                    <View style={newPostStyle.iconview}>
                    <Text style={newPostStyle.WD}>􀁛</Text>
                    </View>
                    <Text style={newPostStyle.subjectname}>Web Development 3 </Text>
                </View>  
        
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
                        props.navigation.navigate('ComposePost')
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
