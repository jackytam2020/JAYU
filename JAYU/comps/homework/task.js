import React, { useState } from 'react';
import {View, Text, Button, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import DatePicker from 'react-native-datepicker'
import TopStyles from '../../styles/homework/TopStyles';
import FooterBar from '../../comps/footerBar'
import normalize from 'react-native-normalize';


function Task(){
    const[addButton, setAddButton] = useState([]);
    const [assignmentsIcon, setAssignmentsIcon] = useState('􀆊 ');
    const [date, setDueDate] = useState(TopStyles.dueDate1)
    
    var AddDueDate = (<Text style={TopStyles.body2} >Add due date</Text>);
        
   

     return(
    <View>
        <View style={{flexDirection:"row"}}>
            <Text onPress={() =>{
                setAssignmentsIcon('􀆈')
                setDueDate(TopStyles.dueDate)
                var arr = addButton;
                arr.push(1)
                arr = arr.map((o)=>{
                    return o;
                })
                setAddButton(arr);
                arr.splice(1, 1)
                if(assignmentsIcon == '􀆈'){
                    setAssignmentsIcon('􀆊 ');
                    arr.pop()
                    setDueDate(TopStyles.dueDate1)
                }
            } } style={TopStyles.body}>{assignmentsIcon}</Text>
            <TextInput style={TopStyles.placeholder} placeholder="Assignment..."></TextInput>
        </View>
        <View style={{flexDirection:"row"}}>
            <Text style={date} >Add due date</Text>
            <TouchableOpacity style={{marginLeft:180, top:5}}><Text>Done</Text></TouchableOpacity>
        </View>
        {
             addButton.map((obj,i)=>{
                return  <Text style={{marginLeft:110}}>Add a Task</Text>
            })
        }
        <View style={{flex: 0.25, borderBottomColor: '#BFBFBF', borderBottomWidth: 0.5, marginLeft: 50, marginBottom:10}}></View>
    </View>   

    )
}

export default Task;
