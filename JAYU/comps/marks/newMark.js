import React,{useState} from 'react';
import { View,Text,Button, TextInput, TouchableOpacity, Form    } from 'react-native';
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

    const[markName, setmarkName] = useState("");
    const[Worth, setWorth]  = useState("")
    const[Score1, setScore1] = useState("")
    const[Total, setTotal]  = useState("")
    var mark_name = "";
    var weight = "";
    var score = "";
    var outof = "";

    var ReadMarks = props.navigation.getParam("ReadMarks");

    

    const CreateMarks = async()=>{
        //fetch db to create marks
        console.log("Created Post");
        var obj = {
            key: courseKey,
            data:{
                mark_name:markName,
                weight:Worth,
                score:Score1,
                outof:Total,
            }
        }
        var r = await axios.post('http://localhost:3001/post', obj);
        console.log("Create", r.data);    
        ReadMarks();
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
                        onChangeText={(t) => {setmarkName(t)}}>
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
                        placeholder="8"
                        style={{fontSize:25, marginRight:15}}
                        onChangeText={(t) => {setWorth(t)}}>
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
                        placeholder="93"
                        style={{fontSize:25}}
                        onChangeText={(t) => {setScore1(t)}}>
                    </TextInput>
                    <Text> of </Text>
                    <TextInput
                        clearTextOnFocus={true}
                        placeholder="100"
                        style={{fontSize:25}}
                        onChangeText={(t) => {setTotal(t)}}>
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

                if (markName.length <=  0 ){
                    alert("missing name");
                    return false;
                } 

                if(Worth.length <= 0){
                    alert("missing assigment worth")
                    return false
                }

                if(Score1.length <=0) {
                    alert("missing first mark")
                    return false
                }

                if(Total.length <=0) {
                    alert("missing Last mark")
                    return false
                }
               




                CreateMarks()
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
