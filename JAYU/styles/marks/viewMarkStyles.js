import React from 'react-native';
import {StyleSheet} from 'react-native';

const viewMarkStyles = StyleSheet.create({

    header:{ 
        display: "flex",
        fontSize: 20,
        alignItems: "center",
        justifyContent: "center",
        flex: 0.4,
        flexDirection: "row",
        fontFamily: "SFProDisplay-Regular"

    

    },

    title: {
        fontSize: 25,
        fontFamily: "SFProDisplay-Medium"

    },

    classesCont:{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 6

    },

    classes:{
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        padding: 11,
        margin: 7,
       
        
    },

    classText:{
        flex: 3,
        textAlign: "center",
        fontFamily: "SFProDisplay-Regular",
        fontSize: 18
    },

    circle: {
        textAlignVertical: "center",
        textAlign: "center",
        marginLeft: 15,
        fontFamily: "SFProDisplay-Medium",
        fontSize: 38
    },




});



export default viewMarkStyles;