import React, { useState, useEffect } from 'react';
import {View, Text, Button, ScrollView, TouchableOpacity, TextInput,DatePickerIOS} from 'react-native';
import TopStyles from '../../styles/homework/TopStyles';
import FooterBar from '../../comps/footerBar'
import normalize from 'react-native-normalize';
import CheckBox from 'react-native-check-box';
import TaskItem from '../homework/taskItem';
import axios from 'axios';



<<<<<<< HEAD
function Task({id,assignment_name,completed,deleted, ReadAssignments, updateKey, courseDeleteKey, table}){
=======
function Task({id,assignment_name,completed,deleted, due_date,ReadAssignments, updateKey, courseDeleteKey}){
>>>>>>> 7eecbf86766ffe2afce175c2f415dde644398eb2
    const[addButton, setAddButton] = useState([]);
    const[addTasks, setAddTasks] = useState([]);
    const [assignmentsIcon, setAssignmentsIcon] = useState('􀆊 ');
    const [date, setDueDate] = useState(new Date())
    const [done, setDone] = useState("none");
    const [doneBut,setDoneBut] = useState(false);
    const [check, SetCheck] = useState(false)
    const [showPicker, setShowPicker] = useState(TopStyles.hideContainer);
    const [duePickerDate, setDuePickerDate] = useState('Add due date');
    const [taskText, setTaskText] = useState();
    const [itemText, setItemText] = useState();
    const [new_assignment, setNewAssignment] = useState("");

    useEffect(()=>{
        setNewAssignment(assignment_name);
        ReadTasks();
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

        var r = await axios.post('http://localhost:3001/post', obj);
        console.log("assignment", r.data);
    }

    const DeleteAssignment = async()=> {
        var obj = {
            key: courseDeleteKey,
            data:{
                id:id
            }
        };
        var r = await axios.post('http://localhost:3001/post', obj);
        ReadAssignments();
    }
  
<<<<<<< HEAD
     
=======


   
>>>>>>> 7eecbf86766ffe2afce175c2f415dde644398eb2
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
        var r = await axios.post('http://localhost:3001/post', obj);
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

        var r = await axios.post('http://localhost:3001/post', obj);
       
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
<<<<<<< HEAD
=======
               
>>>>>>> 7eecbf86766ffe2afce175c2f415dde644398eb2
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
<<<<<<< HEAD
                    setDone("none")
                    setDone1("none");
=======
                   
                    setDone("none")
                    
                    //setDoneBut(!doneBut);
>>>>>>> 7eecbf86766ffe2afce175c2f415dde644398eb2
                }
                ReadTasks();
                console.log(id)
            
             } } style={TopStyles.body}>{assignmentsIcon}</Text>
           
            <ScrollView>
            <TextInput 
            style={TopStyles.placeholder} 
            placeholder="Assignment..."
            onChangeText = {(t)=>{
<<<<<<< HEAD
               UpdateAssignmentName();
               setNewAssignment(t);
               setDone1("flex");
=======
               setNewAssignment(t);
               UpdateAssignmentName();
>>>>>>> 7eecbf86766ffe2afce175c2f415dde644398eb2
            }}
            defaultValue={assignment_name}
            ></TextInput>
            </ScrollView>

            <TouchableOpacity style={{alignItems:"center",justifyContent:"center", flex: 0.5, display: done}}
            onPress={() =>{
<<<<<<< HEAD
                setDueDate(TopStyles.dueDate)
=======
               
                setDueDate(date)
>>>>>>> 7eecbf86766ffe2afce175c2f415dde644398eb2
                setAssignmentsIcon('􀆊 ');
                setDone("none")
                UpdateAssignmentName();
                console.log(date);
            } }
            >
                <Text style={{display:done1,color:'#00AEEF'}}>Done</Text>
            </TouchableOpacity>
        </View>


       <ScrollView>
        <View style={{display:done}}>
            {/*Task item rows */}
            <View style={{flexDirection:"row"}}>
                <Text style={TopStyles.dueDate} 
<<<<<<< HEAD
=======
                    placeholder="Set Due Date"
>>>>>>> 7eecbf86766ffe2afce175c2f415dde644398eb2
                    onPress={()=>{
                        setShowPicker(TopStyles.dateContainer)
                        
                    }}
                >{duePickerDate}</Text>
                <TouchableOpacity style={{marginLeft:150, display:done,marginTop:10}}><Text 
                style={{color:'#00AEEF',}}
                onPress={()=>{
<<<<<<< HEAD
                    // setDuePickerDate(dd)
                    setShowPicker(TopStyles.hideContainer)
                    setDone1("none");
=======
                   
                    setShowPicker(TopStyles.hideContainer)
>>>>>>> 7eecbf86766ffe2afce175c2f415dde644398eb2
                   
                }}>Done</Text></TouchableOpacity>
            </View>
            <View style={showPicker}>
                
                {/* date picker for due date */}
                <DatePickerIOS 
                    date={date}
                    mode = {'date'}
               
<<<<<<< HEAD
                    onDateChange = {async(d)=>{
                        setDueDate(d);
                        var date = await moment(d).format("MM/DD/YYYY");
                       setDuePickerDate(date);
                       console.log(dd)
   
                    }}
=======
                onDateChange = {async(d)=>{
                    setDuePickerDate(moment(d).format("MM/DD/YYYY"));
                   
                }}
>>>>>>> 7eecbf86766ffe2afce175c2f415dde644398eb2
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
