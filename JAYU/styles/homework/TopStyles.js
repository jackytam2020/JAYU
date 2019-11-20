import {StyleSheet} from 'react-native';

const TopStyles = StyleSheet.create({
    container:{
       flex:1,
         backgroundColor:"#F2F2F2",
    },

    mHeader:{
        marginLeft: 55,
        fontFamily:'SFProDisplay-Medium',
        fontSize:20,
        justifyContent:'center',
        alignItems:"center",
        marginBottom:60

    },

    done:{
        width: 40,
        height: 20,
        borderRadius: 30,
        backgroundColor: 'red',
        marginLeft:270
    },

    navBar:{
         flex:0.7,
        flexDirection:"row",
        alignItems:'center',
        
    },
    red:{
        color:"red"
    },
    headerText:{
         flex: 0.1,
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
        marginTop: 15,
        marginBottom: 15,
        fontSize:12,
        marginLeft: 100,
        color:"#007AFF",
        flexDirection: "row",
    },

    iconCont:{
        flex:0.3,
        flexDirection:'row',
        justifyContent: "space-evenly"
    },

    icon: {
        fontFamily:'SFProDisplay-Medium',
    },

    icon2: {
        fontFamily:'SFProDisplay-Medium',
        marginTop: 40,
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