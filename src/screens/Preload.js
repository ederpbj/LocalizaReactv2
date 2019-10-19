import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

//importar as actions (AuthActions)

export class Preload extends Component {
  static navigationOptions = {
    title: '',
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>
          Carregando.... STATUS:{this.props.status}
        </Text>
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
const PreloadConnect = connect(
  mapStateToProps,
  {},
)(Preload);
export default PreloadConnect;
