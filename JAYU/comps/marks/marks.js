import React,{useState} from 'react';
import { View,Text,Button, ScrollView, TouchableOpacity} from 'react-native';
import markStyles from '../../styles/marks/markStyles';
import FooterBar from '../../comps/footerBar';
import EditMark from '../../comps/marks/editMark';
import NewMark from '../../comps/marks/newMark'
import Modal from "react-native-modal"

function Marks(props){
    const [cancel, setCancel] = useState(markStyles.cancel)
    const [editBut, setEditBut] = useState("Edit Mark")
    const [slideup, setSlideup] = useState(false)
    const [slideNewMark, setSlideNewMark] = useState(false)
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
                                setSlideNewMark(true)
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
                    <ScrollView>
                        <View style={markStyles.inputTitleRow}>
                            <Text style={markStyles.inputTitle}>Elements</Text>
                            <Text style={markStyles.inputTitle}>Mark</Text>
                        </View>

                        <View style={markStyles.inputRow}>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity style={cancel}></TouchableOpacity>
                                <Text style={markStyles.markName}
                                onPress={()=>{
                                    setSlideup(true)
                                }}
                                >First Project</Text>
                            </View>
                            <Text style={markStyles.markName}>100/100</Text>
                        </View>

                        <View style={markStyles.inputRow}>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity style={cancel}></TouchableOpacity>
                                <Text style={markStyles.markName}>First Project</Text>
                            </View>
                            <Text style={markStyles.markName}>100/100</Text>
                        </View>

                        <View style={markStyles.inputRow}>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity style={cancel}></TouchableOpacity>
                                <Text style={markStyles.markName}>First Project</Text>
                            </View>
                            <Text style={markStyles.markName}>100/100</Text>
                        </View>

                        <View style={markStyles.inputRow}>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity style={cancel}></TouchableOpacity>
                                <Text style={markStyles.markName}>First Project</Text>
                            </View>
                            <Text style={markStyles.markName}>100/100</Text>
                        </View>

                        <View style={markStyles.inputRow}>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity style={cancel}></TouchableOpacity>
                                <Text style={markStyles.markName}>First Project</Text>
                            </View>
                            <Text style={markStyles.markName}>100/100</Text>
                        </View>
                    </ScrollView>
                </View>

            </View>
            
            <View style={{height:'10%', width:'100%', position:'absolute', bottom:0}}>
                <FooterBar/>
            </View>

            {/*Slide up pages */}
            <Modal isVisible={slideup} swipeDirection={'down'} onSwipeComplete={()=>{setSlideup(false)}}>
                <View style={{ flex:0.9 }}>
                        <EditMark setSlideup={setSlideup}/>
                </View>
            </Modal>

            <Modal isVisible={slideNewMark} swipeDirection={'down'} onSwipeComplete={()=>{setSlideNewMark(false)}}>
                <View style={{ flex:0.9 }}>
                        <NewMark setSlideNewMark={setSlideNewMark}/>
                </View>
            </Modal>
    </View>
  );
};
export default Marks;
