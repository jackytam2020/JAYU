import React, {useState, useEffect} from 'react';
import SetUpStyle from '../../styles/setup/SetUpStyle'
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  AsyncStorage
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import axios from 'axios';

var username = "";

function SetUp(props){

  const [BlueLight, setBlueLight] = useState("off");
  const [BlueLight1, setBlueLight1] = useState("off");
  const [BlueLight2, setBlueLight2] = useState("off");
  const [BlueLight3, setBlueLight3] = useState("off");
  const [BlueLight4, setBlueLight4] = useState("off");
  const [colorTerm1, setColorTerm1] = useState(SetUpStyle.optionbuttonOff);
  const [colorTerm2, setColorTerm2] = useState(SetUpStyle.optionbuttonOff);
  const [colorTerm3, setColorTerm3] = useState(SetUpStyle.optionbuttonOff);
  const [colorTerm4, setColorTerm4] = useState(SetUpStyle.optionbuttonOff);

  const [GreenLight, setGreenLight] = useState("off");
  const [GreenLightA, setGreenLightA] = useState("off");
  const [GreenLightB, setGreenLightB] = useState("off");
  const [GreenLightC, setGreenLightC] = useState("off");
  const [GreenLightD, setGreenLightD] = useState("off");
  const [colorSetA, setColorSetA] = useState(SetUpStyle.optionbuttonOff);
  const [colorSetB, setColorSetB] = useState(SetUpStyle.optionbuttonOff);
  const [colorSetC, setColorSetC] = useState(SetUpStyle.optionbuttonOff);
  const [colorSetD, setColorSetD] = useState(SetUpStyle.optionbuttonOff);
  const [users, setUsers] = useState([]);



const [nextColor, setNextColor] = useState(SetUpStyle.NextButtonOff);

    const CreateUser = async()=>{
      //fetch db to create users
      console.log("username", username);
      var obj = {
          key :"users_create",
          data:{
            username:username
          }
      }
      var r = await axios.post('http://localhost:3001/post', obj);
      var dbusers = JSON.parse(r.data.body);
      console.log(dbusers);
      await AsyncStorage.setItem("user", JSON.stringify(dbusers.data[0]));
      console.log("db users",dbusers);
      //ReadUsers();
    }


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
            <TextInput title={"Username"} placeholder={"tap to add Name"} style={SetUpStyle.NameForm}
            onChangeText={(t)=>{
              username = t;
            }}
            />
          </View>
          {/* Questions 2*/}
          <View style={SetUpStyle.question2}>
            <Text style={SetUpStyle.question}>What is your Term?</Text>
            <Text style={SetUpStyle.questionDs}>if this is your first time in D3, select Term 1</Text>
            <View style={SetUpStyle.QuestionButtons}>
              <View style={SetUpStyle.FirstHalf}>
                <TouchableOpacity style={colorTerm1}
                onPress={()=>{
                  if(BlueLight1 == 'off'){
                    setBlueLight('on')
                    setBlueLight1('on')
                    setBlueLight2('off')
                    setBlueLight3('off')
                    setBlueLight4('off')
                    setColorTerm1(SetUpStyle.optionbuttonOnTerm)
                    setColorTerm2(SetUpStyle.optionbuttonOff)
                    setColorTerm3(SetUpStyle.optionbuttonOff)
                    setColorTerm4(SetUpStyle.optionbuttonOff)
                  }
                }}>
                  <Text style={SetUpStyle.option}>Term 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={colorTerm2}
                onPress={()=>{
                  if(BlueLight2 == 'off'){
                    setBlueLight('on')
                    setBlueLight2('on')
                    setBlueLight1('off')
                    setBlueLight3('off')
                    setBlueLight4('off')
                    setColorTerm2(SetUpStyle.optionbuttonOnTerm)
                    setColorTerm1(SetUpStyle.optionbuttonOff)
                    setColorTerm3(SetUpStyle.optionbuttonOff)
                    setColorTerm4(SetUpStyle.optionbuttonOff)
                  }
                }}>
                  <Text style={SetUpStyle.option}>Term 2</Text>
                </TouchableOpacity>
              </View>
              <View style={SetUpStyle.SecondHalf}>
              <TouchableOpacity style={colorTerm3}
                onPress={()=>{
                  if(BlueLight3 == 'off'){
                    setBlueLight('on')
                    setBlueLight3('on')
                    setBlueLight1('off')
                    setBlueLight2('off')
                    setBlueLight4('off')
                    setColorTerm3(SetUpStyle.optionbuttonOnTerm)
                    setColorTerm1(SetUpStyle.optionbuttonOff)
                    setColorTerm2(SetUpStyle.optionbuttonOff)
                    setColorTerm4(SetUpStyle.optionbuttonOff)
                  }
                }}>
                  <Text style={SetUpStyle.option}>Term 3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={colorTerm4}
                onPress={()=>{
                  if(BlueLight4 == 'off'){
                    setBlueLight('on')
                    setBlueLight4('on')
                    setBlueLight1('off')
                    setBlueLight2('off')
                    setBlueLight3('off')
                    setColorTerm4(SetUpStyle.optionbuttonOnTerm)
                    setColorTerm1(SetUpStyle.optionbuttonOff)
                    setColorTerm2(SetUpStyle.optionbuttonOff)
                    setColorTerm3(SetUpStyle.optionbuttonOff)
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
                  if(GreenLightA == 'off'){
                    setGreenLight('on')
                    setGreenLightA('on')
                    setGreenLightB('off')
                    setGreenLightC('off')
                    setGreenLightD('off')
                    setColorSetA(SetUpStyle.optionbuttonOnSet)
                    setColorSetB(SetUpStyle.optionbuttonOff)
                    setColorSetC(SetUpStyle.optionbuttonOff)
                    setColorSetD(SetUpStyle.optionbuttonOff)
                  }
                }}>
                  <Text style={SetUpStyle.option}>Set A</Text>
                </TouchableOpacity>
                <TouchableOpacity style={colorSetB}
                onPress={()=>{
                  if(GreenLightB == 'off'){
                    setGreenLight('on')
                    setGreenLightB('on')
                    setGreenLightA('off')
                    setGreenLightC('off')
                    setGreenLightD('off')
                    setColorSetB(SetUpStyle.optionbuttonOnSet)
                    setColorSetA(SetUpStyle.optionbuttonOff)
                    setColorSetC(SetUpStyle.optionbuttonOff)
                    setColorSetD(SetUpStyle.optionbuttonOff)
                  }
                }}>
                  <Text style={SetUpStyle.option}>Set B</Text>
                </TouchableOpacity>
              </View>
              <View style={SetUpStyle.SecondHalf}>
              <TouchableOpacity style={colorSetC}
                onPress={()=>{
                  if(GreenLightC == 'off'){
                    setGreenLight('on')
                    setGreenLightC('on')
                    setGreenLightA('off')
                    setGreenLightB('off')
                    setGreenLightD('off')
                    setColorSetC(SetUpStyle.optionbuttonOnSet)
                    setColorSetB(SetUpStyle.optionbuttonOff)
                    setColorSetA(SetUpStyle.optionbuttonOff)
                    setColorSetD(SetUpStyle.optionbuttonOff)
                  }
                }}>
                  <Text style={SetUpStyle.option}>Set C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={colorSetD}
                onPress={()=>{
                  if(GreenLightD == 'off'){
                    setGreenLight('on')
                    setGreenLightD('on')
                    setGreenLightA('off')
                    setGreenLightB('off')
                    setGreenLightC('off')
                    setColorSetD(SetUpStyle.optionbuttonOnSet)
                    setColorSetB(SetUpStyle.optionbuttonOff)
                    setColorSetC(SetUpStyle.optionbuttonOff)
                    setColorSetA(SetUpStyle.optionbuttonOff)
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
                onPress={async ()=>{

                  await CreateUser();
                  props.navigation.navigate('Passcode');
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