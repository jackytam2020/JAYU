import {StyleSheet} from 'react-native';

const editMarkStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        borderRadius:20,
    },
    titleBar:{
        flex:0.15, 
        justifyContent:'center', 
        alignItems:"center",
    },
    markTypeContainer:{
        flex:0.07, 
        flexDirection:"row",
        justifyContent:'center',
    },
    markTypeBox:{
        flex:0.85,
        justifyContent:'space-between'
    },
    line:{
        flex:0.5,
        borderWidth:1,
        borderColor:"black"
    },
    markNameContainer:{
        flex:0.07, 
        flexDirection:"row",
        justifyContent:'center',
        position:'relative',
        top:30,
    },
    markNameBox:{
        flex:0.85,
        justifyContent:'space-between',
    },
    weightContainer:{
        flex:0.07, 
        flexDirection:"row",
        justifyContent:'center',
        top:60
    },
    markContainer:{
        flex:0.07, 
        flexDirection:"row",
        justifyContent:'center',
        top:90,
    },
    actionButContainer:{
        flex:0.05,
        top: 150,
        flexDirection:'row',
        justifyContent:'center'
    },
    actionButtons:{
        flex:0.9,
        flexDirection:'row',
        justifyContent:'space-between'
    }
})

export default editMarkStyles;