import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../assets/theme.json';

interface Props {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const ButtonComponent = ({onPress}: Props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: styles.schemes.light.primary,
        height: 40,
        borderRadius: 100,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
      onPress={onPress}>
      <Text
        style={{
          color: styles.schemes.light.onPrimary,
          bottom: 1,
        }}>
        Ingresa
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
