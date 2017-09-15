'use strict';

import React, {Component} from 'react';
import {Text, TextInput, Button, Alert, View, ScrollView, StyleSheet} from 'react-native';
import { Navigation } from 'react-navigation';


export default class LoginScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mail: '',
      password: ''
    };
    // if you want to listen on navigator events, set this up
   }


  dismissModal() {
    Navigation.dismissModal({
      animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
    });
  }

  onButtonPress () {
    Alert.alert('Executou login - mail: "' + this.state.mail +
                '", senha: "' + this.state.password + '"');
  }

  render() {
    return (
      <ScrollView style={styles.scroll} >
          <TextInput
            style={styles.textField}
            onChangeText={(mail) => this.setState({mail})}
            value={this.state.mail}
            keyboardType="email-address"
            label={'Usuário'}
            highlightColor={'#00BCD4'} />
          <TextInput
            style={styles.textField}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            label={'Senha'}
            secureTextEntry={true}
            highlightColor={'#00BCD4'} />
          <Button
              onPress={() => this.onButtonPress()}
              title="ENTRAR"
              color="#841584"
            />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textField: {
    backgroundColor: "transparent"
  },
  scroll : {
    backgroundColor : "white",
    padding: 10
  }
});
