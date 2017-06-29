import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class Booting extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>Booting Scene</Text>
      </View>
    );
  }
}
