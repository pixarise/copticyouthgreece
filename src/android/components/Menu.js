'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  View,
  ScrollView,
  TouchableNativeFeedback,
  StyleSheet,
  Text,

} = ReactNative;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffffff',
    padding: 16,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#fafafa',
    position: 'relative'
  },
  buttontext: {
    color: '#444',
    fontSize: 17
  },
});

const _menu = require('../_menu.js');

class Menu extends React.Component {
  render() {
    return (
      <View>
        <TouchableNativeFeedback onPress={_menu.bible.open} background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={styles.button}>
            <Text style={styles.buttontext}>H αγία γραφή</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={_menu.horologe.open} background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={styles.button}>
            <Text style={styles.buttontext}>Ωρολόγιο</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={_menu.missal.open} background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={styles.button}>
            <Text style={styles.buttontext}>Ευχολόγιο</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={_menu.operations.open} background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={styles.button}>
            <Text style={styles.buttontext}>Λειτουργικά</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={_menu.thefathers.open} background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={styles.button}>
            <Text style={styles.buttontext}>Οι πατέρες</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={_menu.thecopticpeople.open} background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={styles.button}>
            <Text style={styles.buttontext}>Οι κόπτες</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}


module.exports = Menu;
