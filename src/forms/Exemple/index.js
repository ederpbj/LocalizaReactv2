import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Formik} from 'formik';
import TextInput from '../../components/TextInput';

function ExampleForm({onSubmit, initialValues, style}) {
  const renderForm = ({
    values,
    setFieldValue,
    setFieldTouched,
    touched,
    errors,
    handleSubmit,
    isValid,
    isSubmitting,
  }) => {
    return (
      <View style={StyleSheet.flatten([styles.container, style])}>
        <TextInput
          onChange={setFieldValue}
          onTouch={setFieldTouched}
          placeholder="Nome"
          name="name"
          value={values.name}
          error={touched.name && errors.name}
        />
        <TextInput
          onChange={setFieldValue}
          onTouch={setFieldTouched}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="E-mail"
          name="email"
          value={values.email}
          error={touched.email && errors.email}
        />
        <TextInput
          onChange={setFieldValue}
          onTouch={setFieldTouched}
          placeholder="Senha"
          name="password"
          secureTextEntry={true}
          value={values.senha}
          error={touched.password && errors.password}
        />
        <TextInput
          onChange={setFieldValue}
          onTouch={setFieldTouched}
          placeholder="Confirmar senha"
          name="passwordConfirm"
          secureTextEntry={true}
          value={values.passwordConfirm}
          error={touched.passwordConfirm && errors.passwordConfirm}
        />
        <TouchableOpacity
          disabled={!isValid || isSubmitting}
          onPress={handleSubmit}
          style={StyleSheet.flatten([
            styles.submit,
            !isValid ? styles.submitDisabled : null,
          ])}>
          <Text style={styles.submitText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      render={renderForm}
    />
  );
}

ExampleForm.defaultProps = {
  initialValues: {},
  onSubmit: () => null,
};

const styles = StyleSheet.create({
  container: {},
  submit: {
    height: 50,
    backgroundColor: '#f2b50c',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  submitText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitDisabled: {
    backgroundColor: '#d1cfcf',
  },
});

export default ExampleForm;
