import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import User from './containers/User';
import Repos from './containers/Repos';

export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
          <User />
          <Repos />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  }
});