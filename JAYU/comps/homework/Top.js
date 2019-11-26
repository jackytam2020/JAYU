

import React, { useState, useEffect } from 'react';
import {View, Text, Button,SafeAreaView,KeyboardAvoidingView, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import DatePicker from 'react-native-datepicker'
import TopStyles from '../../styles/homework/TopStyles';
import FooterBar from '../../comps/footerBar'
import normalize from 'react-native-normalize';
import Task from '../homework/task'
import axios from 'axios';

function Tophw(props){
   const[DropDown1, SetDropdown1] = useState(false);
   const[Growth,setGrowth]= useState(true);
   const[Growth2,setGrowth2]= useState(false);
   const[Growth3,setGrowth3]= useState(false);
   const[Growth4,setGrowth4]= useState(false);
   const[Growth5,setGrowth5]= useState(false);
   const[Growth6,setGrowth6]= useState(false);
   const[Growth7,setGrowth7]= useState(false);
   const[Growth8,setGrowth8]= useState(false);
   const [Tasklist, setTasklist]= useState([]);
   const [Head, setHead] = useState(false);
   const [key, setKey] = useState("photoshop_create");
   const [readKey, setReadKey] = useState("photoshop_read");
   const [updateKey, setUpdateKey] = useState("photoshop_update");
   const [courseDeleteKey, setCourseDeleteKey] = useState("photoshop_delete");
   
        var  assignmentsIcon = '􀆊 ';
        var AddDueDate =null;
        var op = 0.5
        var op2 = 0.5
        var op3= 0.5
        var op4 = 0.5
        var op5 = 0.5
        var op6 = 0.5
        var op7 = 0.5
        var op8 = 0.5
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
        op = 1

    } else
    if(Growth2 === true){
        Iconfont2 = 30;
        header2="Design 2"
        color='#FF3B30'
        op2= 1
         
    }else
   if(Growth3 === true){
        Iconfont3 = 30;
        header2="Buisness  Communication"
        color="#4CD964"
        op3 = 1
    }else
    if(Growth4 === true){
        Iconfont4= 30;
        header2="Professional Sales"
        color="#5856D6"
        op4 = 1
    }else
    if(Growth5 === true){
        Iconfont5 = 30;
        header2="Accounting for the manager"
        color="#FF9500"
        op5 = 1
    }else
    if(Growth6 === true){
        Iconfont6= 30;
        header2="Asset Design and Integration"
        color="#FFCF00"
        op6 = 1
    }else
    if(Growth7=== true){
        Iconfont7 = 30;
        header2="Web Development 3"
        color="#C69C6D"
        op7 = 1
    } else
    if(Growth8=== true){
        Iconfont8 = 30;
        header2="Project 2"
        color="#007AFF"
        op8= 1
    }

    var assignment_name = ""
    var completed = false;
    var deleted = false;

    const CreateAssignments = async()=>{
        //fetch db to create users
        console.log("email & password");
        var obj = {
            key :key,
            data:{
                assignment_name:assignment_name,
                completed:completed,
                deleted:deleted
            }
        }
        var r = await axios.post('http://localhost:3001/post', obj);
        console.log("Create", r.data);
        await ReadAssignments();
        
    }
    
    const ReadAssignments = async(key)=>{
        var k = key || readKey;
        var obj = {
            key:k,
            data:{}
        }

        var r = await axios.post('http://localhost:3001/post', obj);
       
        var dbusers = JSON.parse(r.data.body);
        console.log("Read", dbusers);
        setTasklist(dbusers.data); 
    }

     // when comp loads, read users
     useEffect(()=>{
        ReadAssignments();
    },[]);


    return(

        <SafeAreaView style={TopStyles.container}>
             <View style={TopStyles.navBar}>
                <TouchableOpacity
                       onPress={()=>{
                            props.navigation.navigate("HomeScreen")
                       }}>
                        <Text style={{fontSize:20, marginLeft:20, color:'#007AFF'}}>back</Text>
                </TouchableOpacity>
            </View>

        <View style={{flex:0.2}}>
            
            <View style={TopStyles.iconCont}>
                <Text onPress={ async() =>{
                setGrowth(true) 
                setGrowth2(false);
                setGrowth3(false);
                setGrowth4(false);
                setGrowth5(false);
                setGrowth6(false);
                setGrowth7(false);
                setGrowth8(false);
                setKey("photoshop_create");
                setUpdateKey("photoshop_update");
                setCourseDeleteKey("photoshop_delete");
                ReadAssignments("photoshop_read");
                
            }}
                 style={[{color:'#00AEEF', fontSize:Iconfont, opacity: op}, TopStyles.icon,]}>􀀣</Text>
                <Text onPress={ async() =>{
                setGrowth2(true);
                setGrowth(false);
                setGrowth3(false);
                setGrowth4(false);
                setGrowth5(false);
                setGrowth6(false);
                setGrowth7(false);
                setGrowth8(false);
                setKey("design2_create")
                setUpdateKey("design2_update");
                setCourseDeleteKey("design2_delete");
                ReadAssignments("design2_read");

                }} 
                    style={[{color:'#FF3B30', fontSize:Iconfont2, opacity: op2},        TopStyles.icon]}>􀈌</Text>
                <Text onPress={async() =>{
                    setGrowth3(!Growth3)
                    setGrowth(false) 
                    setGrowth2(false)
                    setGrowth4(false)
                    setGrowth5(false)
                    setGrowth6(false)
                    setGrowth7(false)
                    setGrowth8(false)
                    setKey("business_create")                   
                    setUpdateKey("business_update");
                    setCourseDeleteKey("business_delete");
                    ReadAssignments("business_read");
                }}
                    style={[{color:"#4CD964",fontSize:Iconfont3, opacity: op3},       TopStyles.icon]}>􀒡</Text>
                <Text onPress={async() =>{
                    setGrowth4(!Growth4)
                    setGrowth(false) 
                    setGrowth2(false)
                    setGrowth3(false)
                    setGrowth5(false)
                    setGrowth6(false)
                    setGrowth7(false)
                    setGrowth8(false)
                    setKey("sales_create")
                    setUpdateKey("sales_update");
                    setCourseDeleteKey("sales_delete");
                    ReadAssignments("sales_read");
                    }}
                    style={[{color:"#5856D6", fontSize:Iconfont4, opacity: op4},       TopStyles.icon]}>􀖘</Text>
                <Text onPress={async() =>{
                    setGrowth5(!Growth5)
                    setGrowth(false) 
                    setGrowth2(false)
                    setGrowth3(false)
                    setGrowth4(false)
                    setGrowth6(false)
                    setGrowth7(false)
                    setGrowth8(false)
                    setKey("accounting_create")
                    setUpdateKey("accounting_update");    
                    setCourseDeleteKey("accounting_delete");       
                    ReadAssignments("accounting_read");
                    }
                    }style={[{color:"#FF9500", fontSize:Iconfont5, opacity: op5},       TopStyles.icon]}>􀘝</Text>
                <Text onPress={async() =>{
                    setGrowth6(!Growth6)
                    setGrowth(false) 
                    setGrowth2(false)
                    setGrowth3(false)
                    setGrowth4(false)
                    setGrowth5(false)
                    setGrowth7(false)
                    setGrowth8(false)
                    setKey("assets_create");
                    setUpdateKey("assets_update");    
                    setCourseDeleteKey("assets_delete");             
                    ReadAssignments("assets_read");
                    }}
                    style={[{color:"#FFCF00", fontSize:Iconfont6, opacity: op6},       TopStyles.icon]}>􀏀</Text>
                <Text onPress={async() =>{
                    setGrowth7(!Growth7)
                    setGrowth(false) 
                    setGrowth2(false)
                    setGrowth3(false)
                    setGrowth4(false)
                    setGrowth5(false)
                    setGrowth6(false)
                    setGrowth8(false)
                    setKey("webdev_create")
                    setUpdateKey("webdev_update");   
                    setCourseDeleteKey("webdev_delete");    
                    ReadAssignments("webdev_read");
                    }}
                    style={[{color:"#C69C6D",fontSize:Iconfont7, opacity: op7},        TopStyles.icon]}>􀁛</Text>
                <Text onPress={async() =>{
                    setGrowth8(!Growth8)
                    setGrowth(false) 
                    setGrowth2(false)
                    setGrowth3(false)
                    setGrowth4(false)
                    setGrowth5(false)
                    setGrowth6(false)
                    setGrowth7(false)
                    setKey("project2_create")
                    setUpdateKey("project2_update");
                    setCourseDeleteKey("project2_delete");  
                    ReadAssignments("project2_read");
                    }}
                    style={[{color:"#007AFF", fontSize:Iconfont8, opacity: op8},       TopStyles.icon]}>􀓤
                    </Text>
            </View>

                <Text style={[TopStyles.headerText,{color:color}]}>{header2}</Text>
                <View style={{borderBottomColor: '#BFBFBF', borderBottomWidth: 1, marginBottom:10 }}></View>
            </View>


      
                <ScrollView style={{flex:2}}>
                    <View onPress={()=>setHead(!header)} style={TopStyles.icon2}>
                    <ScrollView>
                        {
                            Tasklist.map((obj,i)=>{
                                return <Task 
                                    key={i}
                                    id={obj.id}
                                    assignment_name={obj.assignment_name}
                                    complete={obj.completed}
                                    deleted={obj.deleted}
                                    updateKey={updateKey}
                                    ReadAssignments={ReadAssignments}
                                    courseDeleteKey={courseDeleteKey}
                                />
                            })
                        }
                       
                    </ScrollView>
                        < Text style={TopStyles.icon2} onPress={()=>{
                    CreateAssignments();
                }}>􀁌 New Assignment</Text>
                    </View>
            
            </ScrollView>
            
            <View style={{width:'100%', height:'10%', position:'absolute', bottom:0}}>
            <FooterBar />
            </View>  
        </SafeAreaView>
    )
}

export default Tophw;
