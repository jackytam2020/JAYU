import {StyleSheet} from 'react-native';
import React from 'react';

FaceIDStyle = StyleSheet.create({
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
        marginLeft: 70
    },
    question1:{
        display:"flex",
        flexDirection:"row",
        height:60,
        paddingLeft: 20,
        paddingTop: 20,
        //backgroundColor:"#FAB"
    },
    switch:{
        marginLeft:160
    },
    question:{
        fontFamily:"SFProDisplay-Medium",
        color:"#404040",
        fontSize: 20,
        marginRight: 20,
        marginTop: 5,
    },
    questionView:{
        display:"flex",
        height: 60,
        width: "100%",
        //backgroundColor:"#DAD"
        //alignItems:"center",
        //justifyContent:"center"
    },
    questionDs:{
        fontFamily:"SFProText-Regular",
        color: "#7F7F7F",
        fontSize:15,
        marginTop: 5,
        paddingLeft:20,
        paddingRight:20
    },
    imageview:{
        height: 420,
        display:"flex",
        alignItems:"center",
        //backgroundColor:"#FAB",
        marginTop:40
    },
    image:{
        display:"flex",
        width: "100%",
        height:"85%",
        resizeMode: 'contain'
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

  export default FaceIDStyle;