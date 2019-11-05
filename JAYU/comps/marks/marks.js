import React,{useState} from 'react';
import { View,Text,Button, ScrollView, TouchableOpacity} from 'react-native';
import markStyles from '../../styles/marks/markStyles';
import FooterBar from '../../comps/footerBar';
import EditMark from '../../comps/marks/editMark';
import NewMark from '../../comps/marks/newMark'

function Marks(){
    const [cancel, setCancel] = useState(markStyles.cancel)
    const [editBut, setEditBut] = useState("Edit Mark")
    const [slideup, setSlideup] = useState(0)
    const [slideNewMark, setSlideNewMark] = useState(0)
  return (
    <View style={{flex:1,backgroundColor:'#fff5d7'}}>
            <View style={markStyles.navBar}>
                <View style={{width:"20%", position:'relative'}}>
                    <Button 
                        title="Back"
                    />
                </View>
                <View style={{width:"100%", position:'absolute', alignItems:'center'}}>
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
                                setSlideNewMark('93%')
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
                                    setSlideup('93%')
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
            
            <View style={{flex:0.13, width:'100%', position:'relative', justifyContent:'flex-end'}}>
                <FooterBar/>
           </View>

            {/*Slide up pages */}
            <View style={{height:slideup, width:'100%', position:'absolute', bottom:0}}>
                <EditMark />
            </View> 
            <View style={{height:slideNewMark, width:'100%', position:'absolute', bottom:0}}>
                <NewMark />
            </View>   
    </View>
  );
};
export default Marks;
