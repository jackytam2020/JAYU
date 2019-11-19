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
                        <Text style={postStyle.subjectname}>Design 2</Text>
                        <Text style={postStyle.timeandname}>9:15pm by Doris</Text>
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
                <Text style={postStyle.questionds}>What does Primary Text Frame do in inDesign? What does Primary Text Frame do in inDesign? What does Primary Text Frame do in inDesign?</Text>
            </View>
        </View>

        {/* Attachment area */}
        <View style={postStyle.attachmentBox}>
            {/* there should be no child elements here if user does not have an attachment */}
            <ImageBackground
            source={require('../../assets/BackgroundImages/original.png')} style={{width:'100%', height:normalize(300) ,resizeMode: 'contain'}}
            />
        </View>

<View style={postStyle.respondarea}>
        {/* Response box */}
        <View style={postStyle.responseContainer}>
            <View style={postStyle.responseBox}>
                <TextInput 
                    onChangeText={text => setValue(text)}
                    value={value}
                    multiline={true}
                    style={{width:'80%',left:10, color:'grey', fontFamily:"SFCompactRounded-Regular", fontSize:normalize(17)}}
                />
                <TouchableOpacity 
                style={postStyle.send}
                    onPress={()=>{
                        setRepliesValue(value)
                        setValue("Write an answer...")
                    }}
                >
                    <Text style={{fontFamily:"SFCompactRounded-Medium", fontSize:normalize(20)}}>􀈠</Text>
                </TouchableOpacity>
            </View>
        </View>

        {/* Replies section */}
        <View style={postStyle.repliesContainer}>
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
