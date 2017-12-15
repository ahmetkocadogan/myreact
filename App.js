import React from 'react';
import { Constants } from 'expo';
import { StyleSheet, Text, View,StatusBar,Platform,BackHandler } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
//import { AppWithNavigationState } from './src/AppWithNavigationState';
import ReduxNavigation from './src/ReduxNavigation';
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar barStyle='light-content' />
          <ReduxNavigation />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS ==='ios'? 0 : Constants.statusBarHeight
  },
});
