import {StyleSheet} from 'react-native';



const bottomHalf = StyleSheet.create({ 
    boxRow:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    boxRow2:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
    },
    box:{
        height:170,
        width:150,
        backgroundColor:'white',
        borderRadius:10,
        display:'flex',
        alignItems:'center'
    },
    boxText:{
        fontSize: 20,
        position:'relative',
        top:'70%'

    }
    
  })
  
  export default bottomHalf;