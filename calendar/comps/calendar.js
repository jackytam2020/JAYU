import React,{useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Calendar, CalendarList} from 'react-native-calendars'
import scheduleStyle from '../styling/scheduleStyle'
import NewClass from '../comps/newClass'

function Schedule(){
    const [link, setOpacity] = useState(0.1);
    return(
        <View style={scheduleStyle.container}> 
            <View style={scheduleStyle.topNav}>
                <Button 
                    title={'back'}
                />
                <Button 
                    title={'add'}
                />
            </View>
            <Calendar
            style={scheduleStyle.calendar}
            current={new Date()}
            markingType={'multi-dot'}
            markedDates={{
                '2012-05-08': {dots: [{key: 'vacation', color: 'blue', selectedDotColor: 'white'}, {key: 'massage', color: 'red', selectedDotColor: 'white'}], selected: true},
                '2012-05-09': {dots: [{key: 'vacation', color: 'blue', selectedDotColor: 'red'}, {key: 'massage', color: 'red', selectedDotColor: 'blue'}], disabled: true}
            }}
            hideArrows={false}
            />
            <NewClass 
            />
            
        </View>
    )
}
export default Schedule;