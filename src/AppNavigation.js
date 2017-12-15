import React, { Component } from 'react';
import { StackNavigator,DrawerNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import{ Animated, Easing , Text} from 'react-native';
// import navigateTo from './actions/navigateTo';
import AuthScreen from './screens/AuthScreen';
import SearchScreen from './screens/SearchScreen';
import SepetScreen from './screens/SepetScreen';
import CariHesapScreen from './screens/CariHesapScreen';
import DrawerContainer from './components/DrawerContainer'
// import React from 'react'
// import { Text, Animated, Easing } from 'react-native'
// import { StackNavigator, DrawerNavigator } from 'react-navigation'
// import LoginScreen from '../Containers/LoginScreen'
// import SignupScreen from '../Containers/SignupScreen'
// import ForgottenPasswordScreen from '../Containers/ForgottenPasswordScreen'
// import Screen1 from '../Containers/Screen1'
// import Screen2 from '../Containers/Screen2'
// import Screen3 from '../Containers/Screen3'
// import DrawerContainer from '../Containers/DrawerContainer'

// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

// drawer stack
const DrawerStack = DrawerNavigator({
  Search: { screen: SearchScreen },
  Sepet: { screen: SepetScreen },
  CariHesap: { screen: CariHesapScreen },
}, {
  gesturesEnabled: false,
  contentComponent: (props) => <DrawerContainer {...props} />
})

const drawerButton = (navigation) =>
  <Text
    style={{padding: 5, color: 'white'}}
    onPress={() => navigation.navigate('DrawerToggle')}>Menu</Text>


const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#4C3E54'},
    title: 'Canlı Otomotiv',
    headerTintColor: 'white',
    gesturesEnabled: false,
    headerLeft: drawerButton(navigation)
  })
})

// login stack
const LoginStack = StackNavigator({
  loginScreen: { screen: AuthScreen }
}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {backgroundColor: '#E73536'},
    title: 'You are not logged in',
    headerTintColor: 'white'
  }
})

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  //initialRouteName: 'loginStack',
  transitionConfig: noTransitionConfig
})

export default PrimaryNav
