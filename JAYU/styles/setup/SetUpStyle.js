import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import React from 'react';

SetUpStyle = StyleSheet.create({
    app:{
        backgroundColor:"#FFFFFF",
        display: "flex",
        //alignItems:"center",
       // justifyContent:"center",
        width:"100%",
        height:"100%"
    },
    navi:{
        display:"flex",
       alignItems:"center",
        height:50,
        flexDirection:"row",
        borderBottomColor:"#BFBFBF",
        borderBottomWidth: 0.5
    },
    back:{
        fontFamily:"SFProDisplay-Regular",
        fontSize: RFPercentage(3),
        color:"#007AFF"
    },
    backarrow:{
        fontFamily:"SFProDisplay-Medium",
        fontSize: RFPercentage(3),
        color:"#007AFF"
    },
    navTitle:{
        fontFamily:"SFProDisplay-Regular",
        fontSize: RFPercentage(3.5),
        textAlign:"center",
        marginLeft: normalize (85),
    },
    scrollview:{
        width:"100%",
        height:"95%",
        display:"flex",
        //sbackgroundColor:"#FAB"
    },
    question1:{
        display:"flex",
        height: normalize (140),
        padding: 20,
        flexDirection:"column",
        borderBottomColor:"#F2F2F2",
        borderBottomWidth: 0.5
    },
    question:{
        fontFamily:"SFProDisplay-Medium",
        color:"#404040",
        fontSize: RFPercentage(3)
    },
    questionDs:{
        fontFamily:"SFProText-Regular",
        color: "#7F7F7F",
        fontSize: RFPercentage(2.2),
        marginTop: 5
    },
    NameForm:{
        fontFamily:"SFProDisplay-Semibold",
        fontSize: RFPercentage(3),
        color:"#007AFF",
        marginTop: 20
    },
    question2:{
        display:"flex",
        height: normalize (240),
        paddingTop: normalize (20),
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection:"column",
        borderBottomColor:"#F2F2F2",
        borderBottomWidth: 0.5
    },
    question3:{
        display:"flex",
        height: normalize (260),
        paddingTop: normalize (20),
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection:"column",
        borderBottomColor:"#F2F2F2",
        borderBottomWidth: 0.5
    },
    FirstHalf:{
        //backgroundColor:"#BAB",
        display:"flex",
        flexDirection:"row",
        height: normalize (70),
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginTop: 10
    },
    SecondHalf:{
        //backgroundColor:"#DAD",
        display:"flex",
        flexDirection:"row",
        height: normalize (70),
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    optionbuttonOff :{
        width: normalize (140),
        height: normalize (55),
        backgroundColor:"#F2F2F2",
        borderRadius:10,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    optionbuttonOnTerm:{
        width: normalize (140),
        height: normalize (55),
        backgroundColor:"#FFE9CC",
        borderRadius:10,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    optionbuttonOnSet:{
        width: normalize (140),
        height: normalize (55),
        backgroundColor:"#DBF7DF",
        borderRadius:10,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    option:{
        fontFamily:"SFProDisplay-Semibold",
        fontSize: RFPercentage(2.8),
        color: "#191919"
    },
    NextButtonView:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height: normalize (100),
        marginBottom:normalize (55)
    },
    NextButtonOff:{
        backgroundColor:"#F2F2F2",
        height: 60,
        width: 130,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 10
    },
    NextButtonOn:{
        backgroundColor:"#007AFF",
        height: 60,
        width: 130,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 10
    },
    NextButtonText:{
        fontFamily:"SFProDisplay-Medium",
        fontSize:20,
        color:"#FFFFFF"
    }
  });

  export default SetUpStyle;