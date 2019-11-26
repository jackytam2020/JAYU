import React,{useState} from 'react';
import {View, Text, Button,TouchableOpacity} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import scheduleStyle from '../../styles/calendar/scheduleStyle'
import NewClass from '../../comps/calendar/newClass'
import EditClass from '../../comps/calendar/editClass'
import AdjustingClass from '../../comps/calendar/adjustingClass';
import styles from '../../styles/calendar/agendaStyles'
import FooterBar from '../../comps/footerBar'
import Modal from "react-native-modal"

function Schedule(props){
    const [link, setOpacity] = useState(0.1);
    const [editSlide, setEditSlide] = useState(false);
    const [footerDim, setFooterDim]= useState('flex');
    const [mode ,setMode] = useState(1);
    const[items, setItems] = useState([{'2019-11-9': [{text: 'Professional'}]}]);

    const loadItems = (day) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
              const time = day.timestamp + i * 24 * 60 * 60 * 1000;
              const strTime = timeToString(time);
              if (!items[strTime]) {
                items[strTime] = [];
                const numItems = Math.floor(Math.random() * 5);
                for (let j = 0; j < numItems; j++) {
                    items[strTime].push({
                    name: 'Item for ' + strTime,
                    height: Math.max(50, Math.floor(Math.random() * 150))
                  });
                }
              }
            }
            //console.log(this.state.items);
            const newItems = {};
            Object.keys(items).forEach(key => {newItems[key] = items[key];});
            setItems({items: newItems})
          }, 1000);
          // console.log(`Load Items for ${day.year}-${day.month}`);
    }

    const renderItem = (item) => {
        return (
            <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
        )
    }

    const emptyDate = () => {
        return (
            <View style={[styles.item, {height: item.height}]}><Text></Text></View>
        )
    }

    return(
        <View style={scheduleStyle.container}> 
            <View style={scheduleStyle.topNav}>
                <TouchableOpacity
                        onPress={()=>{
                                props.navigation.navigate("HomeScreen")
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
            
            <Agenda
                // the list of items that have to be displayed in agenda. If you want to render item as empty date
                // the value of date key kas to be an empty array []. If there exists no value for date key it is
                // considered that the date in question is not yet loaded
                items={items}
                // callback that gets called when items for a certain month should be loaded (month became visible)
                loadItemsForMonth={(month) => {loadItems}}
                // callback that fires when the calendar is opened or closed
                onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
                // callback that gets called on day press
                onDayPress={(day)=>{console.log('day pressed')}}
                // callback that gets called when day changes while scrolling agenda list
                onDayChange={(day)=>{console.log('day changed')}}
                // initially selected day
                selected={new Date()}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                minDate={'2012-05-10'}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                maxDate={'2012-05-30'}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={50}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={50}
                // specify how each item should be rendered in agenda
                renderItem={(item, firstItemInDay) => {renderItem}}
                // specify how each date should be rendered. day can be undefined if the item is not first in that day.
                renderDay={(day, item) => {return (<View />);}}
                // specify how empty date content with no items should be rendered
                renderEmptyDate={() => {emptyDate}}
                // specify how agenda knob should look like
                renderKnob={() => {return (<View />);}}
                // specify what should be rendered instead of ActivityIndicator
                renderEmptyData = {() => {return (<View />);}}
                // specify your item comparison function for increased performance
                rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
                // Hide knob button. Default = false
                hideKnob={true}
                // By default, agenda dates are marked if they have at least one item, but you can override this if needed
                markedDates={{
                    '2019-11-9': {selected: true, marked: true},
                    '2012-05-17': {marked: true},
                    '2012-05-18': {disabled: true}
                }}
                // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
                onRefresh={() => console.log('refreshing...')}
                // Set this true while waiting for new data from a refresh
                refreshing={false}
                // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
                refreshControl={null}
                // agenda theme
                
                // agenda container style
                style={{
                    flex:1
                }}
             />
           
           <Modal isVisible={editSlide} swipeDirection={'down'} onSwipeComplete={()=>{setEditSlide(false)}}>
                <View style={{ flex:0.9 }}>
                    {mode===1?<NewClass setEditSlide={setEditSlide} setMode={setMode} />:null}
                    {mode===2?<AdjustingClass setEditSlide={setEditSlide} setMode={setMode}/>:null}
                </View>
            </Modal>

            <View style={{width:'100%', height:'10%', position:'absolute', bottom:0}}>
                <FooterBar />
            </View>    
            

        </View>
    )
}
export default Schedule;