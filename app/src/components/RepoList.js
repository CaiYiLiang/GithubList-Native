import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import _ from 'lodash';

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
                      <View>
                      <Text>{item.name}</Text> 
                      <Text>{item.description}</Text> 
                      </View>
                      }
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

