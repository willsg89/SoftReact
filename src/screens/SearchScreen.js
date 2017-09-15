'use strict';

import React, {Component} from 'react';
import {Text, View, Alert, Button} from 'react-native';
import NavigationStyles from '../Styles';

  import LoginScreen from './LoginScreen'

export default class SearchScreen extends Component {

  onButtonPress () {
    Alert.alert('Button has been pressed!');

    this.props.navigation.navigate('Login')


  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text >Screen1</Text>
        <Button
          onPress={() => this.onButtonPress()}
          title="Next view"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }

}
