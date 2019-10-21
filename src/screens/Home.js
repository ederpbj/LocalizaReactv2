import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {checkLogin} from '../actions/AuthAction';

export class Home extends Component {
  static navigationOptions = {
    title: 'Feed',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Feed de Fotos</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 25,
  },
});

//Transforma state em props para enviar para redux
const mapStateToProps = state => {
  return {
    status: state.auth.status,
  };
};

//Criar o connect com redux
//checkLogin vem do action
const HomeConnect = connect(
  mapStateToProps,
  {checkLogin},
)(Home);
export default HomeConnect;
