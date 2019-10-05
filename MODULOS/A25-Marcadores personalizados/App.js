import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import PinMapa from './src/pinMap';

export default class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: -15.8080374,
      lng: -47.8750231,
      txt: '',
      markers: [
        {
          key: 0,
          contaMedia: 'R$ 10',
          coords: {
            latitude: -15.8080374,
            longitude: -47.8750231,
          },
          pinColor: '#FF0000',
          title: 'Minha Localização',
          description: 'Estou aqui baby!',
        },
        {
          key: 1,
          contaMedia: 'R$ 50',
          coords: {
            latitude: -15.803915663345002,
            longitude: -47.87356853485108,
          },
          pinColor: '#00FF00',
          title: 'Embaixada dos Estado Unidos',
          description: 'Vem que tem',
        },
        {
          key: 2,
          contaMedia: 'R$ 75',
          coords: {
            latitude: -15.804136000720641,
            longitude: -47.87523485720157,
          },
          pinColor: '#0000FF',
          title: 'Embaixada da Russia',
          description: 'Vai que cola!',
        },
        {
          key: 3,
          contaMedia: 'R$ 150',
          coords: {
            latitude: -15.80548350533809,
            longitude: -47.87428334355355,
          },
          pinColor: '#FF00FF',
          title: 'Embaixada da França',
          description: 'Vive la France',
        },
        {
          key: 4,
          contaMedia: 'R$ 200',
          coords: {
            latitude: -15.80700350533809,
            longitude: -47.88008334355355,
          },
          pinColor: '#FF00FF',
          title: 'Local Novo',
          description: 'Liberdade que mais tenha',
        },
      ],
    };

    //this.markerDrag = this.markerDrag.bind(this);
    //this.moverMapa = this.moverMapa.bind(this);
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
          {this.state.markers.map(marker => {
            return (
              <Marker key={marker.key} coordinate={marker.coords}>
                <PinMapa
                  contaMedia={marker.contaMedia}
                  fundo={marker.pinColor}
                />
              </Marker>
            );
          })}
        </MapView>

        <View style={styles.info} />
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
  img: {
    height: 20,
    width: 20,
  },
});
