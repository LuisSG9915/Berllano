import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from '../assets/theme.json';
const LogoComponent = () => {
  return (
    <View
      style={{
        marginBottom: 25,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1.5,
        paddingVertical: 15,
        marginRight: 10,
        marginTop: 5,
      }}>
      <Image
        style={{width: 180, height: 28}}
        source={require('../assets/berllano_logo.jpg')}
      />
    </View>
  );
};

export default LogoComponent;
