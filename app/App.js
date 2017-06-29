import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';
import RootNavigator from './createNavigation';

class App extends Component {

  render() {
    const prefix = 'test://';

    return (
      <RootNavigator uriPrefix={prefix}/>
    )
  }
}

export default App;
