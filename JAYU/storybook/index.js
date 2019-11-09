import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

<<<<<<< HEAD
=======
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

>>>>>>> 708294578c919e5dba89e2b18abce7a1ee3b3d7c
//import './rn-addons';

// import stories
configure(() => {
 // require('./stories');
 require('../comps/jayuStory');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla write your app name here.
// If you use Expo you can safely remove this line.
//AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);
<<<<<<< HEAD

export default StorybookUIRoot;
=======
const AppNavigator = createStackNavigator({ 
    HomeScreen: { screen: StorybookUIRoot },
    }
);
  
  const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
>>>>>>> 708294578c919e5dba89e2b18abce7a1ee3b3d7c
