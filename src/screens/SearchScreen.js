import React , { Component } from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import StokList from '../components/StokList'

class SearchScreen extends Component{
  // someMethod() = {
  //   console.log('blabla');
  // }

  render(){
    return(
      <View>
        <SearchBar
          lightTheme
          // onChangeText={someMethod}
          // onClearText={someMethod}
          placeholder='Kodu yazın...' />
          <StokList />
      </View>
    );
  }
}

export default SearchScreen;
