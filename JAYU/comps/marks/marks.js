import React,{useState, useEffect} from 'react';
import { View,Text,Button, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import normalize from 'react-native-normalize';
import markStyles from '../../styles/marks/markStyles';
import FooterBar from '../../comps/footerBar';
import EditMark from '../../comps/marks/editMark';
import NewMark from '../../comps/marks/newMark'
import Modal from "react-native-modal"
import MarkRow from '../marks/markRow';
import postStyle from '../../styles/classBoard/postStyle';
import axios from 'axios';

function Marks(props){
    const [cancel, setCancel] = useState(markStyles.cancel)
    const [editBut, setEditBut] = useState("Edit")
    const [slideup, setSlideup] = useState(false)
    const [slideNewMark, setSlideNewMark] = useState(false);
    const [mark, setMark] = useState([]);
    const [grade, setGrade] = useState("")

    var mark_name = props.navigation.getParam("mark_name"); 
    var score = props.navigation.getParam("score"); 
    var outof = props.navigation.getParam("outof"); 
    var weight = props.navigation.getParam("weight"); 

    var courseKey = props.navigation.getParam("courseKey"); 
    var courseReadKey = props.navigation.getParam("courseReadKey"); 
    var courseDeleteKey = props.navigation.getParam("courseDeleteKey"); 
    var courseUpdateKey = props.navigation.getParam("courseUpdateKey"); 

    var classname = props.navigation.getParam("classname"); 


  const ReadMarks = async()=>{
    var obj = {
        key:courseReadKey,
        data:{}
    }

    var r = await axios.post('http://localhost:3001/post', obj);
  
    var dbusers = JSON.parse(r.data.body);
    console.log("Read", dbusers);
    setMark(dbusers.data); 
  }

  useEffect(()=>{
    ReadMarks();
    },[]);

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
                    <Text style={{fontSize:normalize(25), marginLeft:normalize(20), fontFamily:"SFProDisplay-Semibold"}}>{classname}</Text>
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
                                props.navigation.navigate("NewMark",{setMark:setMark, mark:mark, courseKey:courseKey, courseReadKey:courseReadKey, classname:classname})
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

                            return <MarkRow 
                                key={i}
                                id={obj.id}
                                mark_name={obj.mark_name}
                                score={obj.score}
                                outof={obj.outof}
                                cancel={cancel}
                                weight={obj.weight}
                                courseDeleteKey={courseDeleteKey}
                                courseReadKey={courseReadKey}
                                ReadMarks={ReadMarks}
                                setMark={setMark}
                                courseUpdateKey={courseUpdateKey}
                                classname={classname}
                            /> 
                            
                        
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
