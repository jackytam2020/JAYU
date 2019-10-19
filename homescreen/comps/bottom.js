import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/homescreenStyle';
import bottomHalf from '../styles/bottomHalfStyles';




function BottomHalf(){
  return (
    <View style={styles.bottom}>

        <View style={bottomHalf.boxRow}>
            <View style={bottomHalf.box}>
                <Text style={bottomHalf.boxText}> View Today's Tasks</Text>
            </View>
        </View>
            
            <View style={bottomHalf.box}>
                <Text style={bottomHalf.boxText2}>Community</Text>
            </View>
        

        <View style={bottomHalf.boxRow2}>
            <View style={bottomHalf.box}>
                <Text style={bottomHalf.boxText2}>View Marks</Text>
            </View>
        </View>

    </View>
  )
}

export default BottomHalf;
