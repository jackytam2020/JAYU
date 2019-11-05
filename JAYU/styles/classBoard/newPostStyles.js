import {StyleSheet} from 'react-native';

const newPostStyle = StyleSheet.create({
    container:{
        display: "flex",
        height:'100%',
        width:'100%',
        backgroundColor:'#f2f2f2',
        position:'relative',
    },
    navBar:{
        display:'flex',
        position:'relative',
        height:'15%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    },
    chooseBar:{
        width:'80%',
        height:'100%',
        position:'relative',
        justifyContent:'center',
    },
    line:{
        borderWidth:0.5,
        borderColor:'black',
        position:'relative',
        top:'3%',
        marginBottom:20
    },
    subjectList:{
        width:'80%',
        height:'100%',
        position:'relative',
    },
    CancelNextContainer:{
        width:'100%',
        height:'10%',
        display:'flex',
        position:'absolute',
        bottom:"5%",
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
    next: {
        height:'70%',
        width:'45%',
        backgroundColor:'#d6f0fc',
        borderRadius:10,
        justifyContent:"center",
        alignItems:'center'
    }
})
export default newPostStyle;