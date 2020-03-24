import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import PackageDetails from './pages/Dashboard/PackageDetails';
import NewProblems from './pages/Problems/NewProblems';
import ShowProblems from './pages/Problems/ShowProblems';
import ProblemView from './pages/Problems/ShowProblems/ProblemView';

import ConfirmDelivery from './pages/Dashboard/PackageDetails/ConfirmDelivery';

import Profile from './pages/Profile';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: SignIn,
        App: createBottomTabNavigator(
          {
            Dashboard: {
              screen: createStackNavigator(
                {
                  Dashboard,
                  PackageDetails,
                  NewProblems,
                  ShowProblems,
                  ProblemView,
                  ConfirmDelivery,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#FFF',
                    headerTitleStyle: {
                      fontSize: 16,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginLeft: 40,
                    },
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                // tabBarVisible: false,
                tabBarLabel: 'Dashboard',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="reorder" size={20} color={tintColor} />
                ),
              },
            },

            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#7D40E7',
              inactiveTintColor: '#999999',

              labelStyle: {
                fontSize: 14,
                marginBottom: 5,
              },
              style: {
                height: 50,
                backgroundColor: '#ffff',
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
