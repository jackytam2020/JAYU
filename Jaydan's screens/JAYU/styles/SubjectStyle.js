import {StyleSheet} from 'react-native';
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
        height:50,
        flexDirection:"row",
        borderBottomColor:"#BFBFBF",
        borderBottomWidth: 0.5
    },
    back:{
        fontFamily:"SFProDisplay-Regular",
        fontSize:20,
        color:"#007AFF"
    },
    backarrow:{
        fontFamily:"SFProDisplay-Medium",
        fontSize:25,
        color:"#007AFF"
    },
    navTitle:{
        fontFamily:"SFProDisplay-Regular",
        fontSize: 25,
        textAlign:"center",
        marginLeft:75
    },
    question1:{
        display:"flex",
        height: 170,
        padding: 20,
        flexDirection:"column",
        //backgroundColor:"#FAB"
    },
    question:{
        fontFamily:"SFProDisplay-Medium",
        color:"#404040",
        fontSize: 20,
        marginRight: 20
    },
    questionDs:{
        fontFamily:"SFProText-Regular",
        color: "#7F7F7F",
        fontSize:15,
        marginTop: 5
    },
    NextButtonView:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height: 100
    },
    NextButton:{
        backgroundColor:"#007AFF",
        height: 60,
        width: 230,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 10
    },
    NextButtonText:{
        fontFamily:"SFProDisplay-Medium",
        fontSize:20,
        color:"#FFFFFF"
    },
    subjectView:{
        height: 420,
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
        fontSize:20,
        color:"#191919",
        marginLeft:20
    },
    AC:{
        fontFamily:"SFProDisplay-Regular",
        fontSize:40,
        color: "#FF9500"
    },
    PS:{
        fontFamily:"SFProDisplay-Regular",
        fontSize:40,
        color: "#00AEEF"
    },
    ADI:{
        fontFamily:"SFProDisplay-Regular",
        fontSize:40,
        color: "#FFCF00"
    },
    BC:{
        fontFamily:"SFProDisplay-Regular",
        fontSize:40,
        color: "#4CD964"
    },
    DS:{
        fontFamily:"SFProDisplay-Regular",
        fontSize:40,
        color: "#FF3B30"
    },
    SA:{
        fontFamily:"SFProDisplay-Regular",
        fontSize:40,
        color: "#5856D6"
    },
    PJ:{
        fontFamily:"SFProDisplay-Regular",
        fontSize:40,
        color: "#007AFF"
    },
    WD:{
        fontFamily:"SFProDisplay-Regular",
        fontSize:40,
        color: "#C69C6D"
    },
  });

  export default SubjectStyle;