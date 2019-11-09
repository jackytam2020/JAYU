import {StyleSheet} from 'react-native';
import React from 'react';

SignInStyle = StyleSheet.create({
    app:{
        backgroundColor:"#FAB",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        height:"100%"
    },
    header:{
        fontSize: 50,
        color: "#000000",
        opacity: 0.6,
        marginLeft: 30,
        marginTop: 80,
        fontWeight:"bold",
       fontFamily:"SFProDisplay-Semibold"
    },
    ds:{
        fontSize: 20,
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
     button:{
        marginTop:200,
        marginLeft:38,
         width:300,
         height:50,
         borderRadius:10,
         alignItems:"center",
         justifyContent:"center",
         backgroundColor:"#000000",
         display:"flex",
         flexDirection:"row"
     },
     buttontext:{
         color:"white",
         fontSize:20
     },
     applelogo:{
         marginRight:10
     },
     Signinds:{
         fontFamily:"SFCompactRounded-Regular",
         fontSize:18,
         paddingLeft:30,
         paddingRight:30,
         marginTop:20,
         textAlign:"center",
     },
     Terms:{
        fontFamily:"SFCompactRounded-Regular",
        fontSize:18,
        paddingLeft:30,
        paddingRight:30,
        marginTop:50,
        textAlign:"center",
     },
     Termblue:{
         color:"#007AFF",
         fontFamily:"SFCompactRounded-Regular",
        fontSize:18,
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