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

    const [readKey, setReadKey] = useState("design2_read");


    const ReadAssignments = async (key) => {
        var k = key;
        var obj = {
            key: k,
            data: {}
        }

        var r = await axios.post('http://localhost:3001/post', obj);

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

        var r = await axios.post('http://localhost:3001/post', obj);

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

        var r = await axios.post('http://localhost:3001/post', obj);

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

        var r = await axios.post('http://localhost:3001/post', obj);

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

        var r = await axios.post('http://localhost:3001/post', obj);

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

        var r = await axios.post('http://localhost:3001/post', obj);

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

        var r = await axios.post('http://localhost:3001/post', obj);

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

        var r = await axios.post('http://localhost:3001/post', obj);

        var dbusers = JSON.parse(r.data.body);
        console.log("Read", dbusers);
        setAgenda7(dbusers.data);
    }


    // when comp loads, read users
    useEffect(() => {
        ReadAssignments("photoshop_read");
        ReadAssignments1("design2_read");
        ReadAssignments2("business_read");
        ReadAssignments3("sales_read");
        ReadAssignments4("accounting_read");
        ReadAssignments5("assets_read");
        ReadAssignments6("webdev_read");
        ReadAssignments7("project2_read");
    }, []);

    agenda = agenda.filter((obj,i)=>{
        var calendarDate = new Date(string_for_calendate);
        var due_date = new Date(obj.duedate);

        //if year/month/day matches
        if(calendarDate.getMonth() === due_date){
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
                    <Text style={{ fontSize: 20, marginLeft: 20, color: '#007AFF' }}>back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setEditSlide(true)
                        setFooterDim('none')
                    }}>
                    <Text style={{ fontSize: 20, marginRight: 20, color: '#007AFF' }}>Add</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <Calendar
                    // Initially visible month. Default = Date()
                    current={'2012-03-01'}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={'2012-05-10'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={'2012-05-30'}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={(day) => { console.log('selected day', day) }}
                    // Handler which gets executed on day long press. Default = undefined
                    onDayLongPress={(day) => { console.log('selected day', day) }}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'yyyy MM'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={(month) => { console.log('month changed', month) }}
                    // Hide month navigation arrows. Default = false
                    hideArrows={true}
                    // Replace default arrows with custom ones (direction can be 'left' or 'right')
                    renderArrow={(direction) => (<Arrow />)}
                    // Do not show days of other months in month page. Default = false
                    hideExtraDays={true}
                    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                    // day from another month that is visible in calendar page. Default = false
                    disableMonthChange={true}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={1}
                    // Hide day names. Default = false
                    hideDayNames={true}
                    // Show week numbers to the left. Default = false
                    showWeekNumbers={true}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    onPressArrowLeft={substractMonth => substractMonth()}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                    onPressArrowRight={addMonth => addMonth()}
                />
            </View>

            <ScrollView style={{ flex: 10 }}>
                <Button
                    title="test"
                    onPress={() => {
                        ReadAssignments("photoshop_read");
                        ReadAssignments1("design2_read");
                        ReadAssignments2("business_read");
                        ReadAssignments3("sales_read");
                        ReadAssignments4("accounting_read");
                        ReadAssignments5("assets_read");
                        ReadAssignments6("webdev_read");
                        ReadAssignments7("project2_read");
                        console.log(agenda)
                    }}
                />
                {
                    agenda.map((obj, i) => {
                        return <Card
                            key={i}
                            id={obj.id}
                            icon={"􀀣"}
                            bg_color={"#D6F0FC"}
                            color={"#00AEEF"}
                            course_name={"Advanced Photoshop"}
                            assignment_name={obj.assignment_name}
                            complete={obj.completed}
                            deleted={obj.deleted}
                            ReadAssignments={ReadAssignments}

                        />
                    })
                }

                {
                    agenda1.map((obj, i) => {
                        return <Card
                            key={i}
                            id={obj.id}
                            icon={"􀈌"}
                            bg_color={"#FFDBD8"}
                            color={"#FF3B30"}
                            course_name={"Design 2"}
                            assignment_name={obj.assignment_name}
                            complete={obj.completed}
                            deleted={obj.deleted}
                            ReadAssignments={ReadAssignments}

                        />
                    })
                }

                {
                    agenda2.map((obj, i) => {
                        return <Card
                            key={i}
                            id={obj.id}
                            icon={"􀒡"}
                            bg_color={"#DEF7E1"}
                            color={"#4CD964"}
                            course_name={"Business  Communication"}
                            assignment_name={obj.assignment_name}
                            complete={obj.completed}
                            deleted={obj.deleted}
                            ReadAssignments={ReadAssignments}

                        />
                    })
                }


                {
                    agenda3.map((obj, i) => {
                        return <Card
                            key={i}
                            id={obj.id}
                            icon={"􀋤"}
                            bg_color={"#DEDEF7"}
                            color={"#5856D6"}
                            course_name={"Professional Sales"}
                            assignment_name={obj.assignment_name}
                            complete={obj.completed}
                            deleted={obj.deleted}
                            ReadAssignments={ReadAssignments}

                        />
                    })
                }


                {
                    agenda4.map((obj, i) => {
                        return <Card
                            key={i}
                            id={obj.id}
                            icon={"􀘝"}
                            bg_color={"#FFEBD4"}
                            color={"#FF9500"}
                            course_name={"Accounting for the Manager"}
                            assignment_name={obj.assignment_name}
                            complete={obj.completed}
                            deleted={obj.deleted}
                            ReadAssignments={ReadAssignments}

                        />
                    })
                }


                {
                    agenda5.map((obj, i) => {
                        return <Card
                            key={i}
                            id={obj.id}
                            icon={"􀏀"}
                            bg_color={"#FFF5D7"}
                            color={"#FFCF00"}
                            course_name={"Asset Design and Integration"}
                            assignment_name={obj.assignment_name}
                            complete={obj.completed}
                            deleted={obj.deleted}
                            ReadAssignments={ReadAssignments}

                        />
                    })
                }


                {
                    agenda6.map((obj, i) => {
                        return <Card
                            key={i}
                            id={obj.id}
                            icon={"􀁛"}
                            bg_color={"#F5EBE2"}
                            color={"#C69C6D"}
                            course_name={"Web Development 3"}
                            assignment_name={obj.assignment_name}
                            complete={obj.completed}
                            deleted={obj.deleted}
                            ReadAssignments={ReadAssignments}

                        />
                    })
                }

                {
                    agenda7.map((obj, i) => {
                        return <Card
                            key={i}
                            id={obj.id}
                            icon={"􀉮"}
                            bg_color={"#D0E1FF"}
                            color={"#007AFF"}
                            course_name={"Project 2"}
                            assignment_name={obj.assignment_name}
                            complete={obj.completed}
                            deleted={obj.deleted}
                            ReadAssignments={ReadAssignments}

                        />
                    })
                }


            </ScrollView>

            <Modal isVisible={editSlide} swipeDirection={'down'} onSwipeComplete={() => { setEditSlide(false) }}>
                <View style={{ flex: 0.9 }}>
                    {mode === 1 ? <NewClass setEditSlide={setEditSlide} setMode={setMode} /> : null}
                    {mode === 2 ? <AdjustingClass setEditSlide={setEditSlide} setMode={setMode} /> : null}
                </View>
            </Modal>

            <View style={{ width: '100%', height: '10%', position: 'absolute', bottom: 0 }}>
                <FooterBar />
            </View>


        </View>
    )
}
export default Schedule;