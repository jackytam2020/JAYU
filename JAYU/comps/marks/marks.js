import React,{useState} from 'react';
import { View,Text,Button, ScrollView, TouchableOpacity} from 'react-native';
import markStyles from '../../styles/marks/markStyles';
import FooterBar from '../../comps/footerBar';
import EditMark from '../../comps/marks/editMark';
import NewMark from '../../comps/marks/newMark'
import Modal from "react-native-modal"
import MarkRow from '../marks/markRow';

function Marks(props){
    const [cancel, setCancel] = useState(markStyles.cancel)
    const [editBut, setEditBut] = useState("Edit Mark")
    const [slideup, setSlideup] = useState(false)
    const [slideNewMark, setSlideNewMark] = useState(false);
    const [mark, setMark] = useState([]);
    const [grade, setGrade] = useState("")

    var markName = props.navigation.getParam("value"); 
    var score = props.navigation.getParam("score"); 
    var outof = props.navigation.getParam("outof"); 
  return (
    <View style={{flex:1,backgroundColor:'#fff5d7'}}>
            <View style={markStyles.navBar}>
                <TouchableOpacity
                       onPress={()=>{
                            props.navigation.navigate("ViewMark")
                       }}>
                        <Text style={{fontSize:20, marginLeft:20, color:'#007AFF'}}>Done</Text>
                </TouchableOpacity>
                <View style={{position:'absolute', left:'40%'}}>
                    <Text style={{fontSize:25}}>Marks</Text>
                </View>
            </View>

            <View style={markStyles.subjectBar}>
                <View style={markStyles.subject}>
                    <View style={{height:40, width:40, backgroundColor:'yellow', borderRadius:40}}></View>
                    <Text style={{fontSize:25, marginLeft:20}}>Assets Design and Integration</Text>
                </View>
            </View>

            <View style={markStyles.progressBar}>
                <View style={markStyles.progressBG}>
                    <View style={markStyles.progress}>
                        <View style={{flex:0.7, justifyContent:"center"}}>
                            <Text style={{fontSize:45}}>94.73%</Text>
                            <Text style={{fontSize:15}}>overall score</Text>
                        </View>
                        <View style={{flex:0.3,justifyContent:"center", position:'relative',left:'35%'}}>
                            <View style={{height:40, width:40, backgroundColor:'green', borderRadius:40}}></View>
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
                            <Text style={{fontSize:20}}
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
                                setEditBut("Edit Marks")
                            }
                            }}>    

                            <Text style={{fontSize:20}}>{editBut}</Text>
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

    </View>
  );
};
export default Marks;
