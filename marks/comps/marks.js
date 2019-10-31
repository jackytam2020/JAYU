import React from 'react';
import { View,Text,Button, ScrollView} from 'react-native';
import markStyles from '../styles/markStyles'

function Marks(){
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
                    <View style={markStyles.editboxes}>
                        <Text style={{fontSize:20}}>Add Mark</Text>
                    </View>
                </View>
                <View style={{flex:0.5, flexDirection:'row', justifyContent:'flex-end'}}>
                    <View style={markStyles.editboxes}>
                        <Text style={{fontSize:20}}>Edit Mark</Text>
                    </View>
                </View>
            </View>
        </View>

        {/* Graded items */}
        <View style={markStyles.gradeBox}>
            <View style={markStyles.inputs}>
                <ScrollView>
                    <View style={markStyles.inputRow}>
                        <Text style={markStyles.inputTitle}>Elements</Text>
                        <Text style={markStyles.inputTitle}>Mark</Text>
                    </View>

                    <View style={markStyles.inputRow}>
                        <Text style={markStyles.markName}>First Project</Text>
                        <Text style={markStyles.markName}>100/100</Text>
                    </View>

                    <View style={markStyles.inputRow}>
                        <Text style={markStyles.markName}>First Project</Text>
                        <Text style={markStyles.markName}>100/100</Text>
                    </View>

                    <View style={markStyles.inputRow}>
                        <Text style={markStyles.markName}>First Project</Text>
                        <Text style={markStyles.markName}>100/100</Text>
                    </View>

                    <View style={markStyles.inputRow}>
                        <Text style={markStyles.markName}>First Project</Text>
                        <Text style={markStyles.markName}>100/100</Text>
                    </View>

                    <View style={markStyles.inputRow}>
                        <Text style={markStyles.markName}>First Project</Text>
                        <Text style={markStyles.markName}>100/100</Text>
                    </View>
                </ScrollView>
            </View>

        </View>
    </View>
  );
};
export default Marks;
