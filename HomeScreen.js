import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends Component
{
  static navigationOptions = {
    title: 'HomeScreen'
  };

  render()
  {
    const {navigate} = this.props.navigation;

    return (
      <View>
          <Text>HomeScreen</Text>
          <Button
            title="Go to AnotherScreen"
            onPress={ () => this.props.navigation.navigate('Another') }
          />
      </View>
    );
  }
}

export default (HomeScreen);