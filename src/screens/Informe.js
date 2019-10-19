import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Informe extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>
          Clique no mapa para adicioar um restaurante
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 17,
  },
});
