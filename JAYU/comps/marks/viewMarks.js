import React from 'react';
import {
    View, 
    SafeAreaView,
    Text, 
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import viewMarkStyles from '../../styles/marks/viewMarkStyles';
import FooterBar from '../footerBar';
import normalize from 'react-native-normalize';


function ViewMark(props){

    return(
        <SafeAreaView style={{width:"100%", height:"100%"}}>
            <View style={{width:"100%", height:"100%"}}>
            <View style={viewMarkStyles.header}>
                <Text style= {viewMarkStyles.back}
                    onPress={()=>{
                        props.navigation.navigate("HomeScreen")
                }}
                > 􀆉 Back</Text>
                <Text style= {viewMarkStyles.title}>Marks</Text>
            </View> 
        
            <ScrollView style ={viewMarkStyles.classesCont}>
                <TouchableOpacity style= {[{backgroundColor:"#FFEBD4"}, viewMarkStyles.classes]}
                    onPress={()=>{
                        props.navigation.navigate('Marks')
                    }}>
                    <Text style={[{color:"#FF9500"},viewMarkStyles.circle]}>􀘝</Text>
                    <Text style = {viewMarkStyles.classText}>Accounting for the Manager</Text>
                    
                </TouchableOpacity>


                <TouchableOpacity style= {[{backgroundColor:"#D6F0FC"}, viewMarkStyles.classes]}>
                    <Text style={[{color:"#00AEEF"},viewMarkStyles.circle]}>􀀣</Text>
                    <Text style = {viewMarkStyles.classText}>Advanced Photoshop</Text>
                </TouchableOpacity>

                <TouchableOpacity style= {[{backgroundColor:"#FFF5D7"},viewMarkStyles.classes]}>
                    <Text style={[{color:"#FFCF00"},viewMarkStyles.circle]}>􀏀</Text>
                    <Text style = {viewMarkStyles.classText}>Assets Design and Integration</Text>
                </TouchableOpacity>

                <TouchableOpacity style= {[{backgroundColor:"#DEF7E1"},viewMarkStyles.classes]}>
                    <Text style={[{color:"#4CD964"},viewMarkStyles.circle]}>􀒡</Text>
                    <Text style = {viewMarkStyles.classText}>Business Communications</Text>
                </TouchableOpacity>

                <TouchableOpacity style= {[{backgroundColor:"#FFDBD8"},viewMarkStyles.classes]}>
                    <Text style={[{color:"#FF3B30"},viewMarkStyles.circle]}>􀈌
                    </Text>
                    <Text style = {viewMarkStyles.classText}>Design 2</Text>
                </TouchableOpacity>

                <TouchableOpacity style= {[{backgroundColor:"#DEDEF7"},viewMarkStyles.classes]}>
                    <Text style={[{color:"#5856D6"},viewMarkStyles.circle]}>􀋤</Text>
                    <Text style = {viewMarkStyles.classText}>Professional Sales Skills</Text>
                </TouchableOpacity>

                <TouchableOpacity style= {[{backgroundColor:"#D0E1FF"},viewMarkStyles.classes]}>
                    <Text style={[{color:"#007AFF"},viewMarkStyles.circle]}>􀉮</Text>
                    <Text style = {viewMarkStyles.classText}>Project 2</Text>
                </TouchableOpacity>

                <TouchableOpacity style= {[{backgroundColor:"#F5EBE2"},viewMarkStyles.classes]}>
                    <Text style={[{color:"#C69C6D"},viewMarkStyles.circle]}>􀁛</Text>
                    <Text style = {viewMarkStyles.classText}>Web Development 3</Text>
                </TouchableOpacity>
            </ScrollView>
            </View>

            <View style={{width:'100%', height:'10%', position:'absolute', bottom:0}}>
                <FooterBar />
            </View>    
         </SafeAreaView>

    );

};

export default ViewMark;