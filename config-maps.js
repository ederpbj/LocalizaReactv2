module.exports = {
  // Native
  get createAppContainer() {
    return require('@react-navigation/native').createAppContainer;
  },
  get createNavigationContainer() {
    console.warn(
      '`createNavigationContainer()` has been deprecated, please use `createAppContainer()` instead. You can also import createAppContainer directly from @react-navigation/native',
    );
    return require('@react-navigation/native').createAppContainer;
  },
  get createKeyboardAwareNavigator() {
    return require('@react-navigation/native').createKeyboardAwareNavigator;
  },
};
