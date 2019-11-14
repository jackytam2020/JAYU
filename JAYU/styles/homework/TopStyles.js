import {StyleSheet} from 'react-native';

const TopStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F2F2F2",
    },
    navBar:{
        flex:0.1,
        flexDirection:"row",
        alignItems:'center',
        marginTop:30
    },
    red:{
        color:"red"
    },
    headerText:{
        marginTop:15,
        fontFamily:'SFProDisplay-Medium',
        fontSize:25,
        marginLeft: 30,
        color: '#00AEEF',
        marginBottom: 10
    },

    asgContainer:{
        flex:0.4,

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
        marginLeft: 60,
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
        flex:0.050,
        flexDirection:'row',
        justifyContent: "space-evenly"
    },

    icon: {
        fontFamily:'SFProDisplay-Medium',
    }




})

export default TopStyles;