'use strict';

import { Navigation } from 'react-navigation';
import SearchScreen from './SearchScreen';
import HomeScreen from './HomeScreen';
import FormElementsScreen from './FormElementsScreen';
import LoginScreen from './LoginScreen';
import RiskScreen from './RiskScreen';
import Menu from './Menu';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('com.engiegsrreact.SearchScreen', () => SearchScreen);
  Navigation.registerComponent('com.engiegsrreact.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('com.engiegsrreact.FormElementsScreen', () => FormElementsScreen);
  Navigation.registerComponent('com.engiegsrreact.LoginScreen', () => LoginScreen);
  Navigation.registerComponent('com.engiegsrreact.RiskScreen', () => RiskScreen);
  Navigation.registerComponent('com.engiegsrreact.Menu', () => Menu);
}
