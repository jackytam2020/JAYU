import React , {useState} from 'react';
import { View,Text,Button, TouchableOpacity} from 'react-native';
import footerStyles from '../styles/footerStyles'
import { withNavigation } from 'react-navigation'

function FooterBar(props){

    const [BlueIcon, setBlueIcon] = useState("off");
    const [CalendarIcon, setCalendarIcon] = useState(footerStyles.icon);
    const [HomeworkIcon, setHomeworkIcon] = useState(footerStyles.icon);
    const [ClassBoardIcon, setClassBoardIcon] = useState(footerStyles.icon);
    const [MarkIcon, setMarkIcon] = useState(footerStyles.icon);

    const [BlueText, setBlueText] = useState("off");
    const [CalendarText, setCalendarText] = useState(footerStyles.text);
    const [HomeworkText, setHomeworkText] = useState(footerStyles.text);
    const [ClassBoardText, setClassBoardText] = useState(footerStyles.text);
    const [MarkText, setMarkText] = useState(footerStyles.text);

  return (
    <View style={footerStyles.container}>
       <TouchableOpacity style={footerStyles.each}
            onPress={()=>{
                if (BlueIcon == 'off'){
                    setBlueIcon('on')
                    setCalendarIcon(footerStyles.iconOn)
                    setHomeworkIcon(footerStyles.icon)
                    setClassBoardIcon(footerStyles.icon)
                    setMarkIcon(footerStyles.icon)
                }
                if (BlueText == 'off'){
                    setBlueText('on')
                    setCalendarText(footerStyles.textOn)
                    setHomeworkText(footerStyles.text)
                    setClassBoardText(footerStyles.text)
                    setMarkText(footerStyles.text)
                }
                props.navigation.navigate('Schedule')
        }}>
            <Text style={CalendarIcon}>􀉉</Text>
            <Text style={CalendarText}>Calendar</Text>
        </TouchableOpacity>                   
        <TouchableOpacity style={footerStyles.each}
            onPress={()=>{
                if (BlueIcon == 'off'){
                    setBlueIcon('on')
                    setHomeworkIcon(footerStyles.iconOn)
                    setCalendarIcon(footerStyles.icon)
                    setClassBoardIcon(footerStyles.icon)
                    setMarkIcon(footerStyles.icon)
                }
                if (BlueText == 'off'){
                    setBlueText('on')
                    setHomeworkText(footerStyles.textOn)
                    setCalendarText(footerStyles.text)
                    setClassBoardText(footerStyles.text)
                    setMarkText(footerStyles.text)
                }
                props.navigation.navigate('Homework')
        }}>
            <Text style={HomeworkIcon}>􀉆</Text>
            <Text style={HomeworkText}>Homework</Text>
        </TouchableOpacity>
        <TouchableOpacity style={footerStyles.each}
            onPress={()=>{
                if (BlueIcon == 'off'){
                    setBlueIcon('on')
                    setHomeworkIcon(footerStyles.icon)
                    setCalendarIcon(footerStyles.icon)
                    setClassBoardIcon(footerStyles.iconOn)
                    setMarkIcon(footerStyles.icon)
                }
                if (BlueText == 'off'){
                    setBlueText('on')
                    setHomeworkText(footerStyles.text)
                    setCalendarText(footerStyles.text)
                    setClassBoardText(footerStyles.textOn)
                    setMarkText(footerStyles.text)
                }
                props.navigation.navigate('Classboard')
        }}>
            <Text style={ClassBoardIcon}>􀉬</Text>
            <Text style={ClassBoardText}>Classboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={footerStyles.each}
            onPress={()=>{
                if (BlueIcon == 'off'){
                    setBlueIcon('on')
                    setHomeworkIcon(footerStyles.icon)
                    setCalendarIcon(footerStyles.icon)
                    setClassBoardIcon(footerStyles.icon)
                    setMarkIcon(footerStyles.iconOn)
                }
                if (BlueText == 'off'){
                    setBlueText('on')
                    setHomeworkText(footerStyles.text)
                    setCalendarText(footerStyles.text)
                    setClassBoardText(footerStyles.text)
                    setMarkText(footerStyles.textOn)
                }
                props.navigation.navigate('ViewMark')
        }}>
            <Text style={MarkIcon}>􀉟</Text>
            <Text style={MarkText}>Marks</Text>
        </TouchableOpacity>
    </View>
  );
};
export default withNavigation(FooterBar);
