'use strict';
import React, {Component} from 'react';
import {StyleSheet, Button, View, AppRegistry, Text} from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import NavigationStyles from './src/Styles';

import SearchScreen from './src/screens/SearchScreen';
import HomeScreen from './src/screens/HomeScreen';
import FormElementsScreen from './src/screens/FormElementsScreen';
import LoginScreen from './src/screens/LoginScreen';
import RiskScreen from './src/screens/RiskScreen';
import Menu from './src/screens/Menu';

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Primeira tela',
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Profile', {name: 'Lucy'})}
        title="Go to Lucy's profile"
      />
    );
  }
}

class MyProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'MyProfileScreen',
  }

  render() {
    return (
      <Text>ss</Text>
    );
  }
}


const ModalStack = StackNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Profile: {
    screen: MyProfileScreen,
  },
});

const SearchStack = StackNavigator({
  Home: {
    screen: SearchScreen,
  },
  Login: {
    screen: LoginScreen,
  },
});



const MyApp = DrawerNavigator({
  Modal : {
    screen: ModalStack,
    navigationOptions: {
      drawerLabel: 'Navagecao 1',
    }
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      drawerLabel: 'Tela de pesquisa ',
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'Tela Home',
    }
  },
  Form: {
    screen: FormElementsScreen,
    navigationOptions: {
      drawerLabel: 'Tela de Forms',
    }
  },

  Risk: {
    screen: RiskScreen,
    navigationOptions: {
      drawerLabel: 'Tela Risco',
    }
  }

});

AppRegistry.registerComponent('SoftReact', () => MyApp);
