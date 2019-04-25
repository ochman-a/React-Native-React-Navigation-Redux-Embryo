import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class AnotherScreen extends Component
{
  static navigationOptions = {
      title: 'AnotherScreen'
  };

  render()
  {
    console.log(this.props);
    return (
      <View>
          <Text>Another Screen</Text>
          <Text>{ this.props.user }</Text>
      </View>
    );
  }
}

function mapStateToProps(state)
{
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(AnotherScreen);