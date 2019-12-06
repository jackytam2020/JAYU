import {StyleSheet} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import normalize from 'react-native-normalize';
import React from 'react';

SignInStyle = StyleSheet.create({
    app:{
       
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        height:"100%",
       
    },
    header:{
        fontSize: normalize(40),
        color: "#000000",
        opacity: 0.6,
        marginLeft: 30,
        marginTop: normalize(75),
        fontWeight:"bold",
       fontFamily:"SFProDisplay-Semibold"
    },
    ds:{
        fontSize: normalize(20),
        marginLeft: 30,
        marginRight: 30,
        marginTop:30,
        fontFamily:"SFProText-Regular"
    },
    BackGround:{
        width:"101%",
        height:"100%"
        //marginLeft:"-1%"
     },
     buttonview:{
         marginTop: "20%",
         display:"flex",
         alignItems:"center",
         justifyContent:"center",
         width:"100%",
         height: normalize(310),
         //backgroundColor:"#FAB"
     },

     Applebutton:{
        marginTop:"3%",
         width:"80%",
         height:50,
         borderRadius:10,
         alignItems:"center",
         justifyContent:"center",
         backgroundColor:"#000000",
         display:"flex",
         flexDirection:"row"
     },
     Facebookbutton:{
        marginTop:"3%",
         width:"80%",
         height:50,
         borderRadius:10,
         alignItems:"center",
         justifyContent:"center",
         backgroundColor:'rgb(24, 119, 242)',
         display:"flex",
         flexDirection:"row"
     },
     Googlebutton:{
        
         width:"80%",
         height:50,
         borderRadius:10,
         alignItems:"center",
         justifyContent:"center",
         backgroundColor:"#007AFF",
         display:"flex",
         flexDirection:"row"
     },
     applebuttontext:{
         color:"white",
         fontSize: RFPercentage(2.8)
         
     },
     googlebuttontext:{
        color:"black",
        fontFamily:"Roboto-Medium",
        fontSize: RFPercentage(2.8)
    },
    facebookbuttontext:{
        color:"white",
        fontFamily:"HelveticaNeue",
        fontSize: RFPercentage(2.8)
    },
     applelogo:{
         marginRight:10
     },
     googlelogo:{
        marginRight:10,
        resizeMode:"contain",
        width:40,
        height:40
    },
    facebooklogo:{
        marginRight:10,
        resizeMode:"contain",
        width:30,
        height:30
    },
     
     Terms:{
        fontFamily:"SFCompactRounded-Regular",
        fontSize: normalize(15),
        paddingLeft:30,
        paddingRight:30,
        marginTop: normalize(25),
        textAlign:"center",
     },
     Termblue:{
         color:"#007AFF",
         fontFamily:"SFCompactRounded-Regular",
         fontSize: normalize(15),
        paddingLeft:30,
        paddingRight:30,
        textAlign:"center"
     },
     TermOpacity:{
         width: "100%",
         height: 30,
         display:"flex",
         alignItems:"center",
         //justifyContent:"center",
         //backgroundColor:"#FAB",
         marginTop: 1
     }
  });

  export default SignInStyle;