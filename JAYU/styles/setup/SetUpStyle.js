import {StyleSheet} from 'react-native';
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
        marginLeft:80
    },
    question1:{
        display:"flex",
        height: 130,
        padding: 20,
        flexDirection:"column",
        borderBottomColor:"#F2F2F2",
        borderBottomWidth: 0.5
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
    NameForm:{
        fontFamily:"SFProDisplay-Semibold",
        fontSize: 20,
        color:"#BFBFBF",
        marginTop: 20
    },
    question2:{
        display:"flex",
        height: 230,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection:"column",
        borderBottomColor:"#F2F2F2",
        borderBottomWidth: 0.5
    },
    question3:{
        display:"flex",
        height: 240,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection:"column",
        borderBottomColor:"#F2F2F2",
        borderBottomWidth: 0.5
    },
    FirstHalf:{
        //backgroundColor:"#FAB",
        display:"flex",
        flexDirection:"row",
        height: 70,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginTop: 10
    },
    SecondHalf:{
        //backgroundColor:"#DAD",
        display:"flex",
        flexDirection:"row",
        height: 70,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    optionbutton:{
        width: 140,
        height: 55,
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
    option:{
        fontFamily:"SFProDisplay-Semibold",
        fontSize: 20,
        color: "#191919"
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