import React,{useState} from 'react';
import {View,Text, Button, TextInput, ImageBackground, ScrollView, TouchableOpacity} from 'react-native';
import postStyle from '../../styles/classBoard/postStyle';
import FooterBar from '../../comps/footerBar';

function Post(props){
    const [upvotes, setUpvotes] = useState(0);
    const [replieUpVotes, setReplieUpVotes] = useState(0);
    const [value, setValue] = useState("Type your answer");
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
      <View style={postStyle.container}>
        
        <View style={postStyle.navBar}>
            <TouchableOpacity style={{position:'relative', width:"20%"}}
                onPress={()=>{
                    props.navigation.goBack()
             }}>
                <Text style={{fontSize:20, marginLeft:20, color:'#007AFF'}}>back</Text>
            </TouchableOpacity>
        </View>

        {/* The Post */}
        <View style={postStyle.post}>
            <View style={postStyle.subject}>
                <View style={postStyle.leftSubject}>
                    <View style={{height:20,width:20, backgroundColor:"red", borderRadius:40}}></View>
                    <View style={{paddingLeft:10}}>  
                        <Text>{props.navigation.getParam("course")}</Text>
                        <Text style={{fontSize:10, color:'grey'}}>9:15pm by Doris</Text>
                    </View>  
                </View>
                <View style={postStyle.rightSubject}>
                    <Text>{upvotes}</Text>
                    <Text style={{fontSize:10, color:'grey'}}>upvotes</Text>
                </View>
            </View>
        </View>

        <View style={postStyle.line}></View>

        <View style={postStyle.questionBox}>
            <View style={postStyle.question}>
                <Text>{props.navigation.getParam("question")}</Text>
            </View>
        </View>

        {/* Attachment area */}
        <View style={postStyle.attachmentBox}>
            {/* there should be no child elements here if user does not have an attachment */}
            { /* <ImageBackground
            source={require('../../assets/BackgroundImages/original.png')} style={{width:'100%', height:200}}
            />
            */}
        </View>

        {/* Response box */}
        <View style={postStyle.responseContainer}>
            <View style={postStyle.responseBox}>
                <TextInput 
                    clearTextOnFocus={true}
                    onChangeText={text => setValue(text)}
                    value={value}
                    multiline={true}
                    style={{width:'80%',left:10, color:'grey'}}
                />
                <Button 
                    title={'Send'}
                    onPress={()=>{
                        setRepliesValue(value)
                        var arr = replies;
                              arr.push(1);
                              arr = arr.map((o)=>{
                                  return o;
                              })
                              setValue('Type your answer')
                    
                    }}
                />
            </View>
        </View>

        {/* Replies section */}
        <View style={postStyle.repliesContainer}>
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
                            </View>
                        </View>

                        </View>
                })
                
            }
            </ScrollView>

        </View>

        <View style={{height:'10%', width:'100%', position:'absolute', bottom:0}}>
            <FooterBar/>
          </View>
       
      </View>
    )
  }
export default Post;
