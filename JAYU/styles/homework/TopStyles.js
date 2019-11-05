import {StyleSheet} from 'react-native';

const TopStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F2F2F2",
    },

    
    headerText:{
        fontFamily:'SFProDisplay-Regular',
        fontSize:25,
        marginLeft: 30,
        color: '#00AEEF',
        marginBottom: 10
    },

    asgContainer:{
        flex:0.4,
        justifyContent:"space-evenly"

    },

    body:{
        fontFamily:'SFProDisplay-Regular',
        marginTop: 10,
        fontSize:20,
        marginLeft: 60
        
    },

    iconCont:{
        flex:0.050,
        flexDirection:'row',
        justifyContent: "space-evenly"
    },

    icon: {
        fontFamily:'SFProDisplay-Regular',
    }




})

export default TopStyles;