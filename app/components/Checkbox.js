import React from 'react';
import { Pressable } from 'react-native';

import { colors } from '../constants';
import Icon from './Icon';

const Checkbox = ({ checked, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        backgroundColor: pressed ? colors.lightBule : colors.white,
      })}
      onPress={onPress}
    >
      <Icon
        backgroundColor={checked ? colors.primary : colors.white}
        borderColor={checked ? colors.primary : colors.gray}
        round={false}
        iconName="check"
        iconRatio={0.8}
        size={20}
      />
    </Pressable>
  );
};

export default Checkbox;
