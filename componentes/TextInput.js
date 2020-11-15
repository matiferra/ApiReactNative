import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
    
const InputTexto = (props) => {
  
  const [value, onChangeText] = React.useState('');
  
  return (
    <View>
      <TextInput
        {...props
          
        } // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        keyboardAppearance={'light'}
        maxLength={4}  
        style={styles.cuadrado}
        onChangeText={text => onChangeText(text)}
        numberOfLines={4}
        value={value}      
        />
    </View>
  )};

  const styles = StyleSheet.create({
    cuadrado: {
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 2,
      margin: 10,
      textAlign: 'center',
    }
  });
  
  export default InputTexto;