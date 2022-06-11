import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

const SearchBar = () => {
  return (
    <View>
      <TextInput style={styles.container} placeholder='Search...'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#eceff1',
    padding : 13,
    margin : 5,
    borderRadius : 10,
  },

  })
export default SearchBar;