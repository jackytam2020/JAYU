import {StyleSheet} from 'react-native';

const classBoardStyles = StyleSheet.create({
    container:{
            display: "flex",
            height:'100%',
            width:'100%',
            backgroundColor:'#f2f2f2',
            alignItems:'center'
    },
    navBar:{
        display:'flex',
        position:'relative',
        height:'15%',
        width:'90%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    posts:{
        minHeight:"10%",
        height:'auto',
        width:"90%",
        position:'relative',
        backgroundColor:'white',
        borderRadius:10,
        shadowRadius:10,
        paddingTop:10,
        marginBottom:20
    },
    line:{
        borderWidth:1,
        borderColor:'black',
        margin: 10
    }
})

export default classBoardStyles;