import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import Form from './src/Form';
import Informe from './src/Informe';
import FormYup from './src/FormYup';
import FormA from './src/FormA';

export default class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: -15.8080374,
      lng: -47.8750231,
      txt: '',
      click: false,
      titulo: '',
      descricao: '',
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

    this.addMarker = this.addMarker.bind(this);
    this.setMarker = this.setMarker.bind(this);
    this.exibeInfo = this.exibeInfo.bind(this);
  }

  exibeInfo(props) {
    if (this.state.click === false) {
      return <Informe />;
    } else {
      //return <Form />;
      //return <FormYup />;
    }

    /* let state = this.state;

    state.titulo = getValues.ti
    this.setState(state); */
  }

  setMarker() {
    let state = this.state;
    alert(state.marker);
  }

  addMarker(e) {
    let state = this.state;

    state.markers.push({
      key: state.markers.length,
      coords: {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
      },
      pinColor: '#FF0000',
      title: 'Novo ponto',
      description: 'Seu ponto escolhido',
    });
    state.lat = e.nativeEvent.coordinate.latitude;
    state.lng = e.nativeEvent.coordinate.longitude;

    state.click = true;

    this.setState(state);
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
          onPress={this.addMarker}
          region={{
            latitude: this.state.lat,
            longitude: this.state.lng,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          {this.state.markers.map(marker => {
            return (
              <Marker
                key={marker.key}
                coordinate={marker.coords}
                pinColor={marker.pinColor}
                title={marker.title}
                description={marker.description}
              />
            );
          })}
        </MapView>

        <View style={styles.info}>
          {this.exibeInfo()}
          <Text>Titulo é: {this.state.titulo}</Text>
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
    height: 250,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    //alignItems: 'center',
  },
  img: {
    height: 20,
    width: 20,
  },
  texto: {
    fontSize: 15,
    alignContent: 'center',
    alignItems: 'center',
  },
});
