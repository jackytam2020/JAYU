import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import React from 'react';

PasscodeStyle = StyleSheet.create({
    app:{
        backgroundColor:"#FFFFFF",
        display: "flex",
        //alignItems:"center",
        justifyContent:"center",
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
        marginLeft: normalize (68),
    },
    question1:{
        display:"flex",
        height: normalize(140),
        padding: 20,
        flexDirection:"column",
        borderBottomColor:"#F2F2F2"
    },
    question:{
        fontFamily:"SFProDisplay-Medium",
        color:"#404040",
        fontSize: normalize(20),
        marginRight: 20
    },
    questionDs:{
        fontFamily:"SFProText-Regular",
        color: "#7F7F7F",
        fontSize:normalize(15),
        marginTop: 5
    },
    imageview:{
        height: "50%",
        display:"flex",
        alignItems:"center",
        //backgroundColor:"#FAB"
    },
    image:{
        display:"flex",
        width: "100%",
        height:"100%",
        resizeMode: 'contain'
    },
    NextButtonView:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height: normalize(100),
        marginTop: normalize (20)
        },
    NextButton:{
        backgroundColor:"#007AFF",
        height: normalize(60),
        width: normalize(130),
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

  export default PasscodeStyle;