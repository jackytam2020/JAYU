import React,{useState,useEffect} from 'react';
import {View,Text, Button, TextInput, ImageBackground, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import postStyle from '../../styles/classBoard/postStyle';
import FooterBar from '../../comps/footerBar';
import normalize from 'react-native-normalize'
import CommentBox from '../classBoard/commentsBox';
import axios from 'axios';

function Post(props){
    const [upvotes, setUpvotes] = useState(0);
    const [replieUpVotes, setReplieUpVotes] = useState(0);
    const [RepliesValue, setRepliesValue] = useState("");
    const [replies, setReplies] = useState([]);
    const [likes,setLikes] = useState(0);


    // when comp loads, read comments
    useEffect(()=>{
        ReadComments();
    },[]);



    var id = props.navigation.getParam("id");
    var comment = "";

    var date, am_pm, hour, minutes;

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

    var user = props.navigation.getParam("user");

    

// create new comments 
const CreateComments = async()=>{
    //fetch db to create users
    console.log("comment created")
    var obj = {
        key :"comments_create",
        data:{
            comment:comment,
            post_id:id,
            hour:hour,
            minutes:minutes,
            am_pm:am_pm,
        }
    }
    var r = await axios.post('http://localhost:3001/post', obj);
    console.log("Create", r.data);
    ReadComments();
    
}

const ReadComments = async()=>{

    var obj = {
        key:"comments_read",
        data:{
            post_id:id
        }
    }

    var r = await axios.post('http://localhost:3001/post', obj);
   
    var dbusers = JSON.parse(r.data.body);
    console.log("Read", dbusers);
    setReplies(dbusers.data); 
}


  return (
      <SafeAreaView style={[{backgroundColor:props.navigation.getParam("course_bg")},postStyle.container]}>
        
        <View style={postStyle.navBar}>
            <TouchableOpacity style={{position:'relative', width:"20%"}}
                onPress={()=>{
                    props.navigation.goBack()
             }}>
                <Text style={{fontSize:20, marginLeft:20, color:'#007AFF'}}>Back</Text>
            </TouchableOpacity>
        </View>

        {/* The Post */}
        <View style={postStyle.post}>
            <View style={postStyle.subject}>
                <View style={postStyle.leftSubject}>
                    <Text style={{fontSize: 25, color:props.navigation.getParam("course_color")}}>{props.navigation.getParam("course_symbol")}</Text>
                    <View style={{paddingLeft:10}}>  
                        <Text style={{color:props.navigation.getParam("course_color")}}>{props.navigation.getParam("course")}</Text>
                        <Text style={{fontSize:10, color:'grey'}}>{props.navigation.getParam("time")} by {user}</Text>
                    </View>  
                </View>
                <View style={postStyle.rightSubject}>
                    <Text>{upvotes}</Text>
                    <Text style={{fontSize:8, color:'grey'}}>upvotes</Text>
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
                    onChangeText={(text) => {comment = text}}
                    defaultValue={"Type your answer"}
                    multiline={true}
                    style={{width:'80%',left:10, color:'grey'}}
            
                />
                <Button 
                    title={'Send'}
                    onPress={()=>{
                        CreateComments();
                    }}
                />
            </View>
        </View>

        {/* Replies section */}
        <View style={postStyle.repliesContainer}>
            <ScrollView>
            {  
                replies.map((obj,i)=>{
                    return <CommentBox
                    key={i}
                    id={obj.id}
                    comment={obj.comment}
                    hour={obj.hour}
                    minutes={obj.minutes}
                    am_pm={obj.am_pm}
                    />
                })
                
            }
            </ScrollView>

        </View>

        <View style={{height:'10%', width:'100%', position:'absolute', bottom:0}}>
            <FooterBar/>
          </View>
       
      </SafeAreaView>
    )
  }
export default Post;