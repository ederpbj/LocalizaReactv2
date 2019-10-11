import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';

import FormYup from './src/FormYup';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Exibir modal</button>
      <button onClick={() => setModalOpen(false)}>Remover modal</button>

      {modalOpen && alert("Ola hooks")}
    </div>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  values: {
    fontSize: 16,
    marginHorizontal: 6,
    marginTop: 15,
    marginBottom: 40,
  },
});

export default App;
