import {StyleSheet} from 'react-native';

const TopStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F2F2F2",
    },
    navBar:{
        flex:0.5,
        flexDirection:"row",
        alignItems:'center',
        
    },
    red:{
        color:"red"
    },
    headerText:{
    
        fontFamily:'SFProDisplay-Medium',
        fontSize:25,
        marginLeft: 30,
        marginBottom: 10,
   
    },

    asgContainer:{
        flex:1,

    },

    body:{
        fontFamily:'SFProDisplay-Regular',
        marginTop: 10,
        fontSize:20,
        marginLeft:60
        
    },
    placeholder:{
        fontFamily:'SFProDisplay-Regular',
        fontSize:20,
        marginTop: 10,
        marginLeft:10
    },

    dueDate:{
        fontFamily:'SFProDisplay-Regular',
        marginTop: 5,
        fontSize:12,
        marginLeft: 90,
        color:"#007AFF",
        flexDirection: "row"
    },
    dueDate1:{
        fontFamily:'SFProDisplay-Regular',
        marginTop: 5,
        fontSize:12,
        marginLeft: 60,
        color:"#007AFF",
        flexDirection: "row",
        display:"none"
    },

    iconCont:{
        flex:0.7,
        flexDirection:'row',
        justifyContent: "space-evenly"
    },

    icon: {
        fontFamily:'SFProDisplay-Medium',
    },

    icon2: {
        fontFamily:'SFProDisplay-Medium',
       
        marginLeft:30,
        fontSize:18
    },
    hideContainer:{
        display:'none'
    },
    dateContainer:{
        flex:0.3,
    },




})

export default TopStyles;