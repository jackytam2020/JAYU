import React,{useState} from 'react';
import {View, Text, Button,TouchableOpacity} from 'react-native';
import {Calendar, CalendarList} from 'react-native-calendars'
import scheduleStyle from '../../styles/calendar/scheduleStyle'
import NewClass from '../../comps/calendar/newClass'
import EditClass from '../../comps/calendar/editClass'
import AdjustingClass from '../../comps/calendar/adjustingClass';
import FooterBar from '../../comps/footerBar'
import Modal from "react-native-modal"

function Schedule(props){
    const [link, setOpacity] = useState(0.1);
    const [editSlide, setEditSlide] = useState(false);
    const [footerDim, setFooterDim]= useState('flex')
    return(
        <View style={scheduleStyle.container}> 
            <View style={scheduleStyle.topNav}>
                <TouchableOpacity
                        onPress={()=>{
                                props.navigation.goBack()
                        }}
                    >
                            <Text style={{fontSize:20, marginLeft:20, color:'#007AFF'}}>back</Text>
                </TouchableOpacity>
                 <TouchableOpacity
                    onPress={()=>{
                        setEditSlide(true)
                        setFooterDim('none')
                    }}>
                         <Text style={{fontSize:20, marginRight:20, color:'#007AFF'}}>Add</Text>
                 </TouchableOpacity>
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
           
           <Modal isVisible={editSlide} swipeDirection={'down'} onSwipeComplete={()=>{setEditSlide(false)}}>
                <View style={{ flex:0.9 }}>
                        <NewClass />
                </View>
            </Modal>

            <View style={{width:'100%', height:'10%', position:'absolute', bottom:0, display:footerDim}}>
                <FooterBar />
            </View>    
            

        </View>
    )
}
export default Schedule;