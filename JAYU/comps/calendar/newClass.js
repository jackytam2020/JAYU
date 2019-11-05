import React,{useState} from 'react';
import {View, Text, Button} from 'react-native';
import newClassStyle from '../../styles/calendar/newClassStyles';

function NewClass(){ 
    return(   
        <View style={newClassStyle.container}>  
            <View style={newClassStyle.title}>
                <Text style={{fontSize:20}}>New Class</Text>
                <Text>for Thursday, December 19</Text>
            </View>
            <View style={newClassStyle.line}></View>
            
            {/* Course list */}
            <View style={{width:'100%', alignItems:"center", position: "relative", top:'5%'}}>  
                <View style={newClassStyle.courseList}>
                    <View>
                            <View style={{display:'flex', flexDirection:'row'}}>
                                <Text>Accounting for the Manager</Text>   
                            </View>
                            <View style={{width:180, paddingTop:15}}>
                                <View style={newClassStyle.line}></View>
                            </View>
                            <View style={{display:'flex', flexDirection:'row', paddingTop:15}}>
                                <Text>Advanced Photoshop</Text>
                            </View>
                            <View style={{width:180, paddingTop:15}}>
                                <View style={newClassStyle.line}></View>
                            </View>
                            <View style={{display:'flex', flexDirection:'row', paddingTop:15}}>
                                <Text>Assets Design and Integration</Text>
                            </View>
                            <View style={{width:180, paddingTop:15}}>
                                <View style={newClassStyle.line}></View>
                            </View>
                            <View style={{display:'flex', flexDirection:'row', paddingTop:15}}>
                                <Text>Business Communications</Text>
                            </View>
                            <View style={{width:180, paddingTop:15}}>
                                <View style={newClassStyle.line}></View>
                            </View>
                            <View style={{display:'flex', flexDirection:'row', paddingTop:15}}>
                                <Text>Design 2</Text>
                            </View>
                            <View style={{width:180, paddingTop:15}}>
                                <View style={newClassStyle.line}></View>
                            </View>
                            <View style={{display:'flex', flexDirection:'row', paddingTop:15}}>
                                <Text>Professional Sales Skills</Text>
                            </View>
                            <View style={{width:180, paddingTop:15}}>
                                <View style={newClassStyle.line}></View>
                            </View>
                            <View style={{display:'flex', flexDirection:'row', paddingTop:15}}>
                                <Text>Project 2</Text>
                            </View>
                            <View style={{width:180, paddingTop:15}}>
                                <View style={newClassStyle.line}></View>
                            </View>
                            <View style={{display:'flex', flexDirection:'row', paddingTop:15}}>
                                <Text>Web Development 3</Text>
                            </View>
                
                    </View>
                </View>
            </View>
            {/* Cancel and Done buttons */}
            <View style={newClassStyle.CancelNextContainer}>
                <View style={newClassStyle.CancelNext
                }> 
                        <View style={newClassStyle.cancel}>
                            <Text style={{fontSize:20}}>Cancel</Text>
                        </View>
                        <View style={newClassStyle.done}>
                            <Text style={{fontSize:20}}>Done</Text>
                        </View>
                </View>
            </View> 
        </View>
    )
}
export default NewClass;