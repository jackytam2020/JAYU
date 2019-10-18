
import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/homescreenStyle';
import topHalf from '../styles/topHalfStyle';



function TopHalf(){
  return (
    <View style={styles.top}>
        {/* Greeting */}
        <View>
            <Text style={topHalf.greetingText}>Good Morning Name</Text>
            <Text style={topHalf.progressSpan}>so far, you're doing great!</Text>
        </View>

        {/* Progress update */}

        <View style={topHalf.progressBox}>
            <View style={topHalf.percentageTask}>
                <Text><Text style={topHalf.percent}>46</Text><Text style={topHalf.progress}>% progress</Text></Text>
            </View>

        {/* completed tasks */}    

            <View style={topHalf.done}>
                <Text style={topHalf.numberDone}>19<Text> Tasks Done</Text></Text>
            </View>

        {/* Remaining Tasks */}

            <View style={topHalf.remain}>
                <Text style={topHalf.numberDone}>24<Text> Tasks Remaining</Text></Text>
            </View>

         {/* Line Seperator */}

            <View style={topHalf.lineWidth}>
                <View style={topHalf.line}></View>
            </View>
        
        {/* Deadlines */}   

            <View style={topHalf.deadlines}>
                <Text>Design 2 exam in 1 week</Text>
                <Text>Business Communication exam in 2 weeks</Text>
                <Text>Project 2 weekly report due tomorrow</Text>
                <Text>Sales Presentation due in 2 days</Text>
            </View> 
        
        </View>

    </View>
  )
}

export default TopHalf;