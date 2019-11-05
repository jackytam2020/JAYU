import React,{useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Calendar, CalendarList} from 'react-native-calendars'
import scheduleStyle from '../../styles/calendar/scheduleStyle'
import NewClass from '../../comps/calendar/newClass'
import EditClass from '../../comps/calendar/editClass'
import AdjustingClass from '../../comps/calendar/adjustingClass';
import FooterBar from '../../comps/footerBar'

function Schedule(){
    const [link, setOpacity] = useState(0.1);
    const [editSlide, setEditSlide] = useState(0);
    const [footerDim, setFooterDim]= useState('flex')
    return(
        <View style={scheduleStyle.container}> 
            <View style={scheduleStyle.topNav}>
                <Button 
                    title={'back'}
                />
                <Button 
                    title={'add'}
                    onPress={()=>{
                        setEditSlide('95%')
                        setFooterDim('none')
                    }}
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
           
            <View style={{height:editSlide, width:'100%', position:'absolute', bottom:0}}>
                <NewClass />
            </View>   

            <View style={{width:'100%', height:'10%', position:'absolute', bottom:0, display:footerDim}}>
                <FooterBar />
            </View>    
            

        </View>
    )
}
export default Schedule;