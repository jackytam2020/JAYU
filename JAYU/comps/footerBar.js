import React from 'react';
import { View,Text,Button, TouchableOpacity} from 'react-native';
import footerStyles from '../styles/footerStyles'

function FooterBar(props){
  return (
    <View style={footerStyles.container}>
       <TouchableOpacity
            onPress={()=>{
                props.navigation.navigate('Schedule')
        }}>
            <Text style={{fontSize:20, color:'#007AFF'}}>Calendar</Text>
        </TouchableOpacity>                   
        <TouchableOpacity
            onPress={()=>{
                props.navigation.navigate('Tophw')
        }}>
            <Text style={{fontSize:20, color:'#007AFF'}}>Homework</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={()=>{
                props.navigation.navigate('Classboard')
        }}>
            <Text style={{fontSize:20, color:'#007AFF'}}>Classboard</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={()=>{
                props.navigation.navigate('Marks')
        }}>
            <Text style={{fontSize:20, color:'#007AFF'}}>Marks</Text>
        </TouchableOpacity>
    </View>
  );
};
export default FooterBar;
