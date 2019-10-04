import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import MapView from 'react-native-maps';

export default class ProjetoMapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: -15.8080374,
      lng: -47.8750231,
      txt: '',
    };

    this.mapaMudou = this.mapaMudou.bind(this);
  }
  mapaMudou(region) {
    //console.log('Region chegou');
    let state = this.state;

    state.txt = 'Mudou ' + region.latitude + ' X ' + region.longitude;

    this.setState(state);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          //Tipos de mapa
          //mapType="standard"
          //mapType="satellite"
          //mapType="hybrid"

          //Bloquear Mover mapa
          //scrollEnabled={false}

          //Zoom mapa
          //zoomEnabled={false}

          //Rotação
          //rotateEnabled={false}

          //Eventos
          //onMapReady={() => { alert('Mapa carregado'); }}

          //Evento mais usado, se mudar posição do mapa:
          //onRegionChange={this.mapaMudou}

          //Só executa quando mapa parar
          onRegionChangeComplete={this.mapaMudou}

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

        <View style={styles.info}>
          <Text>{this.state.txt}</Text>
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
    height: '80%',
    width: '100%',
  },
  info: {
    height: 100,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
