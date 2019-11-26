import {StyleSheet} from 'react-native'
import normalize from 'react-native-normalize'

const footerStyles = StyleSheet.create({
    each:{
        flex: 1,
        //backgroundColor:"#FAB",
        height: "100%",
        alignItems:"center",
        //justifyContent:"center",
    },
    icon:{
        fontFamily:"SFCompactRounded-Regular",
        fontSize: normalize(25),
        color:"#7F7F7F",
        marginTop:normalize(5)
    },
    iconOn:{
        fontFamily:"SFCompactRounded-Regular",
        fontSize: normalize(25),
        color:"#007AFF",
        marginTop:normalize(5)
    },
    text:{
        fontFamily:"SFCompactRounded-Medium",
        fontSize: normalize(12),
        color:"#7F7F7F"
    },
    textOn:{
        fontFamily:"SFCompactRounded-Medium",
        fontSize: normalize(12),
        color:"#007AFF"
    },
    container:{
        flex:1,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        borderWidth:0.18,
        borderColor:'black',
        justifyContent:'space-between',
        backgroundColor:"#FAFAFA"
    }
})
export default footerStyles;