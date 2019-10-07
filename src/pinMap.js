import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default class PinMapa extends Component {
  render() {
    return (
      <Marker
        key={this.props.key}
        coordinate={this.props.coords}
        pinColor={this.props.pinColor}
        title={this.props.title}
        description={this.props.description}
      />
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
