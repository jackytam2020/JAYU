import React,{useState} from 'react';
import {View,Text, Button, TextInput, ImageBackground, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import postStyle from '../../styles/classBoard/postStyle';
import FooterBar from '../../comps/footerBar';
import normalize from 'react-native-normalize'

function Post(props){
    const [upvotes, setUpvotes] = useState(0);
    const [replieUpVotes, setReplieUpVotes] = useState(0);
    const [value, setValue] = useState("Write an answer...");
    const [RepliesValue, setRepliesValue] = useState("");
    const [replies, setReplies] = useState([]);

    var date, dayState, hour, minutes, seconds, fullTime;

    hour = new Date().getHours();
    minutes = new Date().getMinutes(); //Current Minutes
    
    if(hour<= 11){
        dayState= 'AM';
    }
    else {
        dayState= 'PM'
    }

    //convert to 12 hour formate
    if(hour > 12){
        hour = hour -12;
    }
    if(hour == 0){
        hour = 12;
    }
    if(minutes < 10){
        minutes = '0' + minutes.toString();
    }
    var time = hour+":"+minutes+" "+dayState;

  return (
      <View style={postStyle.main}>
          <SafeAreaView style={postStyle.safe}>
      <View style={postStyle.container}>
        <View style={postStyle.navBar}>
            <TouchableOpacity style={{position:'relative', width:"25%"}}
                onPress={()=>{
                    props.navigation.goBack()
             }}>
                <Text style={{fontSize:normalize(20), marginLeft:normalize(5), color:'#007AFF', fontFamily:"SFProDisplay-Medium"}}>􀆉 Back</Text>
            </TouchableOpacity>
        </View>

        {/* The Post */}
        <ScrollView style={postStyle.scrollview}>
        <View style={postStyle.post}>
            <View style={postStyle.subject}>
                <View style={postStyle.leftSubject}>
                    <View style={{height:normalize(35),width:normalize(35)}}>
                        <Text style={postStyle.DS}>􀈌</Text>
                    </View>
                    <View style={{paddingLeft:10}}>  
<<<<<<< HEAD
                        <Text>{props.navigation.getParam("course")}</Text>
                        <Text style={{fontSize:10, color:'grey'}}>9:15pm by Doris</Text>
=======
                        <Text style={postStyle.subjectname}>Design 2</Text>
                        <Text style={postStyle.timeandname}>9:15pm by Doris</Text>
>>>>>>> 0375c74d55cb11ee0362a10231404d60c51a2f4e
                    </View>  
                </View>
                <View style={postStyle.rightSubject}>
                    <Text style={postStyle.votenumber}>{upvotes}</Text>
                    <Text style={{fontSize:normalize(12), color:'grey', fontFamily:"SFCompactRounded-Regular"}}>reply</Text>
                </View>
            </View>
        </View>

        <View style={postStyle.line}></View>

        <View style={postStyle.questionBox}>
            <View style={postStyle.question}>
<<<<<<< HEAD
                <Text>{props.navigation.getParam("question")}</Text>
=======
                <Text style={postStyle.questionds}>What does Primary Text Frame do in inDesign? What does Primary Text Frame do in inDesign? What does Primary Text Frame do in inDesign?</Text>
>>>>>>> 0375c74d55cb11ee0362a10231404d60c51a2f4e
            </View>
        </View>

        {/* Attachment area */}
        <View style={postStyle.attachmentBox}>
            {/* there should be no child elements here if user does not have an attachment */}
<<<<<<< HEAD
            { /* <ImageBackground
            source={require('../../assets/BackgroundImages/original.png')} style={{width:'100%', height:200}}
=======
            <ImageBackground
            source={require('../../assets/BackgroundImages/original.png')} style={{width:'100%', height:normalize(300) ,resizeMode: 'contain'}}
>>>>>>> 0375c74d55cb11ee0362a10231404d60c51a2f4e
            />
            */}
        </View>

<View style={postStyle.respondarea}>
        {/* Response box */}
        <View style={postStyle.responseContainer}>
            <View style={postStyle.responseBox}>
                <TextInput 
                    clearTextOnFocus={true}
                    onChangeText={text => setValue(text)}
                    value={value}
                    multiline={true}
                    style={{width:'80%',left:10, color:'grey', fontFamily:"SFCompactRounded-Regular", fontSize:normalize(17)}}
                />
                <TouchableOpacity 
                style={postStyle.send}
                    onPress={()=>{
                        setRepliesValue(value)
<<<<<<< HEAD
                        var arr = replies;
                              arr.push(1);
                              arr = arr.map((o)=>{
                                  return o;
                              })
                              setValue('Type your answer')
                    
=======
                        setValue("Write an answer...")
>>>>>>> 0375c74d55cb11ee0362a10231404d60c51a2f4e
                    }}
                >
                    <Text style={{fontFamily:"SFCompactRounded-Medium", fontSize:normalize(20)}}>􀈠</Text>
                </TouchableOpacity>
            </View>
        </View>

        {/* Replies section */}
        <View style={postStyle.repliesContainer}>
<<<<<<< HEAD
            <ScrollView>
            {  
                replies.map((obj,i)=>{

                return <View style={postStyle.scrollBox}>
                        <View style={postStyle.repliesBox}>
                            <View style={postStyle.repliesTop}>
                                <View style={postStyle.repliesName}>
                                    <Text>Mitch</Text>
                                    <Text style={{fontSize:10, color:'grey'}}>{time}</Text>
                                </View>
                                <View style={[postStyle.repliesVotes]}>
                                    <Text style={{paddingRight:5}}>{replieUpVotes}</Text>
                                </View>
                            </View>
                            <View style={postStyle.repliesBot}>
                                <Text>{RepliesValue}</Text>
=======
                <View style={postStyle.scrollBox}>
                    <View style={postStyle.repliesBox}>
                        <View style={postStyle.repliesTop}>
                            <View style={postStyle.repliesName}>
                                <Text style={postStyle.personname}>Mitch</Text>
                                <Text style={{fontSize:normalize(12), color:'grey'}}>1:20 PM</Text>
                            </View>
                            <View style={[postStyle.repliesVotes]}>
                            <TouchableOpacity style={postStyle.up}>
                                    <Text style={{fontFamily:"SFCompactRounded-Regular", color:"#FF9500"}}>􀄥</Text>
                                </TouchableOpacity>
                                <Text style={{fontSize:normalize(17)}}>{replieUpVotes}</Text>
                                <TouchableOpacity style={postStyle.down}>
                                    <Text style={{fontFamily:"SFCompactRounded-Regular", color:"#4CD964"}}>􀄤</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={postStyle.repliesBot}>
                            <Text>{RepliesValue}</Text>
                        </View>
                    </View>

                    <View style={postStyle.repliesBox}>
                        <View style={postStyle.repliesTop}>
                            <View style={postStyle.repliesName}>
                                <Text style={postStyle.personname}>Sherman</Text>
                                <Text style={{fontSize:normalize(12), color:'grey'}}>1:20 PM</Text>
                            </View>
                            <View style={[postStyle.repliesVotes]}>
                            <TouchableOpacity style={postStyle.up}>
                                    <Text style={{fontFamily:"SFCompactRounded-Regular", color:"#FF9500"}}>􀄥</Text>
                                </TouchableOpacity>
                                <Text style={{fontSize:normalize(17)}}>{replieUpVotes}</Text>
                                <TouchableOpacity style={postStyle.down}>
                                    <Text style={{fontFamily:"SFCompactRounded-Regular", color:"#4CD964"}}>􀄤</Text>
                                </TouchableOpacity>
>>>>>>> 0375c74d55cb11ee0362a10231404d60c51a2f4e
                            </View>
                        </View>

<<<<<<< HEAD
                        </View>
                })
                
            }
            </ScrollView>
=======
                    <View style={postStyle.repliesBox}>
                        <View style={postStyle.repliesTop}>
                            <View style={postStyle.repliesName}>
                                <Text style={postStyle.personname}>Sherman</Text>
                                <Text style={{fontSize:normalize(12), color:'grey'}}>1:20 PM</Text>
                            </View>
                            <View style={[postStyle.repliesVotes]}>
                            <TouchableOpacity style={postStyle.up}>
                                    <Text style={{fontFamily:"SFCompactRounded-Regular", color:"#FF9500"}}>􀄥</Text>
                                </TouchableOpacity>
                                <Text style={{fontSize:normalize(17)}}>{replieUpVotes}</Text>
                                <TouchableOpacity style={postStyle.down}>
                                    <Text style={{fontFamily:"SFCompactRounded-Regular", color:"#4CD964"}}>􀄤</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={postStyle.repliesBot}>
                            <Text>{RepliesValue}</Text>
                        </View>
                    </View>

                    <View style={postStyle.repliesBox}>
                        <View style={postStyle.repliesTop}>
                            <View style={postStyle.repliesName}>
                                <Text style={postStyle.personname}>Sherman</Text>
                                <Text style={{fontSize:normalize(12), color:'grey'}}>1:20 PM</Text>
                            </View>
                            <View style={[postStyle.repliesVotes]}>
                            <TouchableOpacity style={postStyle.up}>
                                    <Text style={{fontFamily:"SFCompactRounded-Regular", color:"#FF9500"}}>􀄥</Text>
                                </TouchableOpacity>
                                <Text style={{fontSize:normalize(17)}}>{replieUpVotes}</Text>
                                <TouchableOpacity style={postStyle.down}>
                                    <Text style={{fontFamily:"SFCompactRounded-Regular", color:"#4CD964"}}>􀄤</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={postStyle.repliesBot}>
                            <Text>{RepliesValue}</Text>
                        </View>
                    </View>

                    <View style={postStyle.repliesBox}>
                        <View style={postStyle.repliesTop}>
                            <View style={postStyle.repliesName}>
                                <Text style={postStyle.personname}>Adamson</Text>
                                <Text style={{fontSize:normalize(12), color:'grey'}}>1:20 PM</Text>
                            </View>
                            <View style={[postStyle.repliesVotes]}>
                                <TouchableOpacity style={postStyle.up}>
                                    <Text style={{fontFamily:"SFCompactRounded-Regular", color:"#FF9500"}}>􀄥</Text>
                                </TouchableOpacity>
                                <Text style={{fontSize:normalize(17)}}>{replieUpVotes}</Text>
                                <TouchableOpacity style={postStyle.down}>
                                    <Text style={{fontFamily:"SFCompactRounded-Regular", color:"#4CD964"}}>􀄤</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={postStyle.repliesBot}>
                            <Text>{RepliesValue}</Text>
                        </View>
                    </View>
                </View>
>>>>>>> 0375c74d55cb11ee0362a10231404d60c51a2f4e

        </View>
        </View>
        </ScrollView>
        </View>
        <View style={{height:'10%', width:'100%', position:'absolute', bottom:0}}>
            <FooterBar/>
          </View>
      
      </SafeAreaView>
      </View>
    )
  }
export default Post;
