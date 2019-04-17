import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AnotherScreen extends Component
{
    static navigationOptions = {
        title: 'AnotherScreen'
      };

      render()
      {
          return (
            <View>
                <Text>Another Screen</Text>
            </View>
          );
      }
}

export default (AnotherScreen);