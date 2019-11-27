import React, {useState, useEffect} from 'react';
import {View, Text, Button, SafeAreaView, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import axios from 'axios';

function Card({id,course_name, color, bg_color, icon,assignment_name, completed, deleted, ReadAssignments}){

    return(
        <View style ={{flex:1, 
        flexDirection:"row", 
        backgroundColor: bg_color, 
        borderRadius:22, 
        margin: "1%",
        padding: "3%",
        alignText: "center",

        }}>
            <View style={{ alignItems:"center", 
            margin: "4%",
            flex:0.25,
            height: "100%"
            }}>
                 <Text style ={{color:color, fontSize: 30}}>{icon}</Text>
            </View>
            <View>
                <Text style = {{color: color}}>{course_name}</Text>
                <Text style = {{color: color}}> {assignment_name}</Text>
                <Text style = {{color: color, padding: "3%"}}> Due Nov. 30</Text>
            </View>
        </View>



    )

}

export default Card;