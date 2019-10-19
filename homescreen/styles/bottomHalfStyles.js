import {StyleSheet} from 'react-native';



const bottomHalf = StyleSheet.create({ 
    boxRow:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        marginBottom: 20
    },
    boxRow2:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        marginTop:20
    },
    box:{
        height:70,
        width:320,
        backgroundColor:'white',
        borderRadius:10,
        display:'flex',
        alignItems:'center'
    },
    boxText:{
        fontSize: 18,
        position:'relative',
        marginRight: 150,
        marginTop: 47
    },

    boxText2:{
        fontSize:18,
        position:'relative',
        marginRight: 205,
        marginTop: 47

    }
    
  })
  
  export default bottomHalf;