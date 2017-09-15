'use strict';

import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  Image
} from 'react-native';
import {Navigation} from 'react-navigation';
import NavigationStyles from '../Styles';

export default class Menu extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    selectedItem : "searchScreen"
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
            resizeMode={Image.resizeMode.cover}
            source={require('../../img/menu_header.jpg')}>
          <Image source={require('../../img/avatar.jpg')}
                 style={{borderRadius:50, marginTop:10, marginLeft:20}}/>
          <Text style={{color: '#ffffff',fontSize:20, paddingTop:10, paddingLeft:25}}>Nome do usuário</Text>
        </Image>
        <View style={{flex: 1, paddingTop:25}}>
          <View style={styles.item}>
            <Image resizeMode={Image.resizeMode.contain} style={{width:20, height:20}} source={require('../../img/ios7-search-strong.png')} />
            <TouchableOpacity style={{flex:1}} onPress={ this.onSearchPress.bind(this) }>
              <Text style={styles.button}>Pesquisar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <Image resizeMode={Image.resizeMode.contain} style={{width:20, height:20}} source={require('../../img/ios7-home.png')} />
            <TouchableOpacity style={{flex:1}} onPress={ this.onHomePress.bind(this) }>
              <Text style={styles.button}>Home / Cartões</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <Image resizeMode={Image.resizeMode.contain} style={{width:20, height:20}} source={require('../../img/levels.png')} />
            <TouchableOpacity style={{flex:1}} onPress={ this.onFormElementsPress.bind(this) }>
              <Text style={styles.button}>Elementos de formulário</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <Image resizeMode={Image.resizeMode.contain} style={{width:20, height:20}} source={require('../../img/ios7-person.png')} />
            <TouchableOpacity style={{flex:1}} onPress={ this.onLoginScreen.bind(this) }>
              <Text style={styles.button}>Entrar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <Image resizeMode={Image.resizeMode.contain} style={{width:20, height:20}} source={require('../../img/flash.png')} />
            <TouchableOpacity style={{flex:1}} onPress={ this.onRiskScreen.bind(this) }>
             <Text style={styles.button}>Risco / Quase acidente</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }

  onSearchPress() {
    this.press("searchScreen", "Pesquisar",  "com.engiegsrreact.SearchScreen");
  }

  onHomePress() {
    this.press("homeScreen", "Home / Cartões",  "com.engiegsrreact.HomeScreen");
  }

  onFormElementsPress() {
    this.press("formElementsScreen", "Elementos de formulário",  "com.engiegsrreact.FormElementsScreen");
  }

  onLoginScreen() {
    this.pressModal("loginScreen", "Entrar",  "com.engiegsrreact.LoginScreen");
  }

  onRiskScreen() {
    this.press("riskScreen", "Risco / Quase acidente",  "com.engiegsrreact.RiskScreen");
  }

  pressModal(item, title, screen) {
    this._toggleDrawer();
    this.props.navigator.showModal({
      title: title,
      animationType: 'slide-up',
      screen: screen,
      navigatorStyle: NavigationStyles.getNavigatorStyle(),
      navigatorButtons: NavigationStyles.getModalButtons()
    });
  }

  press(item, title, screen) {
    this._toggleDrawer();
    if (this.state.selectedItem == item) {
      return;
    }
    this.setState({selectedItem : item});
    this.props.navigator.resetTo({
      title: title,
      screen: screen,
      navigatorStyle: NavigationStyles.getNavigatorStyle(),
      navigatorButtons: NavigationStyles.getNavigatorButtons()
    });
  }

  _toggleDrawer() {
    this.props.navigator.toggleDrawer({
      to: 'closed',
      side: 'left',
      animated: true
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  item: {
    flexDirection: "row"  ,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 25
  },
  button: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 10,
    marginLeft:25,
    marginTop:10,
    color: '#656565'
  }
});
