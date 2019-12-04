import React, { useState, useEffect } from 'react';
import {View, Text, Button, ScrollView, TouchableOpacity, TextInput,DatePickerIOS} from 'react-native';
import TopStyles from '../../styles/homework/TopStyles';
import FooterBar from '../../comps/footerBar'
import normalize from 'react-native-normalize';
import CheckBox from 'react-native-check-box';
import TaskItem from '../homework/taskItem';
import axios from 'axios';



function Task({id,assignment_name,completed,deleted, due_date,ReadAssignments, updateKey, courseDeleteKey, table}){
    const[addButton, setAddButton] = useState([]);
    const[addTasks, setAddTasks] = useState([]);
    const [assignmentsIcon, setAssignmentsIcon] = useState('􀆊 ');
    const [date, setDueDate] = useState(new Date())
    const [done, setDone] = useState("none");
    
    const [doneBut,setDoneBut] = useState(false);
    const [check, SetCheck] = useState(false)
    const [showPicker, setShowPicker] = useState(TopStyles.hideContainer);
    const [duePickerDate, setDuePickerDate] = useState(due_date);
    const [taskText, setTaskText] = useState();
    const [itemText, setItemText] = useState();
    const [new_assignment, setNewAssignment] = useState("");

   

    useEffect(()=>{
        setNewAssignment(assignment_name);
        ReadTasks();
        if(duePickerDate === ''){
            setDuePickerDate("Add Due Date");
        } else {setDuePickerDate(due_date);}
    }, []);

    //observe change in variable of table
    useEffect(()=>{
       console.log("Something changed")
       console.log(table)
       setDone("none");
       setAssignmentsIcon('􀆊 ');
    }, [table]);

    const UpdateAssignmentName = async()=>{
        var obj = {
            key:updateKey,
            data: {
                id:id,
                assignment_name:new_assignment,
                due_date:duePickerDate
            }
        };

        var r = await axios.post('https://jayu-d3.herokuapp.com/post', obj);
        console.log("assignment", r.data);
    }

    const DeleteAssignment = async()=> {
        var obj = {
            key: courseDeleteKey,
            data:{
                id:id
            }
        };
        var r = await axios.post('https://jayu-d3.herokuapp.com/post', obj);
        ReadAssignments();
    }
  


   
    var moment = require("moment");
    var dd = JSON.stringify(moment(date).format("MM/DD/YYYY"));

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]

    var task_name = "";
    var ass_id = id;

    // create new task items
    const CreateTasks = async()=>{
        //fetch db to create users
        console.log("task created")
        var obj = {
            key :"tasks_create",
            data:{
                task_name:task_name,
                table_name:table,
                ass_id:ass_id,
                completed:completed
            }
        }
        var r = await axios.post('https://jayu-d3.herokuapp.com/post', obj);
        console.log("Create", r.data);
        await ReadTasks();
        
    }
    const ReadTasks = async()=>{
        // var k = key || readKey;
        var obj = {
            key:"tasks_read",
            data:{
                table_name:table,
                ass_id:id,
            }
        }

        var r = await axios.post('https://jayu-d3.herokuapp.com/post', obj);
       
        var dbusers = JSON.parse(r.data.body);
        console.log("Read Task", dbusers);
        console.log(table)
        setAddTasks(dbusers.data); 
    }
    
     return(
    <View>
        <View style={{flexDirection:"row"}}>
            <View style={{top:10}}>
                <CheckBox 
                    isChecked={check}
                    checkedCheckBoxColor={"lightgreen"}
                    onClick={()=>{
                        SetCheck(true)
                        DeleteAssignment()
                        console.log(courseDeleteKey)
                        if(check == true){
                            SetCheck(false)
                            
                        }
                    }}
                    
                />
            </View>
            <Text onPress={() =>{
                // activates drop down for tasks

                setAssignmentsIcon('􀆈')
               
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
                    setDone("none")
                    //setDone1("none");
                    //setDoneBut(!doneBut);
                }
                ReadTasks();
                console.log(id)
            
             } } style={TopStyles.body}>{assignmentsIcon}</Text>
           
            <ScrollView>
            <TextInput 
            style={TopStyles.placeholder} 
            placeholder="Assignment..."
            onChangeText = {(t)=>{
               setNewAssignment(t);
               UpdateAssignmentName();
               //setDone1("flex");
            }}
            defaultValue={assignment_name}
            ></TextInput>
            </ScrollView>

            <TouchableOpacity style={{alignItems:"center",justifyContent:"center", flex: 0.5, display: done}}
            onPress={() =>{
               
                setDueDate(date)
                setAssignmentsIcon('􀆊 ');
                setDone("none")
                UpdateAssignmentName();
                console.log(date);
            } }
            >
                <Text style={{color:'#00AEEF'}}>Done</Text>
            </TouchableOpacity>
        </View>


       <ScrollView>
        <View style={{display:done}}>
            {/*Task item rows */}
            <View style={{flexDirection:"row"}}>
                <Text style={TopStyles.dueDate} 
                    onPress={()=>{
                        setShowPicker(TopStyles.dateContainer)
                        
                    }}
                >{duePickerDate}</Text>
                <TouchableOpacity style={{marginLeft:150, display:done,marginTop:10}}><Text 
                style={{color:'#00AEEF',}}
                onPress={()=>{
                   //setDone1("none");
                   // setDuePickerDate(dd)
                    setShowPicker(TopStyles.hideContainer)
                   
                }}>Done</Text></TouchableOpacity>
            </View>
            <View style={showPicker}>
                
                {/* date picker for due date */}
                <DatePickerIOS 
                    date={date}
                    mode = {'date'}
               
                onDateChange = {async(d)=>{
                    setDuePickerDate(moment(d).format("MM/DD/YYYY"));
                    /* var date = await moment(d).format("MM/DD/YYYY");
                       setDuePickerDate(date);
                       console.log(dd) */ 
                }}
                />
            </View>
            {
                addTasks.map((obj,i)=>{
                    return  <TaskItem 
                    key={i}
                    id={obj.id}
                    task_name={obj.task_name}
                    />
                })
            }
            <View style={{flexDirection:'row'}}>
                <Text style={{left:90, fontFamily:'SFProDisplay-Medium'}}
                  //Adds a new task item under each assignment
                  onPress={()=>{
                        CreateTasks();
                    }}
                >􀅼 Add a Task</Text>                  
            </View>
       </View>
       </ScrollView>
      
       
        <View style={{flex: 0.25, borderBottomColor: '#BFBFBF', borderBottomWidth: 0.5, marginLeft: 50, marginBottom:10}}></View>
    </View>   

    )
}

export default Task;
