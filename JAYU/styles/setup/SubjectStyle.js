import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import React from 'react';

SubjectStyle = StyleSheet.create({
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
        height:normalize(50),
        flexDirection:"row",
        borderBottomColor:"#BFBFBF",
        borderBottomWidth: 0.5
    },
    back:{
        fontFamily:"SFProDisplay-Regular",
        fontSize:normalize(20),
        color:"#007AFF"
    },
    backarrow:{
        fontFamily:"SFProDisplay-Medium",
        fontSize:normalize(25),
        color:"#007AFF"
    },
    navTitle:{
        fontFamily:"SFProDisplay-Regular",
        fontSize:normalize(25),
        textAlign:"center",
        marginLeft:normalize(75)
    },
    scrollview:{
        height: "92%",
        //backgroundColor:"#FAB",
        display:"flex"
    },
    question1:{
        display:"flex",
        height: normalize(170),
        padding: normalize(20),
        flexDirection:"column",
        //backgroundColor:"#FAB"
    },
    question:{
        fontFamily:"SFProDisplay-Medium",
        color:"#404040",
        fontSize: normalize(20),
        marginRight: normalize(20)
    },
    questionDs:{
        fontFamily:"SFProText-Regular",
        color: "#7F7F7F",
        fontSize:normalize(17),
        marginTop: normalize(5)
    },
    NextButtonView:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height: normalize(120)
    },
    NextButton:{
        backgroundColor:"#007AFF",
        height: normalize(60),
        width: normalize(230),
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 10
    },
    NextButtonText:{
        fontFamily:"SFProDisplay-Medium",
        fontSize:normalize(20),
        color:"#FFFFFF"
    },
    subjectView:{
        height: normalize(490),
        marginTop: normalize (20),
       // backgroundColor:"#DAD",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    each:{
        width: "90%",
        display:"flex",
        flex: 1,
        alignItems:"center",
        flexDirection:"row",
        //backgroundColor:"#FFE9CC"
    },
    name:{
        fontFamily:"SFProDisplay-Regular",
        fontSize:normalize(20),
        color:"#191919",
        marginLeft:normalize(20)
    },
    AC:{
        fontFamily:"SFProDisplay-Regular",
        fontSize:normalize(40),
        color: "#FF9500"
    },
    PS:{
        fontFamily:"SFProDisplay-Regular",
        fontSize:normalize(40),
        color: "#00AEEF"
    },
    ADI:{
        fontFamily:"SFProDisplay-Regular",
        fontSize:normalize(40),
        color: "#FFCF00"
    },
    BC:{
        fontFamily:"SFProDisplay-Regular",
        fontSize:normalize(40),
        color: "#4CD964"
    },
    DS:{
        fontFamily:"SFProDisplay-Regular",
        fontSize:normalize(40),
        color: "#FF3B30"
    },
    SA:{
        fontFamily:"SFProDisplay-Regular",
        fontSize:normalize(40),
        color: "#5856D6"
    },
    PJ:{
        fontFamily:"SFProDisplay-Regular",
        fontSize:normalize(40),
        color: "#007AFF"
    },
    WD:{
        fontFamily:"SFProDisplay-Regular",
        fontSize:normalize(40),
        color: "#C69C6D"
    },
  });

  export default SubjectStyle;