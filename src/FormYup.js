import * as yup from 'yup';
import {Formik} from 'formik';

import React, {Component, Fragment} from 'react';
import {TextInput, Text, Button, Alert} from 'react-native';

export default class AppFormik extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t: '',
    };
  }
  render() {
    return (
      <Formik
        initialValues={{titulo: '', descricao: ''}}
        onSubmit={values => {
          values;
          //Alert.alert(JSON.stringify(values));
          /* this.state.titulo = values.titulo;
          this.state.descricao = values.descricao; */
          this.state.t = values.titulo;
        }}
        validationSchema={yup.object().shape({
          titulo: yup.string().required('Informe o Título'),
          descricao: yup
            .string()
            .min(6, 'Deve conter mais de 5 caracteres!')
            .required(),
        })}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <Fragment>
            <TextInput
              value={values.titulo}
              onChangeText={handleChange('titulo')}
              onBlur={() => setFieldTouched('titulo')}
              placeholder="Título"
            />
            {touched.titulo && errors.titulo && (
              <Text style={{fontSize: 10, color: 'red'}}>{errors.titulo}</Text>
            )}
            <TextInput
              value={values.descricao}
              onChangeText={handleChange('descricao')}
              placeholder="Descrição"
              onBlur={() => setFieldTouched('descricao')}
            />
            {touched.descricao && errors.descricao && (
              <Text style={{fontSize: 10, color: 'red'}}>
                {errors.descricao}
              </Text>
            )}
            <Button title="Enviar" disabled={!isValid} onPress={handleSubmit} />
          </Fragment>
        )}
      </Formik>
    );
  }
}
