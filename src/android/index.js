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
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'

import Menu from './components/Menu.js'
import Triangle from './components/Triangle.js'

const _menu = require('./_menu.js')

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const toolbarHeight = 56
const webviewHeight = deviceHeight - toolbarHeight

const resources = {
  hero: require('../../resources/church.jpg'),
}

// Listen to back button on Android Device
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop()
    return true
  }
  return false
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
    flex: 1,
    backgroundColor: '#E8EAF6'
  },
  homePage: {
    zIndex: 0
  },
  heroWrap: {
    width: deviceWidth,
    height: 250,
    position: 'relative',

    zIndex: 1,
  },
  menu: {
    marginTop: -80,
    zIndex: 2,
    elevation: 5
  },
  heroImage: {
    width: deviceWidth,
    height: 250,
  },
  heroContent: {
    bottom: 20,
    right: 20,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 2
  },
  heroContentText: {
    color: '#ffffff',
    fontSize: 30
  },
  toolbarWrapper: {
    height: toolbarHeight,
  },
  toolbar: {
    backgroundColor: '#3F51B5',
    height: toolbarHeight
  },
  webview: {
    height: webviewHeight
  }
})

var toolbar = null
var initialRoute = {
  name: 'welcome'
}
var renderScene = function(route, navigationOperations, onComponentRef) {
  _navigator = navigationOperations

  // if(drawer.ref) {
  //   drawer.close()
  // }

  if(route.name === 'welcome') {
    // default is home screen
    return (
      <View style={styles.homePage}>
        <ToolbarAndroid
          style={styles.toolbar}
          titleColor="#fff"
          title="Coptic Youth Greece" />
        <View style={styles.heroWrap}>
          <Image source={resources.hero} style={styles.heroImage} />
        </View>
        <View style={styles.menu}>
          <Menu />
        </View>
      </View>
    )
  } else {
    return (
      <View>
        <View style={styles.toolbarWrapper}>
          <Icon.ToolbarAndroid
            navIconName="arrow-back"
            onIconClicked={navigationOperations.pop}
            style={styles.toolbar}
            titleColor="#fff"
            subtitleColor="#fff"
            title={route.title}
            subtitle={route.subtitle} />
        </View>
        <WebView style={styles.webview} source={_menu[route.name].html} />
      </View>
    )
  }
}

class CopticYouthGreece extends Component {
  render() {
    return (
      <View style={styles.pageStyle}>
        <StatusBar backgroundColor="#3949AB" barStyle="light-content" />
        <Navigator
          initialRoute={initialRoute}
          renderScene={renderScene}
          configureScene={() => Navigator.SceneConfigs.FloatFromBottomAndroid}
        />
      </View>
    )
  }
}

AppRegistry.registerComponent('CopticYouthGreece', () => CopticYouthGreece)
