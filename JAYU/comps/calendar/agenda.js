import React, {useState, useEffect} from 'react';
import {View, Text, Button, SafeAreaView, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import axios from 'axios';

function Card({id, assignment_name, completed, deleted, ReadAssignments}){

    return(
        <View style ={{flex:1, 
        flexDirection:"row", 
        backgroundColor:"lightgreen", 
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
                 <Text style ={{color:"green"}}>Icon</Text>
            </View>
            <View>
                <Text style = {{color: "green"}}> Business Communication 2</Text>
                <Text style = {{color: "green"}}> {assignment_name}</Text>
                <Text style = {{color: "green", padding: "3%"}}> Due Nov. 30</Text>
            </View>
        </View>



    )

}

export default Card;