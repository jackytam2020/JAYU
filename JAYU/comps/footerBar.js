import React from 'react';
import { View,Text,Button} from 'react-native';
import footerStyles from '../styles/footerStyles'

function FooterBar(){
  return (
    <View style={footerStyles.container}>
        <Button 
            title="Calendar"
        />
        <Button 
            title="Homework"
        />
        <Button 
            title="Classboard"
        />
        <Button 
            title="Marks"
        />
    </View>
  );
};
export default FooterBar;
