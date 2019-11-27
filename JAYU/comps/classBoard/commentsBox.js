import React, {useState,useEffect} from 'react';
import {View,Text,Button, ScrollView, TouchableOpacity,AsyncStorage} from 'react-native';
import classBoardStyles from '../../styles/classBoard/classBoardStyles';
import postStyle from '../../styles/classBoard/postStyle';
import FooterBar from '../../comps/footerBar'
import axios from 'axios';


function CommentBox({answer1}){

    const [upvotes, setUpvotes] = useState(0);
    const [replieUpVotes, setReplieUpVotes] = useState(0);
    const [value, setValue] = useState("Write an answer...");
    const [RepliesValue, setRepliesValue] = useState("");
    const [replies, setReplies] = useState([]);
    const [likes,setLikes] = useState(0);

    var date, am_pm, hour, minutes, seconds, fullTime;

    hour = new Date().getHours();
    minutes = new Date().getMinutes(); //Current Minutes
    
    if(hour<= 11){
        am_pm= 'AM';
    }
    else {
        am_pm= 'PM'
    }

    //convert to 12 hour formate
    if(hour > 12){
        hour = hour -12;
    }
    if(hour == 0){
        hour = 12;
    }
    if(minutes < 10){
        minutes = 0 + minutes.toString();
    }
    var time = hour+":"+minutes+" "+am_pm;

  
    return (
        <View style={postStyle.scrollBox}>
                            <View style={postStyle.repliesBox}>
                                <View style={postStyle.repliesTop}>
                                    <View style={postStyle.repliesName}>
                                        <Text>Mitch</Text>
                                        <Text style={{fontSize:10, color:'grey'}}>{time}</Text>
                                    </View>
                                    
                                    <View style={[postStyle.repliesVotes]}>
                                        <Text>{answer1}</Text>
                                        <TouchableOpacity style={postStyle.down}
                                            onPress={()=>{
                                                setReplieUpVotes(replieUpVotes-1);
                                            }}
                                        >
                                            <Text style={{fontFamily:"SFCompactRounded-Regular", color:"#FF9500"}}>􀄥</Text>
                                        </TouchableOpacity>
                                        <Text style={{paddingRight:5}}>{replieUpVotes}</Text>
                                        <TouchableOpacity style={postStyle.up}
                                        onPress={()=>{
                                            setReplieUpVotes(replieUpVotes+1);
                                        }}
                                        >
                                            <Text style={{fontFamily:"SFCompactRounded-Regular", color:"#4CD964"}}>􀄤</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={postStyle.repliesBot}>
                                    <Text>{RepliesValue}</Text>
                                </View>
                            </View>

                        </View>
     
    )
};

export default CommentBox;