import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

 export default class Signup extends Component {
  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.props.navigation.state, null, 2)}</Text>
        <Text>Signup Scene</Text>
      </View>
    );
  }
}
