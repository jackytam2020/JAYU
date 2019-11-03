import React,{useState} from 'react';
import { View,Text,Button, TextInput, TouchableOpacity, DatePickerIOS} from 'react-native';
import editClassStyles from '../styling/editClassStyles';
import BackDone from '../comps/backDoneButtons';

function EditClass(){
    const [select, setSelect] = useState("grey")
    const [select1, setSelect1] = useState("grey")
    const [select2, setSelect2] = useState("grey")
  return (
    <View style={editClassStyles.container}>
        
        <View style={editClassStyles.title}>
            <Text style={{fontSize:20}}>Business Communication</Text>
            <Text>for Thursday December 19</Text>
        </View>

        {/* recurring class checkboxes */}

        <View style={{ flex:0.1, flexDirection:'row', justifyContent:'center'}}>
            <View style={editClassStyles.checkBox}>
                <View style={{flexDirection:'row'}}>
                    <Text>Repeat Every Week</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text>Repeat Until</Text>
                </View>
            </View>
        </View>

        <View style={{width:'100%'}}>
                <View style={editClassStyles.line}></View>
        </View>

        {/*date picker */}

        <View style={editClassStyles.dateContainer}>
            <DatePickerIOS 
                date={new Date()}
            />
        </View>

          {/* Choose Mark Type */}

        <View style={editClassStyles.classTypeContainer}>
            <View style={editClassStyles.classTypeNameBox}>
                <Text>Type of Class</Text>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <Text style={{color:select, fontSize:25}} 
                    onPress={()=>{
                        setSelect('black')
                        setSelect1('grey')
                        setSelect2('grey')
                        }}>Lecture</Text>
                    <Text style={{color:select1, fontSize:25}} 
                    onPress={()=>{
                        setSelect1('black')
                        setSelect('grey')
                        setSelect2('grey')
                        }}>Lab</Text>
                        
                    <Text style={{color:select2, fontSize:25}} 
                    onPress={()=>{
                        setSelect2('black')
                        setSelect1('grey')
                        setSelect('grey')
                        }}>Other</Text>
                </View>
            </View>
        </View>

        <View style={{width:'45%', left:38, top:10}}> 
            <View style={editClassStyles.solidLine}></View>  
        </View>

        {/* Choose class time range */}

        <View style={editClassStyles.rangeContainer}>
            <View style={editClassStyles.rangeBox}>
                <View style={{flex:0.8,flexDirection:'row', justifyContent:'space-between'}}>
                    <View>
                        <Text>Start Time</Text>
                        <Text style={{fontSize:20}}>1:00 PM</Text>
                    </View>
                    <View>
                        <Text>End Time</Text>
                        <Text style={{fontSize:20}}>2:00 PM</Text>
                    </View>
                </View>
            </View>
        </View>

        <View style={{width:'64%', left:38, top:10}}> 
            <View style={editClassStyles.solidLine}></View>  
        </View>

        {/* Edit location */}
        <View style={editClassStyles.locationContainer}>
            <View style={editClassStyles.locationBox}>
                <Text style={{marginBottom:5}}>Location</Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <TextInput
                        placeholder="Burnaby"
                        style={{fontSize:25, marginRight:15}}>
                    </TextInput>
                    <Text style={{color:'grey', top:3}}>Tap to Edit</Text>
                </View>
            </View>
        </View>

        <View style={{width:'45%', left:38, top:10}}> 
            <View style={editClassStyles.solidLine}></View>  
        </View>

        {/* Back and done buttons */}
        <View style={{flex:0.1,flexDirection:'row', justifyContent:'center', top:30}}>
           <BackDone />
        </View>                
    </View>
  );
};
export default EditClass;
