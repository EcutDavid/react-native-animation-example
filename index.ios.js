import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Example from './components/Example'

class ReactNativeAnimation extends Component {
  render() {
    return (
      <Example />
    );
  }
}

AppRegistry.registerComponent('ReactNativeAnimation', () => ReactNativeAnimation);
