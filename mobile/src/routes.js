import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from './pages/SignIn';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: SignIn,
        // App: createBottomTabNavigator(
        //   {
        //     Dashboard,
        //     New: {
        //       screen: createStackNavigator(
        //         {
        //           Help,
        //           AnswerOrder,
        //           NewOrder,
        //         },
        //         {
        //           defaultNavigationOptions: {
        //             headerLayoutPreset: 'center',
        //             headerShown: false,
        //             // headerTitle: () => null,
        //             headerTransparent: true,
        //             headerLeftContainerStyle: {
        //               marginLeft: 20,
        //             },
        //           },
        //         }
        //       ),
        //       navigationOptions: {
        //         tabBarVisible: true,
        //         tabBarLabel: 'Help',
        //       },
        //     },
        //   },
        //   {
        //     resetOnBlur: true,
        //     tabBarOptions: {
        //       keyboardHidesTabBar: true,
        //       labelStyle: {
        //         fontSize: 14,
        //         marginBottom: 10,
        //       },
        //       activeTintColor: '#EE4E62',
        //       inactiveTintColor: 'rgba(100,100, 100, 0.8)',
        //       style: {
        //         backgroundColor: '#FFF',
        //       },
        //     },
        //   }
        // ),
      },
      {
        resetOnBlur: true,
        tabBarOptions: {
          keyboardHidesTabBar: true,
          labelStyle: {
            fontSize: 14,
            marginBottom: 10,
          },
          activeTintColor: '#EE4E62',
          inactiveTintColor: 'rgba(100,100, 100, 0.8)',
          style: {
            backgroundColor: '#7D40E7',
          },
        },
      },

      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
