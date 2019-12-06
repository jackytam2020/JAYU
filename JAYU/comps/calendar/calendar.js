import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import scheduleStyle from '../../styles/calendar/scheduleStyle'
import NewClass from '../../comps/calendar/newClass'
import EditClass from '../../comps/calendar/editClass'
import AdjustingClass from '../../comps/calendar/adjustingClass';
import styles from '../../styles/calendar/agendaStyles'
import FooterBar from '../../comps/footerBar'
import Modal from "react-native-modal"
import { ScrollView } from 'react-native-gesture-handler';
import Card from './agenda';
import axios from 'axios';
import CalendarPicker from 'react-native-calendar-picker';
import { useFocusEffect } from '@react-navigation/core';
import normalize from 'react-native-normalize';


function Schedule(props) {
    const [link, setOpacity] = useState(0.1);
    const [editSlide, setEditSlide] = useState(false);
    const [footerDim, setFooterDim] = useState('flex');
    const [mode, setMode] = useState(1);
    const [items, setItems] = useState([{ '2019-11-9': [{ text: 'Professional' }] }]);
    const [date, setDate] = useState(new Date());
    const [agenda, setAgenda] = useState([]);
    const [agenda1, setAgenda1] = useState([]);
    const [agenda2, setAgenda2] = useState([]);
    const [agenda3, setAgenda3] = useState([]);
    const [agenda4, setAgenda4] = useState([]);
    const [agenda5, setAgenda5] = useState([]);
    const [agenda6, setAgenda6] = useState([]);
    const [agenda7, setAgenda7] = useState([]);
    const [viewDay,setViewDay] = useState();
    const [readKey, setReadKey] = useState("design2_read");
    const [color, setColor] = useState("blue");

    useEffect(()=>{
       setColor("blue")
        },[]);
  
    var moment = require("moment");
    const ReadAssignments = async (key) => {
        var k = key;
        var obj = {
            key: k,
            data: {}
        }

        var r = await axios.post('https://jayu-d3.herokuapp.com/post', obj);

        var dbusers = JSON.parse(r.data.body);
        console.log("Read", dbusers);
        setAgenda(dbusers.data);
    }

    const ReadAssignments1 = async (key) => {
        var k = key;
        var obj = {
            key: k,
            data: {}
        }

        var r = await axios.post('https://jayu-d3.herokuapp.com/post', obj);

        var dbusers = JSON.parse(r.data.body);
        console.log("Read", dbusers);
        setAgenda1(dbusers.data);
    }

    const ReadAssignments2 = async (key) => {
        var k = key;
        var obj = {
            key: k,
            data: {}
        }

        var r = await axios.post('https://jayu-d3.herokuapp.com/post', obj);

        var dbusers = JSON.parse(r.data.body);
        console.log("Read", dbusers);
        setAgenda2(dbusers.data);
    }
    const ReadAssignments3 = async (key) => {
        var k = key;
        var obj = {
            key: k,
            data: {}
        }

        var r = await axios.post('https://jayu-d3.herokuapp.com/post', obj);

        var dbusers = JSON.parse(r.data.body);
        console.log("Read", dbusers);
        setAgenda3(dbusers.data);
    }

    const ReadAssignments4 = async (key) => {
        var k = key;
        var obj = {
            key: k,
            data: {}
        }

        var r = await axios.post('https://jayu-d3.herokuapp.com/post', obj);

        var dbusers = JSON.parse(r.data.body);
        console.log("Read", dbusers);
        setAgenda4(dbusers.data);
    }

    const ReadAssignments5 = async (key) => {
        var k = key;
        var obj = {
            key: k,
            data: {}
        }

        var r = await axios.post('https://jayu-d3.herokuapp.com/post', obj);

        var dbusers = JSON.parse(r.data.body);
        console.log("Read", dbusers);
        setAgenda5(dbusers.data);
    }

    const ReadAssignments6 = async (key) => {
        var k = key;
        var obj = {
            key: k,
            data: {}
        }

        var r = await axios.post('https://jayu-d3.herokuapp.com/post', obj);

        var dbusers = JSON.parse(r.data.body);
        console.log("Read", dbusers);
        setAgenda6(dbusers.data);
    }

    const ReadAssignments7 = async (key) => {
        var k = key;
        var obj = {
            key: k,
            data: {}
        }

        var r = await axios.post('https://jayu-d3.herokuapp.com/post', obj);

        var dbusers = JSON.parse(r.data.body);
        console.log("Read", dbusers);
        setAgenda7(dbusers.data);
    }

    

    // when comp loads, read users
    useEffect(() => {console.log("sherman");
        ReadAssignments("photoshop_read");
        ReadAssignments1("design2_read");
        ReadAssignments2("business_read");
        ReadAssignments3("sales_read");
        ReadAssignments4("accounting_read");
        ReadAssignments5("assets_read");
        ReadAssignments6("webdev_read");
        ReadAssignments7("project2_read");
    }, []);


        var fagenda = agenda.filter((obj,i)=>{
        var calendarDate = new Date(viewDay);
        var due_date = new Date(obj.due_date);

        //if year/month/day matches
        if(calendarDate.getDate() === due_date.getDate() && calendarDate.getMonth() === due_date.getMonth()){
            return true;
        } else {
            return false;
        }
        
       
        }); 
    


                var dagenda = agenda1.filter((obj,i)=>{
                    var calendarDate = new Date(viewDay);
                    var due_date = new Date(obj.due_date);
            
                    //if year/month/day matches
                    if(calendarDate.getDate() === due_date.getDate() && calendarDate.getMonth() === due_date.getMonth()){
                        return true;
                    } else {
                        return false;
                    }
                    
                   
                    }); 

            
                    var bcagenda = agenda2.filter((obj,i)=>{
                        var calendarDate = new Date(viewDay);
                        var due_date = new Date(obj.due_date);
                
                        //if year/month/day matches
                        if(calendarDate.getDate() === due_date.getDate() && calendarDate.getMonth() === due_date.getMonth()){
                            return true;
                        } else {
                            return false;
                        }
                        
                       
                        }); 

                
            
                        var psagenda = agenda3.filter((obj,i)=>{
                            var calendarDate = new Date(viewDay);
                            var due_date = new Date(obj.due_date);
                    
                            //if year/month/day matches
                            if(calendarDate.getDate() === due_date.getDate() && calendarDate.getMonth() === due_date.getMonth()){
                                return true;
                            } else {
                                return false;
                            }
                            
                           
                            }); 


            
                    var amagenda = agenda4.filter((obj,i)=>{
                        var calendarDate = new Date(viewDay);
                        var due_date = new Date(obj.due_date);
                
                        //if year/month/day matches
                        if(calendarDate.getDate() === due_date.getDate() && calendarDate.getMonth() === due_date.getMonth()){
                            return true;
                        } else {
                            return false;
                        }
                        
                       
                        }); 


            
                    var aiagenda = agenda5.filter((obj,i)=>{
                        var calendarDate = new Date(viewDay);
                        var due_date = new Date(obj.due_date);
                
                        //if year/month/day matches
                        if(calendarDate.getDate() === due_date.getDate() && calendarDate.getMonth() === due_date.getMonth()){
                            return true;
                        } else {
                            return false;
                        }
                        
                       
                        }); 


            
                    var wagenda = agenda6.filter((obj,i)=>{
                        var calendarDate = new Date(viewDay);
                        var due_date = new Date(obj.due_date);
                
                        //if year/month/day matches
                        if(calendarDate.getDate() === due_date.getDate() && calendarDate.getMonth() === due_date.getMonth()){
                            return true;
                        } else {
                            return false;
                        }
                        
                       
                        }); 



            
                    var ppagenda = agenda7.filter((obj,i)=>{
                        var calendarDate = new Date(viewDay);
                        var due_date = new Date(obj.due_date);
                
                        //if year/month/day matches
                        if(calendarDate.getDate() === due_date.getDate() && calendarDate.getMonth() === due_date.getMonth()){
                            return true;
                        } else {
                            return false;
                        }
                        
                       
                        }); 
    return (
        <View style={scheduleStyle.container}>
            <View style={scheduleStyle.topNav}>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate("HomeScreen")
                    }}
                >
                     <Text style={{fontSize:20, fontFamily:"SFProDisplay-Medium" , marginLeft:20, color:'#007AFF'}}>􀆉 Back</Text>
                </TouchableOpacity>
                <Text style={{fontSize:normalize(20),marginRight:normalize(145), fontFamily:"SFProDisplay-Medium", }}>{props.navigation.getParam("title")}</Text>
                
            </View>
            <View style={{ flex: 1.1,borderBottomColor:"grey", borderBottomWidth: 0.5, borderBottomColor:"grey", borderBottomWidth: 0.5, marginTop: 10}}>
                <CalendarPicker
                selectedDayColor="lightgrey"
                todayBackgroundColor= "green"
                onDateChange = {(v)=>{
                    setViewDay(moment(v).format("MM/DD/YYYY"))
                    console.log(viewDay);
                }}
                ></CalendarPicker>
            </View>

            <ScrollView contentContainerStyle={{ 
              
                alignItems:"center",
                backgroundColor: "#f2f2f2",
                flex: 1
            
            }}>
                <View style={{width: "100%", alignItems:"center", justifyContent: "center"}}>
                {
                    fagenda.map((obj, i) => {
                        return <Card
                            key={i}
                            id={obj.id}
                            icon={"􀀣"}
                            bg_color={"#D6F0FC"}
                            color={"#00AEEF"}
                            due_date={obj.due_date}
                            course_name={"Advanced Photoshop"}
                            assignment_name={obj.assignment_name}
                            complete={obj.completed}
                            deleted={obj.deleted}
                            ReadAssignments={ReadAssignments}

                        />
                    })
                }

                {
                    dagenda.map((obj, i) => {
                        return <Card
                            key={i}
                            id={obj.id}
                            icon={"􀈌"}
                            bg_color={"#FFDBD8"}
                            color={"#FF3B30"}
                            course_name={"Design 2"}
                            due_date={obj.due_date}
                            assignment_name={obj.assignment_name}
                            complete={obj.completed}
                            deleted={obj.deleted}
                            ReadAssignments={ReadAssignments}

                        />
                    })
                }

                {
                    bcagenda.map((obj, i) => {
                        return <Card
                            key={i}
                            id={obj.id}
                            icon={"􀒡"}
                            bg_color={"#DEF7E1"}
                            color={"#4CD964"}
                            course_name={"Business  Communication"}
                            due_date={obj.due_date}
                            assignment_name={obj.assignment_name}
                            complete={obj.completed}
                            deleted={obj.deleted}
                            ReadAssignments={ReadAssignments}

                        />
                    })
                }


                {
                    psagenda.map((obj, i) => {
                        return <Card
                            key={i}
                            id={obj.id}
                            icon={"􀋤"}
                            bg_color={"#DEDEF7"}
                            color={"#5856D6"}
                            course_name={"Professional Sales"}
                            due_date={obj.due_date}
                            assignment_name={obj.assignment_name}
                            complete={obj.completed}
                            deleted={obj.deleted}
                            ReadAssignments={ReadAssignments}

                        />
                    })
                }


                {
                    amagenda.map((obj, i) => {
                        return <Card
                            key={i}
                            id={obj.id}
                            icon={"􀘝"}
                            bg_color={"#FFEBD4"}
                            color={"#FF9500"}
                            course_name={"Accounting for the Manager"}
                            due_date={obj.due_date}
                            assignment_name={obj.assignment_name}
                            complete={obj.completed}
                            deleted={obj.deleted}
                            ReadAssignments={ReadAssignments}

                        />
                    })
                }


                {
                    aiagenda.map((obj, i) => {
                        return <Card
                            key={i}
                            id={obj.id}
                            icon={"􀏀"}
                            bg_color={"#FFF5D7"}
                            color={"#FFCF00"}
                            course_name={"Asset Design and Integration"}
                            due_date={obj.due_date}
                            assignment_name={obj.assignment_name}
                            complete={obj.completed}
                            deleted={obj.deleted}
                            ReadAssignments={ReadAssignments}

                        />
                    })
                }


                {
                    wagenda.map((obj, i) => {
                        return <Card
                            key={i}
                            id={obj.id}
                            icon={"􀁛"}
                            bg_color={"#F5EBE2"}
                            color={"#C69C6D"}
                            course_name={"Web Development 3"}
                            due_date={obj.due_date}
                            assignment_name={obj.assignment_name}
                            complete={obj.completed}
                            deleted={obj.deleted}
                            ReadAssignments={ReadAssignments}

                        />
                    })
                }

                {
                    ppagenda.map((obj, i) => {
                        return <Card
                            key={i}
                            id={obj.id}
                            icon={"􀉮"}
                            bg_color={"#D0E1FF"}
                            color={"#007AFF"}
                            course_name={"Project 2"}
                            due_date={obj.due_date}
                            assignment_name={obj.assignment_name}
                            complete={obj.completed}
                            deleted={obj.deleted}
                            ReadAssignments={ReadAssignments}

                        />
                    })
                }

                </View>
            </ScrollView>

            <Modal isVisible={editSlide} swipeDirection={'down'} onSwipeComplete={() => { setEditSlide(false) }}>
                <View style={{ flex: 0.9 }}>
                    {mode === 1 ? <NewClass setEditSlide={setEditSlide} setMode={setMode} /> : null}
                    {mode === 2 ? <AdjustingClass setEditSlide={setEditSlide} setMode={setMode} /> : null}
                </View>
            </Modal>

            <View style={{ width: '100%', height: '11%', bottom: 0 }}>
                <FooterBar title={props.navigation.getParam("title")}/>
            </View>


        </View>
    )
}
export default Schedule;