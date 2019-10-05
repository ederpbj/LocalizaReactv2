import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class PinMapa extends Component {
  render() {
    return (
      <View style={pinMapStyles.quadrado}>
        <Text style={pinMapStyles.texto}>{this.props.contaMedia}</Text>
      </View>
    );
  }
}

const pinMapStyles = StyleSheet.create({
  quadrado: {
    backgroundColor: '#FF0000',
    width: 60,
    height: 30,
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 15,
  },
});
