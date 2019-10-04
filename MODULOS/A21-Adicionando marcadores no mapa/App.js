/* eslint-disable no-alert */
import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

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
    this.map.animateCamera(
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
          //Evento de clique longo
          onLongPress={e => {
            alert(
              'Clicou em: ' +
                e.nativeEvent.coordinate.latitude +
                ' X ' +
                e.nativeEvent.coordinate.longitude,
            );
          }}
          style={styles.map}
          region={{
            latitude: this.state.lat,
            longitude: this.state.lng,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            coordinate={{latitude: this.state.lat, longitude: this.state.lng}}
            title="Centro de Brasília"
            description="Este local onde são arquitetadas a falcatruas"
            pinColor="#FF0000"
          />

          <Marker
            coordinate={{latitude: -15.804136000720641, longitude: -47.87523485720157}}
            title="Cabaré de Joana"
            description="Aqui faz aqui paga"
            pinColor="#0000FF"
          />

          <Marker
            coordinate={{latitude: -15.803915663345002, longitude: -47.87356853485108}}
            title="Cabaré de Joana"
            description="Aqui faz aqui paga"
            pinColor="#00FF00"
          />
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
