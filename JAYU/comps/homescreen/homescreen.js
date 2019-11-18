
import React, {useState} from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import normalize from 'react-native-normalize';
import styles from '../../styles/homescreen/homescreenStyle';


function HomeScreen(props){
    const [expand, setExpand] = useState("expand")
    const [barHeight, setBarHeight] = useState(0.08)
    const [showItems, setShowItems] = useState(styles.hideItems)
  return (
        <ImageBackground source={require('../../assets/BackgroundImages/Homescreen_Purple.png')} style={{flex:1, justifyContent:'flex-end', width:"100.5%"}}>
            <View style={styles.home}>
               
               <View style={styles.greetingBox}>
                   <View style={styles.greetingRow}>
                       <Text style={{fontSize:normalize(30), color:'white', fontFamily:"SFProDisplay-Semibold"}}>Good morning Irvin</Text>
                       <Text style={{fontSize:normalize(20), color:'white', fontFamily:"SFProDisplay-Semibold", opacity: 0.7}}>so far, you're doing great!</Text>
                       <Text style={{fontSize:normalize(20), color:'white', fontFamily:"SFProDisplay-Semibold", opacity: 0.7}}>46% of today's progress</Text>
                       <Text style={{fontSize:normalize(20), color:'white', fontFamily:"SFProDisplay-Semibold", opacity: 0.7}}>20 tasks left</Text>
                   </View>
               </View>

               {/* Deadline bar */}
               <View style={{ flex:barHeight ,flexDirection:'row',justifyContent:'center', top:normalize(40)}}>
                   <View style={styles.deadlineRow}>
                       <View style={styles.deadlineTitle}>
                           <Text style={{fontSize:normalize(17), fontFamily:"SFProText-Medium"}}>coming up next</Text>
                           <Text style={{fontSize:normalize(10), color:'grey'}}
                           onPress={()=>{
                               if(expand == 'expand'){
                                setExpand('collapse')
                                setShowItems(styles.itemContainer);
                                setBarHeight(0.27)
                               }
                               if(expand == 'collapse'){
                                setExpand('expand')
                                setShowItems(styles.hideItems);
                                setBarHeight(0.08)
                            }
                           }}
                           >{expand}</Text>
                       </View>
                       <View style={showItems}>
                           <ScrollView style={{height:"25%"}}>
                            <View style={{flexDirection:"row", marginBottom:5}}>
                            <Text style={{color:'white' ,fontSize: normalize(10), fontFamily:"SFCompactRounded-Regular", marginTop:normalize(5)}}>􀀀     </Text>
                                <Text style={{color:'white' ,fontSize: normalize(20), fontFamily:"SFCompactRounded-Regular"}}>Design 2 exam in 1 week</Text>
                            </View>
                            <View style={{flexDirection:"row", marginBottom:5}}>
                            <Text style={{color:'white' ,fontSize: normalize(10), fontFamily:"SFCompactRounded-Regular", marginTop:normalize(5)}}>􀀀     </Text>
                                <Text style={{color:'white' ,fontSize: normalize(20), fontFamily:"SFCompactRounded-Regular"}}>Business Communication exam in 2 weeks</Text>
                            </View>
                            <View style={{flexDirection:"row", marginBottom:5}}>
                            <Text style={{color:'white' ,fontSize: normalize(10), fontFamily:"SFCompactRounded-Regular", marginTop:normalize(5)}}>􀀀     </Text>
                                <Text style={{color:'white' ,fontSize: normalize(20), fontFamily:"SFCompactRounded-Regular"}}>Project 2 weekly report due tomorrow</Text>
                            </View>
                            <View style={{flexDirection:"row", marginBottom:5}}>
                            <Text style={{color:'white' ,fontSize: normalize(10), fontFamily:"SFCompactRounded-Regular", marginTop:normalize(5)}}>􀀀     </Text>
                                <Text style={{color:'white' ,fontSize: normalize(20), fontFamily:"SFCompactRounded-Regular"}}>Sales Presentation due in 2 days</Text>
                            </View>
                            </ScrollView>
                       </View>
                   </View>
               </View>
            
            {/* Bottom Section for main modules */}

            <View style={styles.bottomContainer}>
                <View style={styles.bottom}>
                   
                    <View style={{flex:0.30}}>
                            <TouchableOpacity style={styles.boxItems}  
                                onPress={()=>{
                                    props.navigation.navigate('Schedule')
                                }}>
                                <View style={styles.boxRow}>
                                    <View style={{flex:0.3, alignItems:"center", justifyContent:"center"}}>
                                        <Text style={{fontFamily:"SFCompactRounded-Light", fontSize: normalize(45), color:"#404040"}}>􀉉</Text>
                                    </View>
                                    <View style={{flex:0.7}}>
                                        <Text style={{fontSize:normalize(20), fontFamily:"SFProDisplay-Medium", color:"#404040"}}>Calendar</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                    </View>   

                    <View style={{flex:0.30}}>
                    <TouchableOpacity style={styles.boxItems}  
                            onPress={()=>{
                                props.navigation.navigate('Homework')
                            }}>
                            <View style={styles.boxRow}>
                                    <View style={{flex:0.3, alignItems:"center", justifyContent:"center"}}>
                                        <Text style={{fontFamily:"SFCompactRounded-Light", fontSize: normalize(40), color:"#404040"}}>􀉆</Text>
                                    </View>
                                    <View style={{flex:0.7}}>
                                        <Text style={{fontSize:normalize(20), fontFamily:"SFProDisplay-Medium", color:"#404040"}}>Homework</Text>
                                    </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                     <View style={{flex:0.30}}>
                        <TouchableOpacity style={styles.boxItems}  
                                onPress={()=>{
                                    props.navigation.navigate('Classboard')
                                }}>
                                <View style={styles.boxRow}>
                                    <View style={{flex:0.3, alignItems:"center", justifyContent:"center"}}>
                                        <Text style={{fontFamily:"SFCompactRounded-Light", fontSize: normalize(45), color:"#404040"}}>􀉫</Text>
                                    </View>
                                    <View style={{flex:0.7}}>
                                        <Text style={{fontSize:normalize(20), fontFamily:"SFProDisplay-Medium", color:"#404040"}}>ClassBoard</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                    </View>  

                    <View style={{flex:0.30}}>
                    <TouchableOpacity style={styles.boxItems}  
                            onPress={()=>{
                                props.navigation.navigate('ViewMark')
                            }}>
                            <View style={styles.boxRow}>
                                    <View style={{flex:0.3, alignItems:"center", justifyContent:"center"}}>
                                        <Text style={{fontFamily:"SFCompactRounded-Light", fontSize: normalize(40), color:"#404040"}}>􀉞</Text>
                                    </View>
                                    <View style={{flex:0.7}}>
                                        <Text style={{fontSize:normalize(20), fontFamily:"SFProDisplay-Medium", color:"#404040"}}>View Mark</Text>
                                    </View>
                            </View>
                        </TouchableOpacity>
                    </View>  

                </View>        
            </View>     

            </View>
        </ImageBackground>
  )
}

export default HomeScreen;
