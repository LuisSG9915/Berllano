import {View, Text, TouchableOpacity, Image, Switch} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import styles from '../assets/theme.json';
import LogoComponent from '../components/LogoComponent';

type props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const FirstScreen = ({navigation}: props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () =>
    setIsEnabled((previousState: any) => !previousState);
  return (
    <View style={{flex: 1}}>
      <LogoComponent />
      <Text style={{color: 'black'}}>Scan de puntos</Text>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Switch
          trackColor={{false: '#767577', true: styles.schemes.light.primary}}
          thumbColor={isEnabled ? styles.schemes.light.onPrimary : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Image
          style={{
            width: 220,
            height: 220,
          }}
          source={require('../assets/qrStatic.png')}
        />
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Text>A123425</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FirstScreen;
