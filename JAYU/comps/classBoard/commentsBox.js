import React, {useState,useEffect} from 'react';
import {View,Text,Button, ScrollView, TouchableOpacity,AsyncStorage} from 'react-native';
import classBoardStyles from '../../styles/classBoard/classBoardStyles';
import postStyle from '../../styles/classBoard/postStyle';
import FooterBar from '../../comps/footerBar'
import axios from 'axios';


function CommentBox({comment,hour,minutes,am_pm}){

    const [upvotes, setUpvotes] = useState(0);
    const [replieUpVotes, setReplieUpVotes] = useState(0);
    const [value, setValue] = useState("Write an answer...");
    const [RepliesValue, setRepliesValue] = useState("");
    const [replies, setReplies] = useState([]);
    const [likes,setLikes] = useState(0);
    const [user, setUser] = useState({});

    const ReadUsers = async()=>{
        var u = await AsyncStorage.getItem("user");
        console.log(u);
        u = JSON.parse(u);
        setUser(u)
    }
    
     // when comp loads, read users
     useEffect(()=>{
        ReadUsers();
    },[]);

    var time = hour+":"+minutes+" "+am_pm;
  
    return (
        <View style={postStyle.scrollBox}>
                            <View style={postStyle.repliesBox}>
                                <View style={postStyle.repliesTop}>
                                    <View style={postStyle.repliesName}>
                                        <Text>{user.username || ""}</Text>
                                        <Text style={{fontSize:10, color:'grey'}}>{time}</Text>
                                    </View>
                                    
                                    <View style={[postStyle.repliesVotes]}>
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
                                    <Text>{comment}</Text>
                                </View>
                            </View>

                        </View>
     
    )
};

export default CommentBox;