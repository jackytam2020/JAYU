import {StyleSheet} from 'react-native';

const newClassStyle = StyleSheet.create({
    container: {
        display: "flex",
        height:'95%',
        width:'100%',
        backgroundColor:'#DAB',
        position:'absolute',
        bottom:0,
        borderRadius:30
    },
    title: {
        height:'15%',
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
    },
    line:{
        borderWidth:0.5,
        borderColor:'black',
    },
    courseList:{
        width:'80%',
        height:'80%',
        display:"flex",
        alignItems:'center',
    },
    CancelNextContainer:{
        width:'100%',
        height:'10%',
        display:'flex',
        position:'absolute',
        bottom:"10%",
        alignItems:'center'
    },
    CancelNext:{
        position:'relative',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'80%',
        height:'100%',
    },
    cancel: {
        height:'70%',
        width:'45%',
        backgroundColor:'#e2cdb6',
        borderRadius:10,
        justifyContent:"center",
        alignItems:'center'
    },
    done: {
        height:'70%',
        width:'45%',
        backgroundColor:'#d6f0fc',
        borderRadius:10,
        justifyContent:"center",
        alignItems:'center'
    }
})

export default newClassStyle;