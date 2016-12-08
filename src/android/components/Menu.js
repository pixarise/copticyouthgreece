'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  View,
  TouchableNativeFeedback,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
} = ReactNative;

import Icon from 'react-native-vector-icons/MaterialIcons';

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  menuWrapper: {
    margin: 20,
    borderRadius: 2,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  button: {
    backgroundColor: '#ffffff',
    height: 55,
    paddingTop: 13,
    paddingLeft: 10,
    position: 'relative',
    borderRadius: 4,
  },
  buttonText: {
    color: '#444444',
    fontSize: 20,
  },
  buttonIcon: {
    position: 'absolute',
    right: 10,
    top: 11,
  },

  bg800: {
    backgroundColor: '#283593',
  },
  bg700: {
    backgroundColor: '#303F9F',
  },
  bg600: {
    backgroundColor: '#3949AB',
  },
  bg500: {
    backgroundColor: '#3F51B5',
  },
  bg400: {
    backgroundColor: '#5C6BC0',
  },
  bg300: {
    backgroundColor: '#7986CB',
  },
});

const _menu = require('../_menu.js');

class Menu extends React.Component {
  render() {
    return (
      <View style={styles.menuWrapper}>

        <ScrollView>
          <View style={styles.card}>
            <TouchableNativeFeedback onPress={_menu.bible.open} background={TouchableNativeFeedback.SelectableBackground()} style={styles.button}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>H αγία γραφή</Text>
                <View style={styles.buttonIcon}>
                  <Icon name="import-contacts" size={30} color="#3F51B5"/>
                </View>
              </View>
            </TouchableNativeFeedback>
          </View>

          <View style={styles.card}>
            <TouchableNativeFeedback onPress={_menu.horologe.open} background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Ωρολόγιο</Text>
                <View style={styles.buttonIcon}>
                  <Icon name="import-contacts" size={30} color="#3F51B5" />
                </View>
              </View>
            </TouchableNativeFeedback>
          </View>

          <View style={styles.card}>
            <TouchableNativeFeedback onPress={_menu.missal.open} background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Ευχολόγιο</Text>
                <View style={styles.buttonIcon}>
                  <Icon name="import-contacts" size={30} color="#3F51B5" />
                </View>
              </View>
            </TouchableNativeFeedback>
          </View>

          <View style={styles.card}>
            <TouchableNativeFeedback onPress={_menu.operations.open} background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Λειτουργικά</Text>
                <View style={styles.buttonIcon}>
                  <Icon name="import-contacts" size={30} color="#3F51B5" />
                </View>
              </View>
            </TouchableNativeFeedback>
          </View>

          <View style={styles.card}>
            <TouchableNativeFeedback onPress={_menu.thefathers.open} background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Οι πατέρες</Text>
                <View style={styles.buttonIcon}>
                  <Icon name="import-contacts" size={30} color="#3F51B5" />
                </View>
              </View>
            </TouchableNativeFeedback>
          </View>

          <View style={styles.card}>
            <TouchableNativeFeedback onPress={_menu.thecopticpeople.open} background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Οι κόπτες</Text>
                <View style={styles.buttonIcon}>
                  <Icon name="import-contacts" size={30} color="#3F51B5" />
                </View>
              </View>
            </TouchableNativeFeedback>
          </View>

        </ScrollView>
      </View>
    )
  }
}

module.exports = Menu;
