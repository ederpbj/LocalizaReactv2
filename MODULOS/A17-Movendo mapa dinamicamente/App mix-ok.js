import React, {Component} from 'react';
import {
  Text,
  Button,
  StyleSheet,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default class App extends Component {
  constructor(props) {
    super(props);

    //Geolocation.requestAuthorization();
    //Geolocation.getCurrentPosition(info => console.log(info));

    this.state = {
      lat: -7.2379005,
      lng: -35.8858189,
      latitude: null,
      longitude: null,
      error: null,
      location: null,
    };

    this.moverMapa = this.moverMapa.bind(this);
    this.pegarPosicao = this.pegarPosicao.bind(this);
    this.success = this.success.bind(this);
    this.error = this.error.bind(this);

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
    Geolocation.getCurrentPosition(
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

  success(pos) {
    var crd = pos.coords;

    console.log('Sua posição atual é:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('Mais ou menos ' + crd.accuracy + ' metros.');
  }

  error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  }

  pegarPosicao() {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    //if ('geolocation' in navigator) {
    if (Geolocation) {
      Geolocation.getCurrentPosition(this.success, this.error, options);
    } else {
      /* geolocation IS NOT available */
      //alert('Não disponível geolocation');
      Alert.alert('Nada encontrado: ');
      console.log('Nada por aqui!');
      console.log(Geolocation.getCurrentPosition.toString());
    }
  }

  pegarNova() {
    Geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);

        this.setState({location});
      },
      error => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }

  findCoordinates = () => {
    Geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);

        this.setState({location});
      },
      error => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
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
            title="Pegar Nova Localização"
            onPress={() => {
              this.pegarNova();
            }}
          />

          <Button
            style={styles.botton}
            title="Campina Grande"
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

        <View style={styles.container}>
          <TouchableOpacity onPress={this.findCoordinates}>
            <Text style={styles.welcome}>Find My Coords?</Text>
            <Text>Location: {this.state.location}</Text>
          </TouchableOpacity>
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
