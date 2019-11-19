import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import React from 'react';

PasscodeReInputStyle = StyleSheet.create({
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
    Cancel:{
        fontFamily:"SFProDisplay-Regular",
        fontSize:normalize(20),
        marginLeft: 10,
        color:"#007AFF"
    },
    passcodeform:{
        height: normalize(380),
        //backgroundColor:"#FAB",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        fontFamily:"SFProDisplay-Regular",
        fontSize:normalize(19)
    },
    passcodeInput:{
        height: normalize(80),
        width: "100%",
        display: "flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        //backgroundColor:"#DAD"
    },
    each:{
        fontFamily: "SFProDisplay-Light",
        fontSize: normalize(20),
        margin: normalize(10)
    }
  });

  export default PasscodeReInputStyle;