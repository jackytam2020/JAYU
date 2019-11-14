import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
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
        height: "17%",
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
        //alignItems:"center",
        //backgroundColor:"#DAD"
    },
    shieldView:{
        flex:2,
        display:"flex",
        //alignItems:"center",
        //backgroundColor:"#DAD"
    },
    Title:{
        fontFamily:"SFProDisplay-Semibold",
        fontSize: RFPercentage(5.5),
        color:"#191919",
        paddingLeft:"7%"
    },
    shield:{
        fontFamily:"SFProDisplay-Semibold",
        fontSize: RFPercentage(12),
        color:"#007AFF",
        paddingLeft:"7%"
    },
    ds:{
        fontFamily:"SFProText-Regular",
        fontSize:17,
        color:"#404040",
        marginLeft:20,
        marginRight:20,
        marginBottom:40,
    },
    scrollview:{
        display:"flex",
        height:"70%",
        width:"100%",
        //backgroundColor:"#FAB"
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