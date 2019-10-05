import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class pinMap extends Component {
  render() {
    return (
      <View style={styles.quadrado}>
        <Text style={{color: '#FFFFFF', fontSize: 20}}>
          {marker.contaMedia}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    quadrado:{
        backgroundColor:''
    }
});
