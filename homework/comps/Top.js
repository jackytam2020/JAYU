import React from 'react';
import {View, Text, Button} from 'react-native';
import TopStyles from '../Styles/TopStyles'
function Tophw(){

    return(
        <View style={TopStyles.container}>
            <View style={{flex: 0.25, borderBottomColor: '#BFBFBF', borderBottomWidth: 1, marginBottom:20 }}></View>
            <Text style={TopStyles.headerText}>Advanced Photoshop</Text>
                <View style={TopStyles.asgContainer}>
                <View style={{flex: 0.25, borderBottomColor: '#BFBFBF', borderBottomWidth: 0.5, marginLeft: 50}}></View>
                    <Text style={TopStyles.body}>Assigment 1</Text>
                    <View style={{flex: 0.25, borderBottomColor: '#BFBFBF', borderBottomWidth: 0.5, marginLeft: 50}}></View>
                    <Text style={TopStyles.body}>Assigment 2</Text>
                    <View style={{flex: 0.25, borderBottomColor: '#BFBFBF', borderBottomWidth: 0.5, marginLeft: 50}}></View>
                    <Text style={TopStyles.body}>Assigment 3</Text>
                </View>

            
        </View>
    )
}

export default Tophw;
