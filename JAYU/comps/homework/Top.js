import React ,{useState} from 'react';
import {View, Text, Button, ScrollView, TouchableOpacity, DatePickerIOS} from 'react-native';
import TopStyles from '../../styles/homework/TopStyles';
import FooterBar from '../../comps/footerBar';
import DatePick from './datePicker';

function Tophw(props){


    const [showPick, setShowPick] = useState({display:'none'});
    

      

    return(
        <View style={TopStyles.container}>
             <View style={TopStyles.navBar}>
                <TouchableOpacity
                       onPress={()=>{
                            props.navigation.navigate("HomeScreen")
                       }}>
                        <Text style={{fontSize:20, marginLeft:20, color:'#007AFF'}}>back</Text>
                </TouchableOpacity>
            </View>


            <View style={{flex: 0.25, borderBottomColor: '#BFBFBF', borderBottomWidth: 1, marginBottom:20 }}></View>
            <DatePick showIcon = {false}/>
           
           
           
           
            <View style={TopStyles.iconCont}>
                <Text style={TopStyles.icon}>􀙭</Text>
                <Text style={TopStyles.icon}>􀈌</Text>
                <Text style={TopStyles.icon}>􀈌</Text>
                <Text style={TopStyles.icon}>􀈌</Text>
                <Text style={TopStyles.icon}>􀈌</Text>
                <Text style={TopStyles.icon}>􀈌</Text>
                <Text style={TopStyles.icon}>􀈌</Text>
                <Text style={TopStyles.icon}>􀈌</Text>
            </View>
                <Text style={TopStyles.headerText}>Advanced Photoshop</Text>
                    <View style={TopStyles.asgContainer}>
                    <View style={{flex: 0.25, borderBottomColor: '#BFBFBF', borderBottomWidth: 0.5, marginLeft: 50}}></View>
                        <Text style={TopStyles.body}
                        onPress={()=> 
                            {
                               setDatePick(!datePick);
                               setShowPick({display:'flex'});

                            }

                        }
                        >
                            􀆊  Assigment 1</Text>
                     

                        <View style={{flex: 0.25, borderBottomColor: '#BFBFBF', borderBottomWidth: 0.5, marginLeft: 50}}></View>
                        <Text style={TopStyles.body}>􀆊  Assigment 2</Text>
                        <View style={{flex: 0.25, borderBottomColor: '#BFBFBF', borderBottomWidth: 0.5, marginLeft: 50}}></View>
                        <Text style={TopStyles.body}>􀆊  Assigment 3</Text>
                        <View style={{flex: 0.25, borderBottomColor: '#BFBFBF', borderBottomWidth: 0.5, marginLeft: 50}}></View>
                        <Text style={TopStyles.body}>􀆊  Assigment 4</Text>
                        <View style={{flex: 0.25, borderBottomColor: '#BFBFBF', borderBottomWidth: 0.5, marginLeft: 50}}></View>
                        <Text style={TopStyles.body}>􀆊  Assigment 5</Text>
                    </View>
            <View style={{width:'100%', height:'10%', position:'absolute', bottom:0}}>
                <FooterBar />
            </View>    
            
        </View>
    )
}

export default Tophw;
