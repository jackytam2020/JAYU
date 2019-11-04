import {StyleSheet} from 'react-native';
import React from 'react';

TermStyle = StyleSheet.create({
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
        color:"#007AFF",
        marginLeft:20
    },
    TermTitleView:{
        height: 140,
        //backgroundColor:"#FAB",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop: 20,
        marginBottom: 20,
    },
    titleView:{
        flex:4,
        display:"flex",
        alignItems:"center",
        //backgroundColor:"#DAD"
    },
    shieldView:{
        flex:2,
        display:"flex",
        alignItems:"center",
        //backgroundColor:"#DAD"
    },
    Title:{
        fontFamily:"SFProDisplay-Semibold",
        fontSize:40,
        color:"#191919"
    },
    shield:{
        fontFamily:"SFProDisplay-Semibold",
        fontSize:80,
        color:"#007AFF"
    },
    ds:{
        fontFamily:"SFProText-Regular",
        fontSize:17,
        color:"#404040",
        marginLeft:20,
        marginRight:20,
        marginBottom:40,
    },
    heading:{
        fontFamily:"SFProDisplay-Semibold",
        fontSize:28,
        color:"#191919",
        marginLeft: 20,
        marginBottom: 10
    }
  });

  export default TermStyle;