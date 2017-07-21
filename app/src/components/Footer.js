import React, { Component } from 'react';
import { View, Button, StyleSheet, Alert,Text } from 'react-native';

export default class Footer extends Component {
     render() {
        let {onClick} = this.props;
        // console.warn(onClick);
        return ( 
           <View style={styles.container}>
               <View style={styles.allButton}>
                  <Button
                   onPress={ () => onClick("SHOW_ALL") }
                   title="ALL"
                   color="rgba(250, 10, 10, 0.45)"
                 />
               </View>
               <View style={styles.MyButton}>
                  <Button
                   onPress={ () => onClick("OWNER") }
                   title="MY"
                   color="rgba(250, 10, 10, 0.45)"
                 />
                </View>
                <View style={styles.ForkedButton}>
                <Button
                onPress={() => onClick("FORK") }
                title="FORK"
                color="rgba(250, 10, 10, 0.45)"
                />
                </View>
           </View>
           ) 
       }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  allButton: {
    flex:1,
  },
  MyButton: {
    flex:1,
  },
  ForkedButton: {
    flex:1,
  }
});

