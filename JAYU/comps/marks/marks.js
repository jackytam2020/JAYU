import React,{useState} from 'react';
import { View,Text,Button, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import normalize from 'react-native-normalize';
import markStyles from '../../styles/marks/markStyles';
import FooterBar from '../../comps/footerBar';
import EditMark from '../../comps/marks/editMark';
import NewMark from '../../comps/marks/newMark'
import Modal from "react-native-modal"
import MarkRow from '../marks/markRow';
import postStyle from '../../styles/classBoard/postStyle';


function Marks(props){
    const [cancel, setCancel] = useState(markStyles.cancel)
    const [editBut, setEditBut] = useState("Edit")
    const [slideup, setSlideup] = useState(false)
    const [slideNewMark, setSlideNewMark] = useState(false);
    const [mark, setMark] = useState([]);
    const [grade, setGrade] = useState("")

    var markName = props.navigation.getParam("value"); 
    var score = props.navigation.getParam("score"); 
    var outof = props.navigation.getParam("outof"); 
  return (
          
    <SafeAreaView style={{flex:1,backgroundColor:props.navigation.getParam("bg")}}>
       
            <View style={markStyles.navBar}>
                <TouchableOpacity
                       onPress={()=>{
                            props.navigation.navigate("ViewMark")
                       }}>
                        <Text style={{fontSize:normalize(22), marginLeft:normalize(5), color:'#007AFF', fontFamily:"SFProDisplay-Medium"}}>􀆉 Back</Text>
                </TouchableOpacity>
                
            </View>

            <View style={markStyles.subjectBar}>
                <View style={markStyles.subject}>
                    <View style={{height:normalize(67), width:normalize(67)}}>
                        <Text style={[markStyles.ADI,{color:props.navigation.getParam("color")}]}>{props.navigation.getParam("icon")}</Text>
                    </View>
                    <View style={{width:normalize(250)}}>
                    <Text style={{fontSize:normalize(25), marginLeft:normalize(20), fontFamily:"SFProDisplay-Semibold"}}>{props.navigation.getParam("classname")}</Text>
                    </View>
                </View>
            </View>

            <View style={markStyles.progressBar}>
                <View style={markStyles.progressBG}>
                    <View style={markStyles.progress}>
                        <View style={{flex:0.8, justifyContent:"center", marginTop:normalize(10), marginBottom:normalize(10)}}>
                            <Text style={{fontSize:normalize(45)}}>94.73%</Text>
                            <Text style={{fontSize:normalize(15)}}>overall score</Text>
                        </View>
                        <View style={{flex:0.3,justifyContent:"center", position:'relative',left:'20%'}}>
                            <View style={{height:normalize(45), width:normalize(45),}}>
                                <Text style={markStyles.A}>􀀅</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            {/* Edit buttons */}
            <View style={markStyles.editBar}>
                <View style={markStyles.edit}>
                    <View style={{flex:0.5, flexDirection:'row'}}>
                        <TouchableOpacity style={markStyles.editboxes}
                        >
                            <Text style={{fontSize:normalize(20), fontFamily:"SFProDisplay-Semibold"}}
                            onPress={()=>{
                                // setSlideNewMark(true)
                                props.navigation.navigate("NewMark",{setMark:setMark, mark:mark})
                            }}>Add Mark</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:0.5, flexDirection:'row', justifyContent:'flex-end'}}>
                        <TouchableOpacity style={markStyles.editboxes} 
                        onPress={()=>{
                            setCancel(markStyles.cancel1) 
                            setEditBut("Done")
                            if(editBut == "Done"){
                                setCancel(markStyles.cancel) 
                                setEditBut("Edit")
                            }
                            }}>    

                            <Text style={{fontSize:normalize(20), fontFamily:"SFProDisplay-Semibold"}}>{editBut}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Graded items */}
            <View style={markStyles.gradeBox}>
                <View style={markStyles.inputs}>
                        <View style={markStyles.inputTitleRow}>
                            <Text style={markStyles.inputTitle}>Elements</Text>
                            <Text style={markStyles.inputTitle}>Mark</Text>
                        </View>
                    <ScrollView>
                    {
                        mark.map((obj,i)=>{

                            return <View style={markStyles.inputRow}>
                                        <View style={{flexDirection:'row'}}>
                                            <TouchableOpacity style={cancel} onPress={()=>{
                                                 var arr = mark;
                                                 arr.pop(1);
                                                 arr = arr.map((o)=>{
                                                     return o;
                                                 })
                                                 setMark(arr)}}></TouchableOpacity>
                                            <Text style={markStyles.markName}
                                            onPress={()=>{
                                                // setSlideup(true)
                                                props.navigation.navigate("EditMark", {markName:markName, score:score, outof:outof})
                                            }}
                                            >{markName}</Text>
                                        </View>
                                        <Text style={markStyles.markName}>{score}/{outof}</Text>
                                    </View> 
                            
                                     
                            //<MarkRow /> 
                        })
                        
                    }    
                    </ScrollView>
                </View>

            </View>
            
            <View style={{height:'10%', width:'100%', position:'absolute', bottom:0}}>
                <FooterBar/>
            </View>


    
    </SafeAreaView>
  );
};
export default Marks;
