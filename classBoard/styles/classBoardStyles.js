import {StyleSheet} from 'react-native';

const classBoardStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f2f2f2',
        alignItems:'center'
    },
    navBar:{
        display:'flex',
        position:'relative',
        flex:0.25,
        width:'90%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    postBox:{
        flex:0.9,   
        flexDirection:'row'
    },
    posts:{
        minHeight:"10%",
        height:'auto',
        position:'relative',
        backgroundColor:'white',
        borderRadius:10,
        shadowRadius:10,
        paddingTop:10,
        marginBottom:20,
    },
    line:{
        borderWidth:1,
        borderColor:'black',
        margin: 10
    }
})

export default classBoardStyles;