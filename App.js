
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Api from './componentes/ApiMedicamentos'

export default function App() {
  
  return (
    <View style={styles.container}>
      <Api  />    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

