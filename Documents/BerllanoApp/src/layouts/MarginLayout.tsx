import {View, Text} from 'react-native';
import React from 'react';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const MarginLayout = ({children}: Props) => {
  return <View style={{marginHorizontal: 18}}>{children}</View>;
};

export default MarginLayout;
