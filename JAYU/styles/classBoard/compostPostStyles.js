import {StyleSheet} from 'react-native';

const composeStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#f2f2f2'
    },
    navBar:{
        flex:0.15,
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

    icon:{

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