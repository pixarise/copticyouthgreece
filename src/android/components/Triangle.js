'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  View,
  StyleSheet,
  Dimensions,
} = ReactNative

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
	triangleCorner: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: deviceWidth,
    borderTopWidth: 50,
    borderRightColor: 'transparent',
    borderTopColor: '#607D8B',
  },
})

class Triangle extends React.Component {
  render() {
    return (
      <View style={[styles.triangleCorner, this.props.style]} />
    )
  }
}

module.exports = Triangle
