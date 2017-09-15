'use strict';

class EngieGSRReact extends Component {
  render() {
    const menu = <Menu />;

    return (
      <SideMenu menu={menu}>
      <ContentView/>
      </SideMenu>
    );
  }
}



class ContentView extends Component {
  render() {
    const routes = [
      {view: 'tela1'},
      {view: 'tela2'}
    ];
    return (
      <View  style={{backgroundColor: 'green', flex: 1}}>

      <Navigator
            initialRoute={routes[0]}
            initialRouteStack={routes}
            renderScene=
                        {(route, navigator) =>    {
                          if (route.view == 'tela1') {
                            return   <V1 routes={routes} navigator={navigator} />
                          } else {
                            return   <V2 />
                          }
                        }
                      }
          navigationBar=
                      {
                        <Navigator.NavigationBar
                        routeMapper={{
                          LeftButton: (route, navigator, index, navState) =>
                          { return (<Text>Cancel</Text>); },
                          RightButton: (route, navigator, index, navState) =>
                          { return (<Text>Done</Text>); },
                          Title: (route, navigator, index, navState) =>
                          { return (<Text>Awesome Nav Bar</Text>); },
                        }}
                        style={{backgroundColor: 'gray',flex:1}}
                        />
                      }
          style={{padding: 5}}
    />

    </View>
  );
}
}

class ContentView2 extends Component {
render() {
  return (
    <View style={{backgroundColor: 'blue', flex: 1}} >
    <Text>
    Welcome to React Native!
    </Text>
    <Text >
    To get started, edit index.ios.js
    </Text>
    <Text>
    Press Cmd+R to reload,{'\n'}
    Cmd+Control+Z for dev menu
    </Text>
    </View>
  );
}
}

class V1 extends Component {

onButtonPress(navigator, routes) {
  Alert.alert('Button has been pressed!');
  navigator.push(routes[1]);
}

render() {
  return (
    <View style={{ flex:9, backgroundColor: 'yellow', flex: 1}} >
      <Text>
        tela {this.props.routes[0].view}
      </Text>

      <Button
        onPress={(e) => this.onButtonPress(this.props.navigator, this.props.routes)}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
}

class V2 extends Component {
render() {
  return (
    <View style={{backgroundColor: 'purple', flex: 1}} >
    <Text>
    tela 2
    </Text>
    </View>
  );
}
}

class Menu extends Component {
render() {
  return (
    <ScrollView >
    <View >
    <Image
    source={require('./app_logo.png')}/>
    <Text >Your name</Text>
    </View>
    <Text
    onPress={() => this.props.onItemSelected('About')} >
    About
    </Text>
    <Text
    onPress={() => this.props.onItemSelected('Contacts')} >
    Contacts
    </Text>
    </ScrollView>
  );
}
};

class Menu2 extends Component {
constructor() {
  super();
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  this.state = {
    dataSource: ds.cloneWithRows(['row 1', , 'row 2', 'row 2', 'row 2', 'row 2', 'row 2',
    'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2']),
  };
}

render() {
  return (
    <ListView
    style={{backgroundColor: 'red', flex: 1}}
    dataSource={this.state.dataSource}
    renderRow={(rowData) => <Text>{rowData}</Text>}
    />
  );
}
}
