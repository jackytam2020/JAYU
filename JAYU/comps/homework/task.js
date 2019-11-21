import React, { useState } from 'react';
import {View, Text, Button, ScrollView, TouchableOpacity, TextInput,DatePickerIOS} from 'react-native';
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
    const [done1, setDone1] = useState("none");
    const [doneBut,setDoneBut] = useState(false);
    const [check, SetCheck] = useState(false)
    const [showPicker, setShowPicker] = useState(TopStyles.hideContainer);
    const [duePickerDate, setDuePickerDate] = useState('Add due date');
    const [taskText, setTaskText] = useState();
  
    

    var dd = JSON.stringify(duePickerDate);
    var moment = require("moment");

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]

    
    var taskItem = ( <View style={{flexDirection:"row", marginLeft:90}}> 
                    {/*<CheckBox 
                        isChecked={check}
                        checkedCheckBoxColor={"green"}
                        onClick={()=>{
                            SetCheck(true)
                            if(check== true){
                                SetCheck(false)
                            }
                        }}
                    />*/}
                    <TextInput style={{fontFamily:'SFProDisplay-Medium', marginLeft:20, color:"lightgrey"}} value = "Task Title..."> </TextInput>
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
                setDone("flex");
                
                setAddButton(arr);
                arr.splice(1, 1)
                if(assignmentsIcon == '􀆈'){
                    setAssignmentsIcon('􀆊 ');
                    arr.pop()
                    setDueDate(TopStyles.dueDate1)
                    setDone("none")
                    setDone1("none");
                    //setDoneBut(!doneBut);
                }
                
            
             } } style={TopStyles.body}>{assignmentsIcon}</Text>
           
            <ScrollView>
            <TextInput style={TopStyles.placeholder} placeholder="Assignment..."
            onChangeText = {()=>{
               setDone("flex");
            }}
            ></TextInput>
            </ScrollView>

            <TouchableOpacity style={{alignItems:"center",justifyContent:"center", flex: 0.5, display: done}}
            onPress={() =>{
                
                setDueDate(TopStyles.dueDate)
                
               
                setAssignmentsIcon('􀆊 ');
                
                setDueDate(TopStyles.dueDate1)
                setDone("none")
               
            } }
            >
                <Text style={{color:"#00AEEF"}}>Done</Text>
            </TouchableOpacity>
        </View>
       <ScrollView>
        <View style={{display:done}}>
            <View style={{flexDirection:"row"}}>
                <Text style={date} 
                    onPress={()=>{
                        setShowPicker(TopStyles.dateContainer)
                        setDone1("flex");
                    }}
                >{duePickerDate}</Text>
                <TouchableOpacity style={{marginLeft:150, display:done1,marginTop:10}}><Text 
                style={{color:'#00AEEF',}}
                onPress={()=>{
                    setDuePickerDate(dd)
                    setShowPicker(TopStyles.hideContainer)
                    setDone1("none");
                }}>Done</Text></TouchableOpacity>
            </View>
            <View style={showPicker}>
                <DatePickerIOS 
                    date={new Date()}
                    mode = {'date'}
               
                onDateChange = {(d)=>{
                   setDuePickerDate(moment(d).format("MM/DD/YYYY"));
                }}
                />
            </View>
            {
                addTasks.map((obj,i)=>{
                    return  taskItem
                })
            }
             {
             addButton.map((obj,i)=>{
                return  <View style={{flexDirection:'row'}}>
                                <Text style={{left:90, fontFamily:'SFProDisplay-Medium'}}
                                    onPress={()=>{
                                        var arr1 = addTasks;
                                        arr1.push(1)
                                        arr1 = arr1.map((e)=>{
                                            return e;
                                        })
                                        setAddTasks(arr1)
                                    }}
                                >􀅼 Add a Task</Text>
                                <TextInput 
                                    style={{marginLeft:110}} 
                                    onChangeText={(t)=>{
                                        setTaskText(t);
                                    }}
                                    >
                                </TextInput>
                        </View>
            })
        }
       </View>
       </ScrollView>
      
       
        <View style={{flex: 0.25, borderBottomColor: '#BFBFBF', borderBottomWidth: 0.5, marginLeft: 50, marginBottom:10}}></View>
    </View>   

    )
}

export default Task;
