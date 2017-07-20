import React, {Component} from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class Header extends Component {
    componentDidMount(){
         this.props.fetchUser("caiyiliang");
    }

     render() {
       let {user, onClick} = this.props;
       if(user){
           const { login, avatar_url, url, public_repos, created_at, updated_at } = user;
        return ( 
           <View style={styles.container}>
               <Image style={styles.img} source={{uri : avatar_url}} />

               <View style={styles.userInfo}>
                   <Text>{login}</Text>
                   <Text>Public Repos: {public_repos}</Text>
               </View>
           </View>
           ) 
       }
       return <Text> Loading... </Text>
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  img: {
      width:80,
      height:80,
      borderRadius:40,
      marginRight: 15
  },
  userInfo: {
     flexDirection: 'column',
     justifyContent: 'center',
     marginLeft: 15
  }

});

