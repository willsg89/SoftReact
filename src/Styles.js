'use strict';

export default class NavigationStyles {

  static getNavigatorStyle() {
    return {
      navBarTitleTextCentered: true,
      navBarTextColor: 'white',
      navBarBackgroundColor: '#0A9EC7',
      navBarButtonColor: 'white'
    };
  }

  static getNavigatorButtons() {
    return {
      leftButtons: [
          {
            id: 'sideMenu'
          }
        ]
      };
  }

  static getModalButtons() {
    return {
      leftButtons: [
          {
            id: 'cancel'
          }
        ]
      };
  }

}
