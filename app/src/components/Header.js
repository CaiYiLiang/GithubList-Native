import React, {Component} from 'react';
import { View, Image, Text, StyleSheet, Linking } from 'react-native';

export default class Header extends Component {
    componentDidMount(){
         this.props.fetchUser("caiyiliang");
    }

     render() {
       let {user} = this.props;
       if(user){
           const { login, avatar_url, html_url, public_repos, created_at, updated_at } = user;
        return ( 
           <View style={styles.container}>
               <Image style={styles.img} source={{uri : avatar_url}} />

               <View style={styles.userInfo}>
                   <Text style={styles.userName} onPress={() => Linking.openURL(html_url)}>Github: {login}</Text>
                   <Text style={styles.userRepos} >Repos: {public_repos}</Text>
               </View>
           </View>
           ) 
       }
       return <Text style={styles.Loading}> Loading... </Text>
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom:15,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: 'rgba(250, 10, 10, 0.45)',
    borderBottomWidth: 2,
    
  },
  img: {
      width:80,
      height:80,
      borderRadius:40,
      marginRight: 15,
      marginBottom: 5,
      borderWidth: 0.5,
      borderColor: 'rgba(250, 10, 10, 0.45)'
  },
  userInfo: {
     flexDirection: 'column',
     justifyContent: 'center',
     marginLeft: 15
  },
  userName: {
      fontSize: 18,
      color: '#3c3c3c'
  },
  userRepos: {
      fontSize: 18,
      color: '#3c3c3c'
  },
  Loading: {
      textAlign: 'center',
      fontSize: 18,
      color: '#3c3c3c'
    }

});

