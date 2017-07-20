import React, { Component } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';

export default class Footer extends Component { 
    _onPressButton() {
    Alert.alert(this.props.user)
  }
     render() {
        let {onClick} = this.props;
        return ( 
           <View style={styles.container}>
               <Button
                onPress={ this._onPressButton }
                title="All Repos"
               />
               <Button
                onPress={() =>  Alert.alert('You tapped the button!') }
                title="My Repos"
                color="#841584"
                />
                <Button
                onPress={() =>  Alert.alert('You tapped the button!') }
                title="Forked Repos"
                color="#841584"
                />
           </View>
           ) 
       }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

