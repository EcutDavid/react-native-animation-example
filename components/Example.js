import React, { Component } from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class Example extends Component {
  constructor(props) {
    super(props)
    let sizeArray = []
    for (let i = 0; i < 30; i++) {
      sizeArray.push(Number.parseInt(Math.random() * 100) + 1)
    }
    this.state = {
      sizeArray
    }
  }

  componentWillMount() {
    LayoutAnimation.spring()
  }

  _onPress() {
    LayoutAnimation.spring()
    const { sizeArray } = this.state
    this.setState({ sizeArray: sizeArray.map(d =>
      Number.parseInt(Math.random() * 100) + 1 )})
  }

  render() {
    const { sizeArray } = this.state
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style ={styles.circleContainer}>
          {
            sizeArray.map((d, i) => (
              <View
                key = { i }
                style={[styles.circle, {
                  height: d,
                  width: d,
                  borderRadius: d / 2
                }]}
              />
            ))
          }
          </View>
          <TouchableOpacity onPress={() => this._onPress()}>
              <Text>Press me!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  circleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  circle: {
    backgroundColor: 'skyblue',
  }
});
