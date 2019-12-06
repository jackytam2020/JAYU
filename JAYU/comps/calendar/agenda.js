import React, {useState, useEffect} from 'react';
import {View, Text, Button, SafeAreaView, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import axios from 'axios';

function Card({id,course_name, color, bg_color, icon,assignment_name, due_date, completed, deleted, ReadAssignments}){

    
    var moment = require("moment");
    var dd = JSON.stringify(moment(due_date).format("MM/DD/YYYY"));

    return(
        <View style ={{ 
        flexDirection:"row", 
        backgroundColor: bg_color, 
        borderBottomWidth: 1,
        borderBottomColor: color,
        alignText: "center",
        justifyContent:"center",
        padding: "3%",
        margin: "1%",
        
        }}>

            <View style={{ 
            alignItems:"center", 
            flex:0.65,
            
         
            }}>
                 <Text style ={{color:color, fontSize: 50, fontFamily:"SFProDisplay-Medium"}}>{icon}</Text>
            </View>
            <View style={{flex: 1.5}}>
                <Text style = {{color: color}}>{course_name}</Text>
                <Text style = {{color: color, fontSize: 20}}>{assignment_name}</Text>
                <Text style = {{color: color, padding: "3%"}}>{due_date}</Text>
            </View>
        </View>



    )

}

export default Card;