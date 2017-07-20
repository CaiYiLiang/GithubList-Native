import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet, Linking } from 'react-native';
import _ from 'lodash';
import FootButton from '../containers/FootButton';

export default class RepoList extends Component {
       componentDidMount(){
         this.props.fetchGitRepos("caiyiliang");
       }

       render() {
         let {repos,filter} = this.props;
         if(repos){
            let reposSort = repos.map(repo => _.mapKeys(_.pick(repo,['id','name','fork','html_url','stargazers_count','description']),(value,key)=>key==='id'? 'key':key));
            let reposFilter = getVisibleRepos(reposSort,filter);
            return (
               <View>              
                <FlatList data={reposFilter}
                  renderItem={({item}) => 
                      <View style={styles.container} >
                        <Text style={styles.repoName} onPress={() => Linking.openURL(item.html_url)} >{item.name}</Text> 
                        <Text style={styles.repoDescription} >{item.description? item.description : 'No Description' }</Text> 
                        {item.stargazers_count>0 && <Text style={styles.repoLike}> {item.stargazers_count} Likes </Text>}
                        {item.fork && <Text style={styles.repoForked}> FORKED </Text>}
                      </View>}
                   />
               </View>
            )}
        return <Text></Text>
      }
}

 const getVisibleRepos = (repos, filter) => {
    switch (filter) {
     case 'SHOW_ALL':
       return repos
     case 'OWNER':
       return repos.filter(repo => !repo.fork )
     case 'FORK':
       return repos.filter(repo => repo.fork )
     default:
       throw new Error('Unknown filter: ' + filter)
  }
}

const styles = StyleSheet.create({
    container: {
       marginBottom:15
    },
    repoName: {
       textAlign: 'center',
       fontSize: 22,
       color:'#3c3c3c',
       textDecorationLine:'underline'
    },
    repoDescription: {
       textAlign: 'center',
       fontSize: 17,
    },
    repoLike: {
       textAlign: 'center',
       color:'lightcoral'
    },
    repoForked: {
       textAlign: 'center',
    }
})

