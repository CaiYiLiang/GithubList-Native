import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import User from './containers/User';
import Repos from './containers/Repos';
import FootButton from './containers/FootButton';

export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
          <ScrollView>
            <User />
            <Repos />
          </ScrollView>
          <View>
            <FootButton />
          </View> 
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