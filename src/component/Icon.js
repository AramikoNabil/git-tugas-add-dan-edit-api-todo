import React from 'react';
import {Text, Image} from 'react-native';
import k from '../assets/icon/profile.png';

const iconMap = {
  home: '♤',
  Todo1: '♧',
  Todo2: '♧',
  Todo3: '♤',
  k: '🃏',
};

const Icon = ({name, color, style, ...props}) => {
  const icon = iconMap[name];

  return <Text style={[{fontSize: 26, color}, style]}>{icon}</Text>;
};

export default Icon;
