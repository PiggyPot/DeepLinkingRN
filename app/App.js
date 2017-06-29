import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';
import RootNavigation from './createNavigation';

class App extends Component {

  render() {
    const prefix = 'test://';

    return (
      <RootNavigation uriPrefix={prefix}/>
    )
  }
}

export default App;
