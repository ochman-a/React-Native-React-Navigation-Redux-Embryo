import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './HomeScreen';
import AnotherScreen from './AnotherScreen';
import reducer from './reducer';

const store = createStore(reducer);

const Stack = createStackNavigator(
  { 
    Home: {
      screen: HomeScreen
    },
    Another: {
      screen: AnotherScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(Stack);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


// https://github.com/relferreira/react-native-redux/tree/react-navigation