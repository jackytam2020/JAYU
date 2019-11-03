import {StyleSheet} from 'react-native';

const scheduleStyle = StyleSheet.create({
    container: {
        display: "flex",
        height:'100%',
        width:'100%',
    },
    calendar: {
        position:'relative',
    },
    topNav:{
        width:'100%',
        height:'10%',
        display:'flex',
        position:'relative',
        top:'5%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
})

export default scheduleStyle;