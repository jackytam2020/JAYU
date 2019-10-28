import {StyleSheet} from 'react-native';

const composeStyle = StyleSheet.create({
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
        height:'10%',
        width:'100%',
        marginTop:30,
        flexDirection:'row',
        alignItems:"center"
    },
    detailContainer:{
        display:'flex',
        position:'relative',
        height:'13%',
        width:'100%',
        flexDirection:'row',
    },
    leftDetail:{
        width:"75%", 
        height:'100%', 
        display:"flex",
        justifyContent:'center'
    },
    rightDetail:{
        width:"25%", 
        height:'100%', 
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
    },
    line:{
        borderWidth:0.5,
        borderColor:'black',
        position:'relative',
    },
    textBoxContainer:{
        width:'100%',
        minHeight:'10%',
        height:'auto',
        position:'relative',
        top:20
    
    }   
})

export default composeStyle;