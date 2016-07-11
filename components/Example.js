import React, { Component } from 'react';
import {
  LayoutAnimation,
  Animated,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Example extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size: new Animated.Value(80),
      Radius: new Animated.Value(40)
    }
  }

  componentWillMount() {
    const { size, Radius } = this.state

    const number = 200

    Animated.timing(
      size, {
        toValue: number,
      }
    ).start()

    Animated.timing(
      Radius, {
        toValue: size.interpolate({
          inputRange: [80, number], //not linear ?
          outputRange: [40, number / 2]
        })
      }
    ).start()
  }

  render() {
    const { size, Radius } = this.state
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.circle, {
            height: size,
            width: size,
            borderRadius: size
          }]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }, circle: {
    backgroundColor: 'skyblue',
  }
});
