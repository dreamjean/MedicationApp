import React from 'react';
import { Pressable } from 'react-native';

import Icon from './Icon';

const IconButton = ({ onPress, style, ...rest }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        style,
      ]}
      {...{ onPress }}
    >
      <Icon {...rest} />
    </Pressable>
  );
};

export default IconButton;
