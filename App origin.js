import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MapView, {Marker} from 'react-native-maps'

export default class Map extends Component {
    /*
            SP: -7.2379005, -35.8858189
            BH: -19.9027026, -44.0340895
            DF: -15.8080374, -47.8750231
        */
    render() {
        return (
            <View style={styles.component}>
              <Text>Teste</Text>
                <MapView
                    style={styles.mapa}
                    region={{
                        latitude: -7.2379005,
                        longitude: -35.8858189,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    {/*<Marker coordinate={{latitude:0, longitude:0 }} title="São Paulo" />*/}
                </MapView>
                <Text>Fim Teste</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component:{
      flex:1
        //height:300
        //...StyleSheet.absoluteFillObject
       /*  position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0 */
    },
    map:{
      //flex:1
        height:300,
        //width:300
        //...StyleSheet.absoluteFillObject
        /* position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0 */
    }
})
