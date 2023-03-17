import {View, TextInput} from 'react-native';
import React from 'react';
import colors from '../assets/theme.json';

const InputComponent = () => {
  return (
    <View
      style={{
        height: 56,
        width: '100%',
        borderWidth: 1.5,
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        marginBottom: 30,
        borderRadius: 4,
      }}>
      <TextInput
        style={{color: 'black', marginLeft: 6, fontSize: 16}}
        placeholder={'clave'}
        placeholderTextColor={'black'}
      />
    </View>
  );
};

export default InputComponent;
