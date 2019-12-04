import React from 'react-native';
import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';


const viewMarkStyles = StyleSheet.create({

    header:{ 
        display: "flex",
        fontSize: 20,
        alignItems: "center",
        // justifyContent: "center",
        height:normalize(40) ,
        flexDirection: "row",
        fontFamily: "SFProDisplay-Regular",
        // backgroundColor:"#DAD"

    

    },

    title: {
        fontSize: normalize(20),
        fontFamily: "SFProDisplay-Medium",
        marginLeft:normalize(90)
    },

    back: {
        fontSize: normalize(20),
        fontFamily: "SFProDisplay-Medium",
        color:"#007AFF"
    },

    classesCont:{
        display:"flex",
        flexDirection: "column",
        // // alignItems: "center",
        // justifyContent: "center",
        // backgroundColor:"#DAD",
        paddingTop:normalize(4),
        paddingBottom:normalize(4),
        marginBottom:"12%",

    },

    classes:{
        flex:1,
        borderRadius: normalize(15),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        padding: normalize(15),
        marginTop: normalize(4),
        marginBottom: normalize(4),
        marginRight: normalize(8),
        marginLeft: normalize(8),
       
        
    },

    classText:{
        flex: 1,
        textAlign: "left",
        fontFamily: "SFProDisplay-Regular",
        fontSize: normalize(19),
        marginLeft: normalize(20)
    },

    circle: {
        textAlignVertical: "center",
        textAlign: "center",
        marginLeft: normalize(15),
        fontFamily: "SFProDisplay-Medium",
        fontSize: normalize(38)
    },




});



export default viewMarkStyles;