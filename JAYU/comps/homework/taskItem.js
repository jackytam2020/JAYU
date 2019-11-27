import React, { useState, useEffect } from 'react';
import {View, Text, Button,SafeAreaView,KeyboardAvoidingView, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import axios from 'axios';
import CheckBox from 'react-native-check-box';

function TaskItem(){
    const [check, SetCheck] = useState(false);
    const [taskText, setTaskText] = useState();

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
                <TextInput style={{fontFamily:'SFProDisplay-Medium', marginLeft:10, marginBottom:20}}placeholder="Add a task"></TextInput>
            </View>
    )
}

export default TaskItem;
