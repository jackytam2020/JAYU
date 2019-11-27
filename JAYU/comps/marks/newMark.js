import React,{useState} from 'react';
import { View,Text,Button, TextInput, TouchableOpacity} from 'react-native';
import editMarkStyles from '../../styles/marks/editMarkStyles';
import markStyles from '../../styles/marks/markStyles';
import Marks from '../marks/marks';
import MarksRow from '../marks/markRow';
import axios from 'axios'

function NewMark(props){
    const [select, setSelect] = useState("grey")
    const [select1, setSelect1] = useState("grey")
    const [select2, setSelect2] = useState("grey")
    const [slideDown, setSlideDown] = useState(0)

    var setMark = props.navigation.getParam("setMark");
    var mark = props.navigation.getParam("mark");
    var courseKey = props.navigation.getParam("courseKey"); 
    var courseReadKey = props.navigation.getParam("courseReadKey"); 
    var classname = props.navigation.getParam("classname"); 

    var mark_name = "";
    var weight = 8;
    var score = 93;
    var outof = 100;

    const CreateMarks = async()=>{
        //fetch db to create marks
        console.log("Created Post");
        var obj = {
            key: courseKey,
            data:{
                mark_name:mark_name,
                weight:weight,
                score:score,
                outof:outof,
            }
        }
        var r = await axios.post('http://localhost:3001/post', obj);
        console.log("Create", r.data);    
        ReadMarks();
    }

    const ReadMarks = async()=>{
        var obj = {
            key:courseReadKey,
            data:{}
        }
    
        var r = await axios.post('http://localhost:3001/post', obj);
      
        var dbusers = JSON.parse(r.data.body);
        console.log("Read", dbusers);
        setMark(dbusers.data); 
      }
    

  return (
    <View style={editMarkStyles.container}>
        <View style={editMarkStyles.titleBar}>
            <Text style={{fontSize:20}}>New Mark</Text>
            <Text style={{color:"grey"}}>{classname}</Text>
        </View>

        {/* Chose Mark Type */}

        <View style={editMarkStyles.markTypeContainer}>
            <View style={editMarkStyles.markTypeBox}>
                <Text>Type of Mark</Text>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <Text style={{color:select, fontSize:25}} 
                    onPress={()=>{
                        setSelect('black')
                        setSelect1('grey')
                        setSelect2('grey')
                        }}>Assignment</Text>
                    <Text style={{color:select1, fontSize:25}} 
                    onPress={()=>{
                        setSelect1('black')
                        setSelect('grey')
                        setSelect2('grey')
                        }}>Exam</Text>
                        
                    <Text style={{color:select2, fontSize:25}} 
                    onPress={()=>{
                        setSelect2('black')
                        setSelect1('grey')
                        setSelect('grey')
                        }}>Other</Text>
                </View>
                <View style={{flex:0.2, flexDirection:'row', top:5}}>
                        <View style={editMarkStyles.line}></View>
                </View>
            </View>
        </View>

        {/* Type Element Name */}
       
        <View style={editMarkStyles.markNameContainer}>
            <View style={editMarkStyles.markNameBox}>
                <Text>Element Name</Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <TextInput
                        clearTextOnFocus={true}
                        placeholder="Midterm Exam"
                        style={{fontSize:25, marginRight:15}}
                        onChangeText={(t) => {mark_name = t}}>
                    </TextInput>
                    <Text style={{color:'grey', top:3}}>Tap to Edit</Text>
                </View>
                <View style={{flex:0.2, flexDirection:'row', top:5}}>
                        <View style={editMarkStyles.line}></View>
                </View>
            </View>
        </View>

        {/* Enter Element Weight */}
       
        <View style={editMarkStyles.weightContainer}>
            <View style={editMarkStyles.markNameBox}>
                <Text>How much is it Worth </Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <TextInput
                        clearTextOnFocus={true}
                        defaultValue={"8"}
                        style={{fontSize:25, marginRight:15}}
                        onChangeText={(t) => {weight = t}}>
                    </TextInput>
                </View>
                <View style={{flex:0.2, flexDirection:'row', top:5}}>
                        <View style={editMarkStyles.line}></View>
                </View>
            </View>
        </View>

        {/* Enter Element Mark */}
       
        <View style={editMarkStyles.markContainer}>
            <View style={editMarkStyles.markNameBox}>
                <Text>What mark did you get? </Text>
                <View style={{flexDirection:'row', width:'40%', alignItems:'center', justifyContent:'space-between'}}>
                    <TextInput
                        clearTextOnFocus={true}
                        defaultValue={"93"}
                        style={{fontSize:25}}
                        onChangeText={(t) => {score = t}}>
                    </TextInput>
                    <Text> of </Text>
                    <TextInput
                        clearTextOnFocus={true}
                        defaultValue={"100"}
                        style={{fontSize:25}}
                        onChangeText={(t) => {outof = t}}>
                    </TextInput>
                </View>
                <View style={{flex:0.2, flexDirection:'row', top:5}}>
                        <View style={editMarkStyles.line}></View>
                </View>
            </View>
        </View>

        <View style={editMarkStyles.actionButContainer}>
            <View style={editMarkStyles.actionButtons}>
                <Text style={{fontSize:15}}
                    onPress={()=>{
                        CreateMarks();
                        props.navigation.navigate("Marks", {mark_name:mark_name, score:score, outof:outof, weight:weight})
                    }}
                >Add</Text>
                <Text style={{fontSize:15}}
                    onPress={()=>{
                        props.navigation.goBack()
                    }}
                >Cancel</Text>
            </View>
        </View>
    </View>
  );
};
export default NewMark;
