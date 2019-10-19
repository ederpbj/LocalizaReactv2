import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class PinMapa extends Component {
  render() {
    return (
      <View
        style={
          (pinMapStyles.quadrado,
          {backgroundColor: this.props.fundo, width: 80})
        }>
        <Text style={pinMapStyles.texto}>{this.props.contaMedia}</Text>
      </View>
    );
  }
}

const pinMapStyles = StyleSheet.create({
  quadrado: {
    backgroundColor: '#FF0000',
    width: 50,
    height: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});
