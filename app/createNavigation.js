import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  Welcome,
  Booting,
  Signup,
  Login
} from './Scenes';


class Home extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>Main scene</Text>
      </View>
    )
  }
}

const RegisterNavigation = StackNavigator({
  welcome: { screen: Welcome },
  signup: { screen: Signup },
  login: { screen: Login }
});

const RootNavigator = TabNavigator({
  home: { screen: Home, path: 'home' },
  register: {
    screen: RegisterNavigation,
    path: 'register'
  }
})


export default RootNavigator;
