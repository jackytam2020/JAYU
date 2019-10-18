import {StyleSheet} from 'react-native';



const topHalf = StyleSheet.create({ 

    greetingText: {
        fontSize:25
    },
    progressSpan:{
        fontSize:16
    },
    progressBox:{
        height:'90%',
        width:'100%',
        position:'relative',
        top:'5%',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius:10,
    },
    percentageTask:{
        marginLeft:'4%'
    },
    percent:{
        fontSize:40
    },
    progress:{
        fontSize:16,
        letterSpacing:1
    },
    done:{
        marginLeft:'4%'
    },
    numberDone:{
        fontSize:16
    },
    remain:{
        marginLeft:'4%'
    },
    lineWidth:{
        width:'30%',
        marginTop: '3%',
        marginLeft:'4%'
    },
    line:{
        borderBottomColor: 'black',
        borderWidth:0.5
    },
    deadlines:{
        marginTop:'5%',
        marginLeft:'4%'
    }
     
  })
  
  export default topHalf;