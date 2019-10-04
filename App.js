import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import MapView from 'react-native-maps';

export default class ProjetoMapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: -15.8080374,
      lng: -47.8750231,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          loadingEnabled={true}
          region={{
            latitude: this.state.lat,
            longitude: this.state.lng,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          {/*<Marker
            coordinate={{latitude: this.state.lat, longitude: this.state.lng}}
            title="São Paulo"
          />*/}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: '100%',
    width: '100%',
  },
});
