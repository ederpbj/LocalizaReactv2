/* eslint-disable no-alert */
import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import MapView from 'react-native-maps';

export default class ProjetoMapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: -15.8080374,
      lng: -47.8750231,
      txt: '',
    };

    this.moverMapa = this.moverMapa.bind(this);
  }

  //Aula 20-Metodos do mapa
  moverMapa() {
    this.map.animateToCoordinate(
      {
        latitude: -15.8100374,
        longitude: -47.8750231,
      },
      2000,
    );

    //Move o mapa de forma animada
    this.map.fitToElements(true);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          //Criar referência no mapa
          ref={map => {
            this.map = map;
          }}
          style={styles.map}
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

        <View style={styles.info}>
          <Button title="Mover mapa" onPress={this.moverMapa} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  info: {
    height: 100,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
