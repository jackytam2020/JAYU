import React, {useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity, DatePickerIOS} from 'react-native';

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]
function DatePick(){

    const [dueDate, setDueDate] = useState();
    
   var dd = JSON.stringify(dueDate);

  

    return(
        <View style={{flex:1}}>
            <DatePickerIOS style = {{justifyContent: "center"}}
                date = {new Date()} 
                mode = {'date'}
               
                onDateChange = {(d)=>{
                   setDueDate(months[d.getMonth()]+ " " +d.getDay()+ " " + d.getFullYear());
    
                }}
            
            />
            <Text>{dd}</Text>
        
        </View>



    )


}


export default DatePick;