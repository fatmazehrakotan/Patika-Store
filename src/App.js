import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text, 
  StyleSheet,
} from 'react-native';
import SearchBar from './compenents/SearchBar';
import StoreCard from './compenents/StoreCard';

import store_data from './store_data.json';

function App (){
  const renderItem = ({item}) => <StoreCard product ={item}/>;

 return (
  <SafeAreaView style = {styles.container}>
    <Text style={styles.hearderText}>PATIKA STORE</Text>
    <SearchBar/>
    <FlatList
    data={store_data} 
    renderItem={renderItem}
    numColumns={2}/> 
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:15,
  },
  
  hearderText:{
    fontSize: 38,
    fontWeight:'bold',
    color:'purple',
    paddingLeft: 10,
  }
})

export default App;

