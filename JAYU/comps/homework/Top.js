import React, { useState } from 'react';
import {View, Text, Button, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import DatePicker from 'react-native-datepicker'
import TopStyles from '../../styles/homework/TopStyles';
import FooterBar from '../../comps/footerBar'
import normalize from 'react-native-normalize';
function Tophw(props){
   const[DropDown1, SetDropdown1] = useState(false);
   const[Growth,setGrowth]= useState(false);
   const[Growth2,setGrowth2]= useState(false);
   const[Growth3,setGrowth3]= useState(false);
   const[Growth4,setGrowth4]= useState(false);
   const[Growth5,setGrowth5]= useState(false);
   const[Growth6,setGrowth6]= useState(false);
   const[Growth7,setGrowth7]= useState(false);
   const[Growth8,setGrowth8]= useState(false);
  
   
        var  assignmentsIcon = '􀆊 ';
        var AddDueDate =null;
        var Iconfont =  20
        var Iconfont2 =  20
        var Iconfont3=  20
        var Iconfont4 =  20
        var Iconfont5=  20
        var Iconfont6 =  20
        var Iconfont7=  20
        var Iconfont8=  20
   
    if (DropDown1 === true){
        AddDueDate = (<Text style={TopStyles.body2} >Add due date</Text>);
        assignmentsIcon = '􀆈'
   }
    if(Growth === true){
        Iconfont = 30;
    } else
    if(Growth2 === true){
        Iconfont2 = 30;
    }else
   if(Growth3 === true){
        Iconfont3 = 30;
    }else
    if(Growth4 === true){
        Iconfont4= 30;
    }else
    if(Growth5 === true){
        Iconfont5 = 30;
    }else
    if(Growth6 === true){
        Iconfont6= 30;
    }else
    if(Growth7=== true){
        Iconfont7 = 30;
    } else
    if(Growth8=== true){
        Iconfont8 = 30;
    }


    

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
            <View style={TopStyles.iconCont}>
                <Text onPress={() =>setGrowth(!Growth)} style={[{color:'#00AEEF', fontSize:Iconfont}, TopStyles.icon]}>􀀣</Text>
                <Text onPress={() =>setGrowth2(!Growth2)} style={[{color:'#FF3B30', fontSize:Iconfont2},        TopStyles.icon]}>􀈌</Text>
                <Text onPress={() =>setGrowth3(!Growth3)}style={[{color:"#4CD964",fontSize:Iconfont3},       TopStyles.icon]}>􀒡</Text>
                <Text onPress={() =>setGrowth4(!Growth4)}style={[{color:"#FF9500", fontSize:Iconfont4},       TopStyles.icon]}>􀖘</Text>
                <Text onPress={() =>setGrowth5(!Growth5)}style={[{color:"#FF9500", fontSize:Iconfont5},       TopStyles.icon]}>􀘝</Text>
                <Text onPress={() =>setGrowth6(!Growth6)}style={[{color:"#FFCF00", fontSize:Iconfont6},       TopStyles.icon]}>􀏀</Text>
                <Text onPress={() =>setGrowth7(!Growth7)}style={[{color:"#C69C6D",fontSize:Iconfont7},        TopStyles.icon]}>􀁛</Text>
                <Text onPress={() =>setGrowth8(!Growth8)}style={[{color:"#007AFF", fontSize:Iconfont8},       TopStyles.icon]}>􀓤</Text>
            </View>
                <Text style={TopStyles.headerText}>Advanced Photoshop</Text>
                    <View style={TopStyles.asgContainer}>
                   
                    <View style={{flex: 0.25, borderBottomColor: '#BFBFBF', borderBottomWidth: 0.5, marginLeft: 50}}></View>
                        <TouchableOpacity onPress={() => SetDropdown1(!DropDown1)}>
                            <Text style={TopStyles.body} >{assignmentsIcon}  Assigment 1</Text>
                            {AddDueDate}
                         </TouchableOpacity>

                        <View style={{flex: 0.25, borderBottomColor: '#BFBFBF', borderBottomWidth: 0.5, marginLeft: 50}}></View>
                        <TouchableOpacity>
                            <Text style={TopStyles.body}>􀆊  Assigment 2</Text>
                         </TouchableOpacity>
                        
                        <View style={{flex: 0.25, borderBottomColor: '#BFBFBF', borderBottomWidth: 0.5, marginLeft: 50}}></View>
                        <TouchableOpacity>
                            <Text style={TopStyles.body}>􀆊  Assigment 3</Text>
                         </TouchableOpacity>
                       
                       <View style={{flex: 0.25, borderBottomColor: '#BFBFBF', borderBottomWidth: 0.5, marginLeft: 50}}></View>
                        <TouchableOpacity>
                            <Text style={TopStyles.body}>􀆊  Assigment 4</Text>
                        </TouchableOpacity>
                       
                        <View style={{flex: 0.25, borderBottomColor: '#BFBFBF', borderBottomWidth: 0.5, marginLeft: 50}}></View>
                        <TouchableOpacity>
                            <Text style={TopStyles.body}>􀆊  Assigment 5</Text>
                        </TouchableOpacity>
                    </View>
            <View style={{width:'100%', height:'10%', position:'absolute', bottom:0}}>
                <FooterBar />
            </View>    

            
            {/*Anything to do with the date picker goes here*/}
            <DatePicker
        style={{width: 200}}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2000-01-01"
        maxDate="3000-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
    />


            
        </View>
    )
}

export default Tophw;
