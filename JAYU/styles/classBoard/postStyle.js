import {StyleSheet} from 'react-native'
import normalize from 'react-native-normalize'



const postStyle = StyleSheet.create({
    main:{
        height:"100%",
        width:"100%",
        // backgroundColor:"#FAB"
    },
    safe:{
        height:"100%",
        width:"100%",
        // backgroundColor:"#FAB"
    },
    container:{
        flex:1,
        // backgroundColor:'#f2f2f2',
        position:'relative',
    },
    navBar:{
        position:'relative',
        height:normalize(40),
        width:'100%',
        flexDirection:'row',
        alignItems:"center",
        borderBottomWidth:normalize(1),
        borderBottomColor:"#BFBFBF"
    },
    scrollview:{
        marginBottom:normalize(40),
        height:"auto"
    },
    post:{
        position:'relative',
        height:normalize(60),
        width:'100%',
        backgroundColor:'white',
        // alignItems:'center',
    },
    subject:{
        width:'85%',
        height:'100%',
        flexDirection:'row'
    },
    leftSubject:{
        width:'80%', 
        height:'100%', 
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:"#FAB",
        marginLeft:normalize(20)
    },
    rightSubject:{
        width:'10%', 
        height:'100%', 
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:"#FAB",
        marginLeft:normalize(30)
    },
    line:{
        marginLeft:normalize(25),
        marginRight:normalize(25),
        borderBottomWidth:normalize(0.5),
        borderColor:'#BFBFBF',
        position:'relative',
    },
    questionBox:{
        display:'flex',
        position:'relative',
        minHeight:'7%',
        height:'auto',
        width:'100%',
        backgroundColor:'white',
        alignItems:'center'
    },
    question:{
        width:'85%',
        minHeight:'7%',
        height:'auto',
        justifyContent:'center',
        paddingTop: normalize(20),
        paddingBottom: normalize(20),
    },
    questionds:{
        fontFamily:"SFCompactRounded-Regular",
        fontSize:normalize(18)
    },
    votenumber:{
        fontFamily:"SFProDisplay-Semibold",
        fontSize:normalize(20)
    },
    attachmentBox:{
        position:"relative",
        width:"100%",
        minHeight:0,
    },
    respondarea:{
        width: "100%",
        height:"auto",
        backgroundColor:"#F2F2F2",
        // paddingBottom:normalize(60),
        // borderBottomLeftRadius:normalize(20),
        // borderBottomRightRadius:normalize(20),
    },
    responseContainer:{
        position:'relative',
        width:'100%',
        minHeight:'5%',
        height:'auto',
        top:normalize(10),
        alignItems:'center'
    },
    responseBox:{
        position:'relative',
        width:'95%',
        minHeight:'5%',
        height:'auto',
        backgroundColor:'white',
        borderRadius:normalize(15),
        flexDirection:'row',
        alignItems:'center',
        paddingBottom:normalize(15),
        paddingTop:normalize(13),
        paddingLeft:normalize(5),
        
    },
    repliesContainer:{
        position:'relative',
        width:'100%',
        flex:1,
        top:normalize(20),
        marginBottom:normalize(15),
        
    },
    scrollBox:{
        flex:0.1,
        alignItems:'center'
    },
    send:{
        marginLeft:normalize(20)
    },
    repliesBox:{
        position:'relative',
        minHeight:'10%',
        width:"95%",
        height:'auto',
        backgroundColor:'white',
        padding:normalize(5),
        borderRadius:normalize(15),
        marginBottom:normalize(10),
        borderWidth: 0.5,
        borderRadius:normalize(15),
    },
    repliesTop:{
        width:"100%",
        height:normalize(40),
        flexDirection:'row',
    },
    repliesName:{
        width:'80%',
        height:'100%',
        justifyContent:'center',
        left:normalize(10)
    },
    personname:{
        fontFamily:"SFProDisplay-Semibold",
        fontSize:normalize(17)
    },
    repliesVotes:{
        width:'20%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    repliesBot:{
        width:"90%",
        minHeight:'10%',
        height:'auto',
        left:10,
    },
    up:{
        width:normalize(25),
        display:"flex",
        alignItems:"center"
    },
    down:{
        width:normalize(25),
        display:"flex",
        alignItems:"center"
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
    subjectname:{
        fontFamily:"SFProDisplay-Semibold",
        fontSize: normalize(18)
    },
    timeandname:{
        fontFamily:"SFCompactRounded-Regular",
        fontSize: normalize(15)
    }
})
export default postStyle;