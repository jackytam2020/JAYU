import React, { useState, useEffect } from 'react';
import {View, Text, Button,SafeAreaView,KeyboardAvoidingView, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import axios from 'axios';
import CheckBox from 'react-native-check-box';

function TaskItem({id, task_name}){
    const [check, SetCheck] = useState(false);
    const [taskText, setTaskText] = useState();

    const [new_tasks, setNew_tasks] = useState("");
    const [new_completed, setNew_completed] = useState();

    useEffect(()=>{
        setTaskText(task_name);
    }, []);

 

    const UpdateTaskName = async()=>{
        var obj = {
            key:"tasks_update",
            data: {
                id:id,
                task_name:new_tasks,
            }
        };

        var r = await axios.post('https://jayu-d3.herokuapp.com/post', obj);
        console.log("task", r.data);
    }

    return(
            <View style={{flexDirection:"row", marginLeft:90}}> 
                <CheckBox 
                    isChecked={check}
                    checkedCheckBoxColor={"lightgreen"}
                    onClick={()=>{
                        SetCheck(true)
                        if(check== true){
                            SetCheck(false)
                        }
                    }}
                />
                <TextInput 
                style={{fontFamily:'SFProDisplay-Medium', marginLeft:10, marginBottom:20}}
                placeholder="Add a task"
                defaultValue={task_name}
                onChangeText = {(t)=>{
                    UpdateTaskName();
                    setNew_tasks(t);
                 }}
                ></TextInput>
            </View>
    )
}

export default TaskItem;
