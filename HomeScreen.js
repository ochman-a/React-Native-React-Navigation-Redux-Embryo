import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { updateUser } from './reducer';
import { connect } from 'react-redux';

class HomeScreen extends Component
{
  static navigationOptions = {
    title: 'HomeScreen'
  };

  somethingToDo(navigate)
  {
    this.props.update("toto");
    navigate('Another');
  }

  render()
  {
    const {navigate} = this.props.navigation;

    return (
      <View>
          <Text>HomeScreen</Text>
          <Button
            title="Go to AnotherScreen"
            onPress={ () => this.somethingToDo(navigate) }
          />
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

function mapDispatchToProps(dispatch)
{
  return {
    update: (user) => {
      dispatch(updateUser(user))
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);