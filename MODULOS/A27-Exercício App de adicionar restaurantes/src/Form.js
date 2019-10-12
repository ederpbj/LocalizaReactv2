import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';

//formularios com formik
//https://blog.rocketseat.com.br/gerenciando-formularios-no-react-native/
import {withFormik} from 'formik';

const Form = props => (
  <View style={styles.container}>
    <Text>Email:</Text>
    <TextInput
      value={props.values.email}
      onChangeText={text => props.setFieldValue('email', text)}
    />

    <Text>Senha:</Text>
    <TextInput
      value={props.values.password}
      onChangeText={text => props.setFieldValue('password', text)}
    />

    <Button onPress={props.handleSubmit} title="Login" />

    {console.log(props.isSubmitting)}
  </View>
);

export default withFormik({
  mapPropsToValues: () => ({email: '', password: ''}),

  handleSubmit: values => {
    console.log(values);
    //alert(values.email);
  },
})(Form);

const styles = StyleSheet.create({
  /* container: {
    backgroundColor: '#FF0000',
    width: '100%',
    height: '50%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, */
  container: {
    margin: 30,
    padding: 20,
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});
