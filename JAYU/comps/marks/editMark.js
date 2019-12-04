import React,{useState, useEffect} from 'react';
import { View,Text,Button, TextInput, TouchableOpacity} from 'react-native';
import editMarkStyles from '../../styles/marks/editMarkStyles';
import markStyles from '../../styles/marks/markStyles';
import axios from 'axios';

function EditMark(props){

    var markName = props.navigation.getParam("markName"); 
    var editscore = props.navigation.getParam("score")
    var editoutof = props.navigation.getParam("outof")
    var editweight = props.navigation.getParam("weight")
    var id = props.navigation.getParam("id"); 
    var classname = props.navigation.getParam("classname"); 
    
    
    var courseUpdateKey = props.navigation.getParam("courseUpdateKey"); 
    var ReadMarks = props.navigation.getParam("ReadMarks"); 

    const [value, setValue]= useState(markName)
    const [select, setSelect] = useState("grey")
    const [select1, setSelect1] = useState("grey")
    const [select2, setSelect2] = useState("grey")
    const [score, setScore]= useState(editscore);
    const [outof, setOutof]= useState(editoutof);
    const [slideDown, setSlideDown] = useState(0);

    const [new_mark_name, setNew_mark_name] = useState("");
    const [new_weight, setNew_weight] = useState();
    const [new_score, setNew_score] = useState();
    const [new_outof, setNew_outof] = useState();    

  

    const UpdateMark = async()=>{
        var obj = {
            key: courseUpdateKey,
            data: {
                id: id,
                mark_name: new_mark_name || markName,
                weight: parseInt(new_weight || editweight),
                score: parseInt(new_score || editscore),
                outof: parseInt(new_outof || editoutof),
            }
        };

        var r = await axios.post('https://jayu-d3.herokuapp.com/post', obj);
        console.log("assignment", r.data);
        ReadMarks();
    }



  return (
    <View style={editMarkStyles.container}>
        <View style={editMarkStyles.titleBar}>
            <Text style={{fontSize:20}}>Edit Mark</Text>
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
                        defaultValue={markName}
                        style={{fontSize:25, marginRight:15}}
                        onChangeText={(text) => {setNew_mark_name(text)}}>
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
                        defaultValue={""+editweight+""}
                        style={{fontSize:25, marginRight:15}}
                        onChangeText={(text) => {setNew_weight(text)}}>
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
                        defaultValue={""+editscore+""}
                        style={{fontSize:25}}
                        onChangeText={(text) => {setNew_score(text)}}>
                    </TextInput>
                    <Text> of </Text>
                    <TextInput
                        clearTextOnFocus={true}
                        defaultValue={""+editoutof+""}
                        style={{fontSize:25}}
                        onChangeText={(text) => {setNew_outof(text)}}>
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
                        UpdateMark();
                        props.navigation.navigate("Marks",{value:value, score:score, outof:outof})
                    }}
                >Add</Text>
                <Text style={{fontSize:15}}
                    onPress={()=>{
                        //setSlideup(false)
                        props.navigation.goBack()
                    }}
                >Cancel</Text>
            </View>
        </View>

    </View>
  );
};
export default EditMark;
