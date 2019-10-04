import React, {Component} from 'react';
import {Text, Button, StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: -7.2379005,
      lng: -35.8858189,
      latitude: null,
      longitude: null,
      error: null,
    };

    this.moverMapa = this.moverMapa.bind(this);
    this.pegarPosicao = this.pegarPosicao.bind(this);

    /*
    SP: -7.2379005, -35.8858189
    BH: -19.9027026, -44.0340895
    DF: -15.8080374, -47.8750231
  */
  }

  moverMapa(lat, lng) {
    let state = this.state;
    state.lat = lat;
    state.lng = lng;
    this.setState(state);
  }

  /* componentDidMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         console.log("wokeeey");
         console.log(position);
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );
   } */

  pegarPosicao() {
    navigator.geolocation.getCurrentPosition(
      data => {
        //Geolocation.getCurrentPosition(info => console.log(info));
        //alert("Pegou localização!")
        //alert(JSON.stringify(data))

        let latitude = data.coords.latitude;
        let longitude = data.coords.longitude;
        let acuracy = data.coords.accuracy;

        // eslint-disable-next-line no-alert
        alert(latitude + ' ' + longitude + ' ' + acuracy);
      },
      () => {
        // eslint-disable-next-line no-alert
        alert('Deu algum erro!');
      },
    );
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
          <Marker
            coordinate={{latitude: this.state.lat, longitude: this.state.lng}}
            title="São Paulo"
          />
        </MapView>

        <Text style={styles.texto}>
          {this.state.lat} X {this.state.lng}
        </Text>

        <View style={styles.buttonArea}>
          <Button
            style={styles.botton}
            title="Pegar Localização"
            onPress={() => {
              this.pegarPosicao();
            }}
          />

          <Button
            style={styles.botton}
            title="São Paulo"
            onPress={() => {
              this.moverMapa(-7.2379005, -35.8858189);
            }}
          />
          <Button
            style={styles.botton}
            title="Belo Horizonte"
            onPress={() => {
              this.moverMapa(-19.9027026, -44.0340895);
            }}
          />
          <Button
            style={styles.botton}
            title="Brasília"
            onPress={() => {
              this.moverMapa(-15.8080374, -47.8750231);
            }}
          />
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
    height: 300,
    width: '100%',
  },
  /* map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
   }, */
  texto: {
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonArea: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  botton: {
    flex: 1,
  },
});
