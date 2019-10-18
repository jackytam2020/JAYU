import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/homescreenStyle';
import bottomHalf from '../styles/bottomHalfStyles';




function BottomHalf(){
  return (
    <View style={styles.bottom}>

        <View style={bottomHalf.boxRow}>
            <View style={bottomHalf.box}>
                <Text style={bottomHalf.boxText}>Today's Tasks</Text>
            </View>
            <View style={bottomHalf.box}>
                <Text style={bottomHalf.boxText}>Community</Text>
            </View>
        </View>

        <View style={bottomHalf.boxRow2}>
            <View style={bottomHalf.box}>
                <Text style={bottomHalf.boxText}>View Marks</Text>
            </View>
            <View style={bottomHalf.box}>
                <Text style={bottomHalf.boxText}>Settings</Text>
            </View>
        </View>

    </View>
  )
}

export default BottomHalf;
