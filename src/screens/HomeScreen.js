'use strict';

import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text> HomeScreen</Text>
      </View>
    );
  }


}
