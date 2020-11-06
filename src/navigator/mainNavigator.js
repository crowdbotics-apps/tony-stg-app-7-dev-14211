import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen314059Navigator from '../features/BlankScreen314059/navigator';
import CopyOfBlankScreen013692Navigator from '../features/CopyOfBlankScreen013692/navigator';
import BlankScreen013505Navigator from '../features/BlankScreen013505/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen314059: { screen: BlankScreen314059Navigator },
CopyOfBlankScreen013692: { screen: CopyOfBlankScreen013692Navigator },
BlankScreen013505: { screen: BlankScreen013505Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
