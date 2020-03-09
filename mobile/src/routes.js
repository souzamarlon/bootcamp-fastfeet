import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: SignIn,
        App: createBottomTabNavigator(
          {
            Dashboard,
            New: {
              screen: createStackNavigator(
                {
                  Dashboard,
                },
                {
                  defaultNavigationOptions: {
                    headerLayoutPreset: 'center',
                    headerShown: false,
                    // headerTitle: () => null,
                    headerTransparent: true,
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarVisible: true,
                tabBarLabel: 'Perfil',
              },
            },
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
                backgroundColor: '#FFF',
              },
            },
          }
        ),
      },

      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
