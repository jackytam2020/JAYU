import {StyleSheet} from 'react-native'

const backDoneStyles = StyleSheet.create({
    container:{
        flex:0.8,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end'
    },
    back:{
        flex:0.45,
        height:'70%',
        backgroundColor:'#e2cdb6',
        borderRadius:10,
        justifyContent:"center",
        alignItems:'center'
    },
    done:{
        flex:0.45,
        height:'70%',
        backgroundColor:'#e2cdb6',
        borderRadius:10,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'#d6f0fc',
    }
})

export default backDoneStyles