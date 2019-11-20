import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const classBoardStyles = StyleSheet.create({
    container:{
        width:"100%",
        display:"flex",
        // backgroundColor:'#FAB',
        alignItems:'center',
        justifyContent:"center",
    },
    safecontainer:{
        display:"flex",
        // alignItems:'center',
        width: "100%",
        height:"100%",
        justifyContent:"center",
        // backgroundColor:'#FAB',
    },
    navBar:{
        display:'flex',
        height:normalize(50),
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:"center",
        backgroundColor:"#FFFFFF"
        },
    backholder:{
        marginLeft:normalize(5),
    },
    scrollview:{
        // backgroundColor:"#FAB",

    },
    postBoxBackground:{
        flex:1,
        backgroundColor:"#F2F2F2"
    },
    postBox:{
        flex:0.95,   
        flexDirection:'row',
        // backgroundColor:"#DAD",
        height:"94%"
    },
    posts:{
        minHeight:"10%",
        height:'auto',
        width:"100%",
        position:'relative',
        backgroundColor:'white',
        borderRadius:normalize(13),
        // shadowRadius:10,
        paddingTop:normalize(10),
        paddingBottom:normalize(10),
        marginBottom:normalize(10),
    },
    line:{
        borderWidth:0.5,
        borderColor:'#BFBFBF',
        margin: normalize(10)
    },
    subjectname:{
        fontFamily:"SFProDisplay-Regular",
        fontSize:normalize(20),
        color:"black",
    },
    personname:{
        fontFamily:"SFCompactRounded-Regular",
    },
    subjecticonview:{
        height:normalize(35),
        width:normalize(35),
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    PS:{
        fontFamily:"SFProDisplay-Medium",
        fontSize:normalize(30),
        color:"#00AEEF"
    },
    BC:{
        fontFamily:"SFProDisplay-Medium",
        fontSize:normalize(30),
        color:"#4CD964"
    },
    DS:{
        fontFamily:"SFProDisplay-Medium",
        fontSize:normalize(30),
        color:"#FF3B30"
    },
    AC:{
        fontFamily:"SFProDisplay-Medium",
        fontSize:normalize(30),
        color:"#FF9500"
    },
    ADI:{
        fontFamily:"SFProDisplay-Medium",
        fontSize:normalize(30),
        color:"#FFCF00"
    },
    PJ:{
        fontFamily:"SFProDisplay-Medium",
        fontSize:normalize(30),
        color:"#007AFF"
    },
    WD:{
        fontFamily:"SFProDisplay-Medium",
        fontSize:normalize(30),
        color:"#C69C6D"
    },
    SA:{
        fontFamily:"SFProDisplay-Medium",
        fontSize:normalize(30),
        color:"#5856D6"
    },
    thepost:{
        fontFamily:"SFCompactRounded-Regular",
        fontSize:normalize(15),
        paddingLeft:normalize(10)
    }
})

export default classBoardStyles;