
import React, { useState } from 'react';
import {View, Text, Button, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import DatePicker from 'react-native-datepicker'
import TopStyles from '../../styles/homework/TopStyles';
import FooterBar from '../../comps/footerBar'
import normalize from 'react-native-normalize';
import Task from '../homework/task'
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
   const [taskList, setTaskList]= useState([]);
   const[Head, setHead] = useState(false);
   
        var  assignmentsIcon = '􀆊 ';
        var AddDueDate =null;
        var color = "#00AEEF"
        var color2 = "#00AEEF"
        var color3 = "#00AEEF"
        var color4= "#00AEEF"
        var color5 = "#00AEEF"
        var color6 = "#00AEEF"
        var color7 = "#00AEEF"
        var color8 = "#00AEEF"
        var header = "Advanced Photoshop";
        var header2 = "Advanced Photoshop";
        var header3 = "Advanced Photoshop";
        var header4 = "Advanced Photoshop";
        var header5 = "Advanced Photoshop";
        var header6 = "Advanced Photoshop";
        var header7 = "Advanced Photoshop";
        var header8 = "Advanced Photoshop";
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
        header2="Advanced Photoshop"
        color = "#00AEEF"
    } else
    if(Growth2 === true){
        Iconfont2 = 30;
        header2="Design 2"
        color='#FF3B30'
         
    }else
   if(Growth3 === true){
        Iconfont3 = 30;
        header2="Buisness  Communication"
        color="#4CD964"
    }else
    if(Growth4 === true){
        Iconfont4= 30;
        header2="Professional Sales"
        color="#5856D6"
    }else
    if(Growth5 === true){
        Iconfont5 = 30;
        header2="Accounting for the manager"
        color="#FF9500"
    }else
    if(Growth6 === true){
        Iconfont6= 30;
        header2="Asset Design and Intergration"
        color="#FFCF00"
    }else
    if(Growth7=== true){
        Iconfont7 = 30;
        header2="Web Development 3"
        color="#C69C6D"
    } else
    if(Growth8=== true){
        Iconfont8 = 30;
        header2="Project 2"
        color="#007AFF"
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

            <View style={{flex: 0.01, borderBottomColor: '#BFBFBF', borderBottomWidth: 1, marginBottom:20 }}></View>
            <View style={TopStyles.iconCont}>
                <Text onPress={() =>{setGrowth(!Growth) 
                setGrowth2(false) 
                setGrowth3(false)
                setGrowth4(false)
                setGrowth5(false)
                setGrowth6(false)
                setGrowth7(false)
                setGrowth8(false)
            }}
                 style={[{color:'#00AEEF', fontSize:Iconfont}, TopStyles.icon]}>􀀣</Text>
                <Text onPress={() =>{
                setGrowth2(!Growth2)
                setGrowth(false) 
                setGrowth3(false)
                setGrowth4(false)
                setGrowth5(false)
                setGrowth6(false)
                setGrowth7(false)
                setGrowth8(false)
                }} 
                    style={[{color:'#FF3B30', fontSize:Iconfont2},        TopStyles.icon]}>􀈌</Text>
                <Text onPress={() =>{
                    setGrowth3(!Growth3)
                    setGrowth(false) 
                    setGrowth2(false)
                    setGrowth4(false)
                    setGrowth5(false)
                    setGrowth6(false)
                    setGrowth7(false)
                    setGrowth8(false)
                }}
                    style={[{color:"#4CD964",fontSize:Iconfont3},       TopStyles.icon]}>􀒡</Text>
                <Text onPress={() =>{
                    setGrowth4(!Growth4)
                    setGrowth(false) 
                    setGrowth2(false)
                    setGrowth3(false)
                    setGrowth5(false)
                    setGrowth6(false)
                    setGrowth7(false)
                    setGrowth8(false)
                    }}
                    style={[{color:"#FF9500", fontSize:Iconfont4},       TopStyles.icon]}>􀖘</Text>
                <Text onPress={() =>{
                    setGrowth5(!Growth5)
                    setGrowth(false) 
                    setGrowth2(false)
                    setGrowth3(false)
                    setGrowth4(false)
                    setGrowth6(false)
                    setGrowth7(false)
                    setGrowth8(false)
                    }
                    }style={[{color:"#FF9500", fontSize:Iconfont5},       TopStyles.icon]}>􀘝</Text>
                <Text onPress={() =>{
                    setGrowth6(!Growth6)
                    setGrowth(false) 
                    setGrowth2(false)
                    setGrowth3(false)
                    setGrowth4(false)
                    setGrowth5(false)
                    setGrowth7(false)
                    setGrowth8(false)
                    }}
                    style={[{color:"#FFCF00", fontSize:Iconfont6},       TopStyles.icon]}>􀏀</Text>
                <Text onPress={() =>{
                    setGrowth7(!Growth7)
                    setGrowth(false) 
                    setGrowth2(false)
                    setGrowth3(false)
                    setGrowth4(false)
                    setGrowth5(false)
                    setGrowth6(false)
                    setGrowth8(false)
                    }}
                    style={[{color:"#C69C6D",fontSize:Iconfont7},        TopStyles.icon]}>􀁛</Text>
                <Text onPress={() =>{
                    setGrowth8(!Growth8)
                    setGrowth(false) 
                    setGrowth2(false)
                    setGrowth3(false)
                    setGrowth4(false)
                    setGrowth5(false)
                    setGrowth6(false)
                    setGrowth7(false)
                    }}
                    style={[{color:"#007AFF", fontSize:Iconfont8},       TopStyles.icon]}>􀓤</Text>
                <Text style={TopStyles.icon} onPress={()=>{
                    var arr = taskList;
                    arr.push(1);
                    arr = arr.map((o)=>{
                        return o;
                    })
                    setTaskList(arr);
                }}>Add task􀅼</Text>
            </View>
            <ScrollView>
                <Text style={[TopStyles.headerText,  {color:color}]}>{header2}</Text>
                    <View onPress={()=>setHead(!header)} style={TopStyles.asgContainer}>
                    <ScrollView>
                        
                        {
                            taskList.map((obj,i)=>{
                                return <Task />
                            })
                        }
                       
                        </ScrollView>
                    </View>
            
            </ScrollView>
          
            <View style={{width:'100%', height:'10%', position:'absolute', bottom:0}}>
               
          
            <FooterBar />
            </View>   
        </View>
    )
}

export default Tophw;