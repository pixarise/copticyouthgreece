import React, { Component } from 'react';
import {
  View,
  Text,
  AppRegistry,
  TouchableHighlight,
  ToolbarAndroid,
  StatusBar,
  Navigator,
  StyleSheet,
  Dimensions,
  BackAndroid,
  WebView,

} from 'react-native';

import Menu from './components/Menu.js'

const _menu = require('./_menu.js');
const deviceWidth = Dimensions.get('window').width; //full width
const deviceHeight = Dimensions.get('window').height; //full height

// Listen to back button on Android Device
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

const styles = StyleSheet.create({
  drawerScroll: {
    backgroundColor: '#ffffff',
    height: deviceHeight
  },
  drawerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    width: deviceWidth,
    height: 170
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  }
});

var toolbar = null;

var renderScene = function(route, navigationOperations, onComponentRef) {
  _navigator = navigationOperations;

  // if(drawer.ref) {
  //   drawer.close();
  // }

  if(route.name === 'welcome') {
    // default is home screen
    return (
      <View>
        <ToolbarAndroid
          style={{ backgroundColor: '#607D8B', height: 56 }}
          titleColor="#fff"
          subtitleColor="#fff"
          title='Coptic'
          subtitle='Youth Greece' />
        <Menu></Menu>
      </View>
    )
  } else {
    // Can't get this code to work because webview and toolbar together is
    // cancelling the webview from rendering. Maybe search it in the future?

    //   <WebView source={_menu[route.name].html} />
    // <ToolbarAndroid
    //   onIconClicked={navigationOperations.pop}
    //   style={{ backgroundColor: '#607D8B', height: 56 }}
    //   titleColor="#fff"
    //   subtitleColor="#fff"
    //   title={route.title}
    //   subtitle={route.subtitle} />
    return (
      <WebView source={_menu[route.name].html} />
    )
  }
};

class CopticYouthGreece extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#546E7A" barStyle="light-content" />
        <Navigator
          initialRoute={{name: 'welcome'}}
          renderScene={renderScene}
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottomAndroid}
        />
      </View>
    )
  }
}

AppRegistry.registerComponent('CopticYouthGreece', () => CopticYouthGreece);
