import React, { useState } from 'react';
import {View, Text, Button, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import DatePicker from 'react-native-datepicker'
import TopStyles from '../../styles/homework/TopStyles';
import FooterBar from '../../comps/footerBar'
import normalize from 'react-native-normalize';
import CheckBox from 'react-native-check-box';


function Task(){
    const[addButton, setAddButton] = useState([]);
    const[addTasks, setAddTasks] = useState([]);
    const [assignmentsIcon, setAssignmentsIcon] = useState('􀆊 ');
    const [date, setDueDate] = useState(TopStyles.dueDate1)
    const [done, setDone] = useState("none");
    const [check, SetCheck] = useState(false)
    
    var taskItem = ( <View style={{flexDirection:"row", marginLeft:90}}> 
                    <CheckBox 
                        isChecked={check}
                        checkedCheckBoxColor={"green"}
                        onClick={()=>{
                            SetCheck(true)
                            if(check== true){
                                SetCheck(false)
                            }
                        }}
                    />
                    <Text>hi</Text>
                </View>);
        
    

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
                setDone("flex")
                setAddButton(arr);
                arr.splice(1, 1)
                if(assignmentsIcon == '􀆈'){
                    setAssignmentsIcon('􀆊 ');
                    arr.pop()
                    setDueDate(TopStyles.dueDate1)
                    setDone("none")
                }
            } } style={TopStyles.body}>{assignmentsIcon}</Text>
            <TextInput style={TopStyles.placeholder} placeholder="Assignment..."></TextInput>
        </View>
       
        <View style={{display:done}}>
            <View style={{flexDirection:"row"}}>
                <Text style={date} >Add due date</Text>
                <TouchableOpacity style={{marginLeft:150, top:5, display:done}}><Text>Done</Text></TouchableOpacity>
            </View>
            {
                addTasks.map((obj,i)=>{
                    return  taskItem
                })
            }
       </View>
      
        {
             addButton.map((obj,i)=>{
                return  <View style={{flexDirection:'row'}}>
                                <Text style={{left:90}}
                                    onPress={()=>{
                                        var arr1 = addTasks;
                                        arr1.push(1)
                                        arr1 = arr1.map((e)=>{
                                            return e;
                                        })
                                        setAddTasks(arr1)
                                    }}
                                >Add</Text>
                                <TextInput 
                                    style={{marginLeft:110}} placeholder="Add a Task">
                                </TextInput>
                        </View>
            })
        }
        <View style={{flex: 0.25, borderBottomColor: '#BFBFBF', borderBottomWidth: 0.5, marginLeft: 50, marginBottom:10}}></View>
    </View>   

    )
}

export default Task;
