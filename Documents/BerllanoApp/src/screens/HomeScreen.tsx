import {View, Text} from 'react-native';
import React from 'react';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import LogoComponent from '../components/LogoComponent';
import colors from '../assets/theme.json';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen', any>;

const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={{flex: 1}}>
      <LogoComponent />
      <View style={{marginHorizontal: 18}}>
        <View
          style={{
            backgroundColor: colors.schemes.light.primaryContainer,
            borderRadius: 28,
            padding: 25,
            paddingVertical: 45,
          }}>
          <Text
            style={{
              color: 'black',
              marginBottom: 52,
              fontSize: 40,
            }}>
            Registre su sesión
          </Text>
          <View
            style={{
              alignItems: 'center',
              marginBottom: 25,
            }}>
            <InputComponent />
            <InputComponent />
            <ButtonComponent
              onPress={() => navigation.navigate('FirstScreen')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
