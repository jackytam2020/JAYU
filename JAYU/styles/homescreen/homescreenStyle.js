import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';



const styles = StyleSheet.create({ 
    home:{
        flex:0.90,
    },
    greetingBox:{
        flex:0.13,
        justifyContent:'center',
        flexDirection:'row'
    },
    greetingRow:{
        flex:0.85,
    },
    deadlineRow:{
        flex:0.93,
        backgroundColor:"rgba(255,255,255,0.3)",
        borderRadius:25
    },
    deadlineTitle:{
        left:20,
        marginTop:15,
        width:"90%",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    itemContainer:{
        flex:0.8,
        left:20,
        marginTop:15,
        width:'90%',
    },
    hideItems:{
        display:'none'
    },
    bottomContainer:{
        flex:0.5,
        justifyContent:'center',
        flexDirection:'row',
        top:normalize(55)
    },
    bottom:{
        flex:0.93,
    },
    boxItems:{
        flex:0.85,
        backgroundColor:'white',
        borderRadius:normalize(20),
    },
    boxRow:{
        flexDirection:"row", 
        alignItems:'center', 
        flex:1}
  })
  
  export default styles;