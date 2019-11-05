import React,{useState} from 'react';
import { View,Text,Button, TextInput, TouchableOpacity,DatePickerIOS} from 'react-native';
import CheckBox from 'react-native-check-box'
import adjustClassStyles from '../../styles/calendar/adjustingStyles';
import BackDone from '../../comps/calendar/backDoneButtons';



function AdjustingClass(){
    const [select, setSelect] = useState("grey")
    const [select1, setSelect1] = useState("grey")
    const [select2, setSelect2] = useState("grey")
    const [showPicker, setShowPicker] = useState(adjustClassStyles.hideContainer);
    const [check, SetCheck] = useState(false)
    const [check1, SetCheck1] = useState(false)

     /* if(check1 == true){
        setShowPicker(adjustClassStyles.dateContainer)
    } */
  return (
    <View style={adjustClassStyles.container}>
        
        <View style={adjustClassStyles.title}>
            <Text style={{fontSize:20}}>Business Communication</Text>
            <Text>for Thursday December 19</Text>
        </View>

        {/* recurring class checkboxes */}

        <View style={{ flex:0.08, flexDirection:'row', justifyContent:'center'}}>
            <View style={adjustClassStyles.checkBox}>
                <View style={{flexDirection:'row'}}>
                    <CheckBox 
                        isChecked={check}
                        checkedCheckBoxColor={"green"}
                        onClick={()=>{
                            SetCheck(true)
                            if(check1== true){
                                SetCheck(false)
                            }
                        }}
                    />
                    <Text>Repeat Every Week</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <CheckBox 
                        isChecked={check1}
                        checkedCheckBoxColor={"green"}   
                        onClick={()=>{
                            SetCheck1(true)
                            if(check1 == true){
                                SetCheck1(false)
                            }
                        }}
                        
                    />
                    <Text>Repeat Until</Text>
                </View>
            </View>
        </View>

        <View style={{width:'100%', marginBottom:30}}>
                <View style={adjustClassStyles.line}></View>
        </View>
            
          {/*date picker */}

        <View style={showPicker}>
            <DatePickerIOS 
                date={new Date()}
            />
        </View>

          {/* Choose Class Type */}
    
        <View style={adjustClassStyles.classTypeContainer}>
            <View style={adjustClassStyles.classTypeNameBox}>
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
            <View style={adjustClassStyles.solidLine}></View>  
        </View>

        {/* Choose class time range */}

        <View style={adjustClassStyles.rangeContainer}>
            <View style={adjustClassStyles.rangeBox}>
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
            <View style={adjustClassStyles.solidLine}></View>  
        </View>

        {/* Edit location */}
        <View style={adjustClassStyles.locationContainer}>
            <View style={adjustClassStyles.locationBox}>
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
            <View style={adjustClassStyles.solidLine}></View>  
        </View>

        {/* Back and done buttons */}
        <View style={{height:'10%', width:'100%',flexDirection:'row', justifyContent:'center', top:"85%", position:'absolute'}}>
           <BackDone />
        </View>                
    </View>
  );

  
};
export default AdjustingClass;
