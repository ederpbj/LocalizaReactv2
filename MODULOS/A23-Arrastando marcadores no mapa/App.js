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
      markers: [
        {
          key: 0,
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
          coords: {
            latitude: -15.80548350533809,
            longitude: -47.87428334355355,
          },
          pinColor: '#FF00FF',
          title: 'Embaixada da França',
          description: 'Vive la France',
        },
      ],
    };

    this.markerDrag = this.markerDrag.bind(this);
    this.moverMapa = this.moverMapa.bind(this);
  }

  /*
   O método componentDidMount() é executado depois que a saída do componente
   é renderizada no DOM. Este é um bom lugar para configurar um temporizador:
   */
  /* componentDidMount() {
    //this.markerDrag(e);
  } */

  markerDrag(e) {
    let state = this.state;
    let item = e._targetInst.return.key;
    //alert(item)

    // eslint-disable-next-line no-unused-vars
    for (let i in state.markers) {
      //alert(state.markers[i].key)
      // eslint-disable-next-line eqeqeq
      if (state.markers[i].key == item) {
        state.markers[i].coords = e.nativeEvent.coordinate;
        state.markers[i].pinColor = '#FF0000';
        //state.markers[i].title = 'Relou mano';
      }
    }

    this.setState(state);
  }

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
          //Marcar no mapa dinamicamente
          style={styles.map}
          region={{
            latitude: this.state.lat,
            longitude: this.state.lng,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          {this.state.markers.map(marker => {
            return (
              <Marker
                //Habilita arrastar
                draggable
                //Quando arrastar
                onDragEnd={this.markerDrag}
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
