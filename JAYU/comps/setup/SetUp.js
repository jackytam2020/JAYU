import React, {useState} from 'react';
import SetUpStyle from '../../styles/setup/SetUpStyle'
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

function SetUp(props){

  const [BlueLight, setBlueLight] = useState("off");
  const [colorTerm1, setColorTerm1] = useState(SetUpStyle.optionbuttonOff);
  const [colorTerm2, setColorTerm2] = useState(SetUpStyle.optionbuttonOff);
  const [colorTerm3, setColorTerm3] = useState(SetUpStyle.optionbuttonOff);
  const [colorTerm4, setColorTerm4] = useState(SetUpStyle.optionbuttonOff);

  const [GreenLight, setGreenLight] = useState("off");
  const [colorSetA, setColorSetA] = useState(SetUpStyle.optionbuttonOff);
  const [colorSetB, setColorSetB] = useState(SetUpStyle.optionbuttonOff);
  const [colorSetC, setColorSetC] = useState(SetUpStyle.optionbuttonOff);
  const [colorSetD, setColorSetD] = useState(SetUpStyle.optionbuttonOff);

const [nextColor, setNextColor] = useState(SetUpStyle.NextButtonOff);

    return(
        <View style={SetUpStyle.app}>
        <SafeAreaView>
          {/* Nav Bar */}
          <View style={SetUpStyle.navi}>
            <TouchableOpacity
              onPress={()=>{
                props.navigation.goBack()
                }}
            >
              <Text style={SetUpStyle.back}><Text style={SetUpStyle.backarrow}> 􀆉</Text> Back</Text>
            </TouchableOpacity>
              <Text style={SetUpStyle.navTitle}>Set Up</Text>
          </View>
          <ScrollView style={SetUpStyle.scrollview}>
          {/* Questions 1 */}
          <View style={SetUpStyle.question1}>
            <Text style={SetUpStyle.question}>What is your name?</Text>
            <Text style={SetUpStyle.questionDs}>your name will be display on ClassBoard</Text>
            <TextInput title={"Username"} defaultValue={"tap to add Name"} style={SetUpStyle.NameForm}/>
          </View>
          {/* Questions 2*/}
          <View style={SetUpStyle.question2}>
            <Text style={SetUpStyle.question}>What is your Term?</Text>
            <Text style={SetUpStyle.questionDs}>if this is your first time in D3, select Term 1</Text>
            <View style={SetUpStyle.QuestionButtons}>
              <View style={SetUpStyle.FirstHalf}>
                <TouchableOpacity style={colorTerm1}
                onPress={()=>{
                  if(BlueLight == 'off'){
                    setBlueLight('on')
                    setColorTerm1(SetUpStyle.optionbuttonOnTerm)
                    setColorTerm2(SetUpStyle.optionbuttonOff)
                    setColorTerm3(SetUpStyle.optionbuttonOff)
                    setColorTerm4(SetUpStyle.optionbuttonOff)
                  }
                  if(BlueLight == 'on'){
                    setBlueLight('off')
                    setColorTerm1(SetUpStyle.optionbuttonOff)
                  }
                }}>
                  <Text style={SetUpStyle.option}>Term 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={colorTerm2}
                onPress={()=>{
                  if(BlueLight == 'off'){
                    setBlueLight('on')
                    setColorTerm2(SetUpStyle.optionbuttonOnTerm)
                    setColorTerm1(SetUpStyle.optionbuttonOff)
                    setColorTerm3(SetUpStyle.optionbuttonOff)
                    setColorTerm4(SetUpStyle.optionbuttonOff)
                  }
                  if(BlueLight == 'on'){
                    setBlueLight('off')
                    setColorTerm2(SetUpStyle.optionbuttonOff)
                  }
                }}>
                  <Text style={SetUpStyle.option}>Term 2</Text>
                </TouchableOpacity>
              </View>
              <View style={SetUpStyle.SecondHalf}>
              <TouchableOpacity style={colorTerm3}
                onPress={()=>{
                  if(BlueLight == 'off'){
                    setBlueLight('on')
                    setColorTerm3(SetUpStyle.optionbuttonOnTerm)
                    setColorTerm1(SetUpStyle.optionbuttonOff)
                    setColorTerm2(SetUpStyle.optionbuttonOff)
                    setColorTerm4(SetUpStyle.optionbuttonOff)
                  }
                  if(BlueLight == 'on'){
                    setBlueLight('off')
                    setColorTerm3(SetUpStyle.optionbuttonOff)
                  }
                }}>
                  <Text style={SetUpStyle.option}>Term 3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={colorTerm4}
                onPress={()=>{
                  if(BlueLight == 'off'){
                    setBlueLight('on')
                    setColorTerm4(SetUpStyle.optionbuttonOnTerm)
                    setColorTerm1(SetUpStyle.optionbuttonOff)
                    setColorTerm2(SetUpStyle.optionbuttonOff)
                    setColorTerm3(SetUpStyle.optionbuttonOff)
                  }
                  if(BlueLight == 'on'){
                    setBlueLight('off')
                    setColorTerm4(SetUpStyle.optionbuttonOff)
                  }
                }}>
                  <Text style={SetUpStyle.option}>Term 4</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Question 3 */}
          <View style={SetUpStyle.question3}>
            <Text style={SetUpStyle.question}>What is your Set?</Text>
            <Text style={SetUpStyle.questionDs}>if you are unsure about your set, contact your Program Lead</Text>
            <View style={SetUpStyle.QuestionButtons}>
              <View style={SetUpStyle.FirstHalf}>
              <TouchableOpacity style={colorSetA}
                onPress={()=>{
                  if(GreenLight == 'off'){
                    setGreenLight('on')
                    setColorSetA(SetUpStyle.optionbuttonOnSet)
                    setColorSetB(SetUpStyle.optionbuttonOff)
                    setColorSetC(SetUpStyle.optionbuttonOff)
                    setColorSetD(SetUpStyle.optionbuttonOff)
                  }
                  if(GreenLight == 'on'){
                    setGreenLight('off')
                    setColorSetA(SetUpStyle.optionbuttonOff)
                  }
                }}>
                  <Text style={SetUpStyle.option}>Set A</Text>
                </TouchableOpacity>
                <TouchableOpacity style={colorSetB}
                onPress={()=>{
                  if(GreenLight == 'off'){
                    setGreenLight('on')
                    setColorSetB(SetUpStyle.optionbuttonOnSet)
                    setColorSetA(SetUpStyle.optionbuttonOff)
                    setColorSetC(SetUpStyle.optionbuttonOff)
                    setColorSetD(SetUpStyle.optionbuttonOff)
                  }
                  if(GreenLight == 'on'){
                    setGreenLight('off')
                    setColorSetB(SetUpStyle.optionbuttonOff)
                  }
                }}>
                  <Text style={SetUpStyle.option}>Set B</Text>
                </TouchableOpacity>
              </View>
              <View style={SetUpStyle.SecondHalf}>
              <TouchableOpacity style={colorSetC}
                onPress={()=>{
                  if(GreenLight == 'off'){
                    setGreenLight('on')
                    setColorSetC(SetUpStyle.optionbuttonOnSet)
                    setColorSetB(SetUpStyle.optionbuttonOff)
                    setColorSetA(SetUpStyle.optionbuttonOff)
                    setColorSetD(SetUpStyle.optionbuttonOff)
                  }
                  if(GreenLight == 'on'){
                    setGreenLight('off')
                    setColorSetC(SetUpStyle.optionbuttonOff)
                  }
                }}>
                  <Text style={SetUpStyle.option}>Set C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={colorSetD}
                onPress={()=>{
                  if(GreenLight == 'off'){
                    setGreenLight('on')
                    setColorSetD(SetUpStyle.optionbuttonOnSet)
                    setColorSetB(SetUpStyle.optionbuttonOff)
                    setColorSetC(SetUpStyle.optionbuttonOff)
                    setColorSetA(SetUpStyle.optionbuttonOff)
                  }
                  if(GreenLight == 'on'){
                    setGreenLight('off')
                    setColorSetD(SetUpStyle.optionbuttonOff)
                  }
                }}>
                  <Text style={SetUpStyle.option}>Set D</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Next button */}
          <View style={SetUpStyle.NextButtonView}>
            <TouchableOpacity style={nextColor}
                onPress={()=>{
                  props.navigation.navigate('Passcode')

                  if (GreenLight == 'on' && BlueLight == 'on'){
                    setNextColor(SetUpStyle.NextButtonOn)
                  }
                  if (GreenLight == 'off' && BlueLight == 'off'){
                    setNextColor(SetUpStyle.NextButtonOff)
                  }
                }}
            >
              <Text style={SetUpStyle.NextButtonText}>Next 􀆊</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
          </SafeAreaView>
        </View>
    )
}
export default SetUp;