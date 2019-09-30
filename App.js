import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import MapView, {Marker} from 'react-native-maps'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      lat:-7.2379005,
      lng: -35.8858189
    }
  } 
  /*
         SP: -7.2379005, -35.8858189
         BH: -19.9027026, -44.0340895
         DF: -15.8080374, -47.8750231
     */
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
      }}
     >
       <Marker coordinate={{latitude:37.78825, longitude:-122.4324 }} title="São Paulo" />
     </MapView>

     <Text style={styles.texto}>{this.state.lat} X {this.state.lng}</Text>

     <View style={styles.buttonArea}>
       <Button title="São Paulo" onPress={} />
       <Button title="Belo Horizonte" onPress={} />
       <Button title="Brasília" onPress={} />
     </View>
    </View>
    );
   }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    height:300,
    width:'100%'
   },
  /* map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
   }, */
   texto:{
     fontSize:25
   },
   buttonArea:{
     flexDirection:'row'
   }
})
